import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { listUsers, User } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

// Exercício 1 - crie um endpoint que busque todos os usuários de uma lista
app.get("/users", (req: Request, res: Response) => {
  try {
    if (!listUsers) {
      res.statusCode = 404;
      throw new Error("Não foi possível achar a lista de produtos");
    }

    res
      .status(200)
      .send({ message: "Lista com todos os usuários", data: listUsers });
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

/**
  ***Exercício 2**
    
  Agora, vamos refatorar o exercício 1 e implementar uma funcionalidade que busque todos os usuários 
  que tenham uma propriedade `type` específica, recebendo apenas um `type` por vez. Após isso, responda:
    
  a. Como você passou os parâmetros de type para a requisição? Por quê?
  Eu passei por query, acho que é melhor opção.
    
  b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados?
  Criei um enum UserTypes e passei a query para upperCase. 
 */

app.get("/usersByTypes", (req: Request, res: Response) => {
  try {
    const type1 = req.query.type as string;

    const type = type1.toUpperCase();

    if (!listUsers) {
      res.statusCode = 404;
      throw new Error("Not found");
    }

    if (type === "") {
      res.statusCode = 422;
      throw new Error("Invalid value for type.");
    }

    const filteredByType: User[] = listUsers.filter((item) => {
      return item.type === type;
    });

    if (type !== "" && filteredByType.length === 0) {
      res.statusCode = 404;
      throw new Error(`It wasn't possible to find the ${type}`);
    }

    res.status(200).send({
      message: `Lista com todos os usuários do tipo: ${type}`,
      data: filteredByType,
    });
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

/**
 ***Exercício 3**
    
    Vamos agora praticar o uso de buscas mais variáveis. Refatore novamente o exercício 1 e 
    implemente a funcionalidade de search, para encontrar um usuário buscando ****por **nome**.
    
    *a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?*
    Por query.
    
    b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido 
    encontrado.
 */

app.get("/usersByName", (req: Request, res: Response) => {
  try {
    const name1 = req.query.name as string;
    const name = name1.toLowerCase();

    if (!listUsers) {
      res.statusCode = 404;
      throw new Error("Not found list users");
    }

    let listToDisplay: User[] = [];

    if (name === "") {
      listToDisplay = [...listUsers];
    }

    const usersByName: User[] | undefined = listUsers.filter((item) => {
      return item.name.toLowerCase() === name;
    });

    if (name !== "" && usersByName.length === 0) {
      res.statusCode = 404;
      throw new Error(`User with this ${name} not found`);
    }

    if (name !== "" && usersByName.length !== 0) {
      listToDisplay = [...usersByName];
    }

    res
      .status(200)
      .send({ message: "Lista com todos os usuários", data: listToDisplay });
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

/**
 * - **Exercício 4**
    
    Fizemos algumas buscas no nosso conjunto de itens, agora é hora de **adicionar** coisas. 
    Comecemos criando um usuário na nossa lista. Crie um endpoint que use o método `POST` para 
    adicionar um item ao nosso conjunto de usuários.
    
    a. Mude o método do endpoint para `PUT`. O que mudou?
      Apareceu um erro 404 - not found.
    
    b. Você considera o método `PUT` apropriado para esta transação? Por quê?
      Não é apropriado pq por convensão o método put é para update e o método post para create. 
 */

app.post("/users", (req: Request, res: Response) => {
  try {
    const { id, name, email, type, age } = req.body;

    if (!id || !name || !email || !type || !age) {
      res.statusCode = 422;
      throw new Error("Please verify parameters");
    }

    if (!listUsers) {
      res.statusCode = 404;
      throw new Error("Not found list users");
    }

    const newUser: User = {
      id,
      name,
      email,
      type,
      age,
    };

    listUsers.push(newUser);

    res
      .status(201)
      .send({ message: "User created successfully", data: listUsers });
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

/**
 * - **Exercício 5**
    
    Vamos **alterar** nosso último usuário. Crie um endpoint com o método `PUT` para alterar 
    o nome do nosso usuário recém criado. Adicione em seu nome o sufixo `-ALTERADO`. Para este 
    caso, encerre a request sem enviar uma resposta no **body**.
 */

app.put("/users/:id", (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { name } = req.body;

    if (!id || !name) {
      res.statusCode = 422;
      throw new Error("Please verify parameters");
    }

    if (!listUsers) {
      res.statusCode = 404;
      throw new Error("Not found list users");
    }

    const userFiltered: User[] = listUsers.filter((item) => {
      if (item.id === id) {
        return (item.name = name);
      }
      return item;
    });

    if (
      listUsers.filter((item) => {
        return item.id === id;
      }).length === 0
    ) {
      res.statusCode = 404;
      throw new Error(`Could not find ${id} in user list`);
    }

    res.status(200).end();
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

/**
 ***Exercício 6**    
  Essa não! Alteramos um dado por engano. Vamos **realterar** nosso último usuário. 
  Crie um endpoint com o método `PATCH` para alterar mais uma vez o nome do nosso usuário 
  recém alterado. Adicione em seu nome o sufixo `-REALTERADO`.
 */

app.patch("/users/:id", (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { name } = req.body;

    if (!id || !name) {
      res.statusCode = 422;
      throw new Error("Please verify parameters");
    }

    if (!listUsers) {
      res.statusCode = 404;
      throw new Error("Not found list users");
    }

    const userFiltered: User[] = listUsers.filter((item) => {
      if (item.id === id) {
        return (item.name = name);
      }
      return item;
    });

    if (
      listUsers.filter((item) => {
        return item.id === id;
      }).length === 0
    ) {
      res.statusCode = 404;
      throw new Error(`Could not find ${id} in user list`);
    }

    res.status(200).send({ message: "User correction", data: userFiltered });
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

/**
**Exercício 7**
  Por fim, vamos remover este usuário de nossa lista. Crie um endpoint que receba um 
  id em seu `path` e utilize-o para removê-lo da lista de usuários.
*/
app.delete("/users/:id", (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (!id) {
      res.statusCode = 422;
      throw new Error("Please verify parameters");
    }

    if (!listUsers) {
      res.statusCode = 404;
      throw new Error("Not found list users");
    }

    const userDelete: User[] = listUsers.filter((item) => {
      return item.id !== id;
    });

    if (
      listUsers.filter((item) => {
        return item.id === id;
      }).length === 0
    ) {
      res.statusCode = 404;
      throw new Error(`Could not find ${id} in user list`);
    }

    res
      .status(200)
      .send({ message: "User successfully deleted", data: userDelete });
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
