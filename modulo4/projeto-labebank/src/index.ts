import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { listUsers, User, Statement } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

// API Test
app.get("/test", (req: Request, res: Response) => {
  res.send({ message: "Api funcionando" });
});

/**
 * Exercício 6 -  Crie um método GET na entidade users função que será responsável por pegar todos
 * os usuários existentes no array de usuários.
 */

app.get("/users", (req: Request, res: Response) => {
  try {
    if (!listUsers) {
      res.statusCode = 404;
      throw new Error("Not found list users");
    }
    res.status(200).send({ message: "List all user", data: listUsers });
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

/**
 * Desafio 2 - Adicione mais uma validação na função do item 1 (Criar conta): verifiquem se
 * o CPF passado já não está atrelado a alguma conta existente.
 */

app.get("/users/:cpf", (req: Request, res: Response) => {
  try {
    const { cpf } = req.params;

    if (!cpf) {
      res.statusCode = 422;
      throw new Error("Check the CPF, needs to be: 000.000.000-00");
    }

    if (!listUsers) {
      res.statusCode = 404;
      throw new Error("Not found list users");
    }

    const existsUser = listUsers.find((item) => {
      if (item.cpf === cpf) {
        return item;
      }
    });

    if (!existsUser) {
      res.statusCode = 412;
      throw new Error("CPF not registered");
    }
    res
      .status(200)
      .send({ message: "Account balance", data: existsUser.balance });
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

// Exercício 5 - Crie um endpoint  que utilize o método POST da entidade users que será responsável
// por cadastrar um usuário em um array de usuários.
/**
 * Exercício 7 - Adicione, uma validação no item 1 (Criar conta): o usuário deve possuir mais do que 18
 * anos para conseguir se cadastrar. Caso não possua, exiba uma mensagem de erro.
 */

app.post("/users", (req: Request, res: Response) => {
  try {
    const { name, cpf, birthDate } = req.body;

    if (!name || !cpf || !birthDate) {
      res.statusCode = 422;
      throw new Error("Check the parameters!");
    }

    if (!listUsers) {
      res.statusCode = 404;
      throw new Error("Not found list users");
    }

    const dateToTimeStamp = (data: string): number => {
      const fullDate = data.split("/");
      const year = Number(fullDate[2]);
      const month = Number(fullDate[1]) - 1;
      const day = Number(fullDate[0]);
      return new Date(year, month, day).getTime();
    };

    let timestampToday: number = new Date().getTime();
    let age: number =
      timestampToday / 31536000000 - dateToTimeStamp(birthDate) / 31536000000;

    if (age < 18) {
      res.statusCode = 412;
      throw new Error("User is under 18 years old");
    }

    const findCpf: Boolean =
      listUsers.filter((item) => {
        return item.cpf.includes(cpf);
      }).length !== 0;

    if (findCpf) {
      res.statusCode = 412;
      throw new Error("CPF already registered");
    }

    const newId = listUsers.length + 1;

    const newUser: User = {
      id: newId,
      name,
      cpf,
      birthDate,
      balance: 0,
      statement: [],
    };

    if (!newUser) {
      res.statusCode = 404;
      throw new Error("Not found list users");
    }

    listUsers.push(newUser);

    res
      .status(201)
      .send({ message: "User created successfully", data: listUsers });
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

/**
 * Desafio 5 -  Crie um endpoint post que permita ao cliente pagar uma conta. Ela deve
 * receber uma data de vencimento da conta, uma descrição, um valor e o CPF do titular;
 * e salvar uma transação no extrato da conta correspondente. O saldo do usuário não deve
 * ser atualizado neste momento. Caso nenhuma data seja passada, considere que o pagamento
 * deve ser feito hoje.
 *
 *
 * Desafio 7 - Adicione uma validação ao endpoint de pagar conta: o usuário não pode colocar
 * uma data que já passou.
 *
 * Desafio 8 - Adicione mais uma validação ao endpoint de pagar conta: o usuário não pode tentar
 * fazer um pagamento cujo valor seja maior do que seu saldo atual.
 */

app.post("/users/payment", (req: Request, res: Response) => {
  try {
    let { name, cpf, value, datePayment } = req.body;

    if (!name || !cpf || !value) {
      res.statusCode = 422;
      throw new Error("Check the parameters!");
    }

    if (!listUsers) {
      res.statusCode = 404;
      throw new Error("Not found list users");
    }

    const date: Date = new Date();
    const actualDate: string = date.toLocaleDateString();

    if (!datePayment || typeof datePayment !== "string") {
      datePayment = actualDate;
    }

    if (datePayment < actualDate) {
      res.statusCode = 422;
      throw new Error("Invalid payment date");
    }

    const paymentValue = value * -1;

    const newStatement: { value: number; description: string; date: string } = {
      value: paymentValue,
      description: "Pagamento boleto",
      date: datePayment,
    };

    const existsUser =
      listUsers.filter((item) => {
        if (item.cpf === cpf && item.name === name) {
          console.log(item.balance);
          if (item.balance < value) {
            res.statusCode = 422;
            throw new Error("Insufficient account balance");
          }
          item.statement.push(newStatement);
          return item;
        }
      }).length !== 0;

    if (!existsUser) {
      res.statusCode = 412;
      throw new Error("CPF, name not registered");
    }
    res.status(200).send({ message: `Account balance`, data: listUsers });
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

/**
 * Desafio 3 - Crie um endpoint put que receba um nome, um CPF e um valor. Ele deve adicionar
 * o valor ao saldo do usuário. O nome e o CPF devem ser iguais ao que estiver salvo no sistema
 * Se algum dos dados for diferente, exiba uma mensagem de erro.
 */

/**
 * Desafio 4 - Altere o endpoint de adicionar saldo para que ela adicione um item ao extrato da
 * conta do usuário: indicando o valor e a data da transação. A descrição para este tipo de item
 * deve ser sempre a mesma ("Depósito de dinheiro"). A data pode ser salva como timestamp ou
 * string.
 */

app.put("/users", (req: Request, res: Response) => {
  try {
    const { name, cpf, value } = req.body;

    if (!name || !cpf || !value) {
      res.statusCode = 422;
      throw new Error("Check the parameters!");
    }

    if (!listUsers) {
      res.statusCode = 404;
      throw new Error("Not found list users");
    }

    const date: Date = new Date();
    const actualDate: string = date.toLocaleDateString();

    const newStatement: { value: number; description: string; date: string } = {
      value,
      description: "Depósito de dinheiro",
      date: actualDate,
    };

    const existsUser =
      listUsers.filter((item) => {
        if (item.cpf === cpf && item.name === name) {
          item.statement.push(newStatement);
          return item;
        }
      }).length !== 0;

    if (!existsUser) {
      res.statusCode = 412;
      throw new Error("CPF, name not registered");
    }
    res.status(200).send({ message: `Account balance`, data: listUsers });
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

/**
 * Desafio 6 - Crie um novo endpoint put responsável por atualizar o saldo de um cliente.
 * Para isto, percorra os itens do extrato e atualize o saldo somente para as contas cujas
 * datas são anteriores a hoje.
 */

app.put("/users/updatedBalance", (req: Request, res: Response) => {
  try {
    const { name, cpf, value } = req.body;

    if (!name || !cpf || !value) {
      res.statusCode = 422;
      throw new Error("Check the parameters!");
    }

    if (!listUsers) {
      res.statusCode = 404;
      throw new Error("Not found list users");
    }

    const date = new Date();
    const actualDate = date.toLocaleDateString();

    const existsUser =
      listUsers.filter((item) => {
        let saldo: number = 0;
        if (item.cpf === cpf && item.name === name) {
          item.statement.map((item) => {
            if (item.date < actualDate) {
              saldo += item.value;
            }
          });
        }
        item.balance += saldo;
        return item;
      }).length !== 0;

    if (!existsUser) {
      res.statusCode = 412;
      throw new Error("CPF, name not registered");
    }
    res.status(200).send({ message: `Account balance`, data: listUsers });
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
