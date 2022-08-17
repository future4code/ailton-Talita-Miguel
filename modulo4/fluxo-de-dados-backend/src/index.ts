import express, { Request, Response } from "express";
import cors from "cors";
import { Product, listProducts } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

// Exercicio 1 - mensagem genérica avisando que a API está funcional.
app.get("/test", (req: Request, res: Response) => {
  res.send({ message: "Api funcionando" });
});

// Exercício 3 e refatoração Exercício 7 - Desenvolva um endpoint que **cria um novo produto** e retorna a lista de
// produtos atualizada.
app.post("/newProduct", (req: Request, res: Response) => {
  try {
    const { name, price } = req.body;

    if (!name || !price) {
      res.statusCode = 401
      throw new Error("Nome ou preço não podem ser vazios!");
    }

    if (typeof name !== "string") {
      res.statusCode = 401
      throw new Error("Informe um nome válido");
    }

    if (typeof price !== "number" || price <= 0) {
      res.statusCode = 401
      throw new Error("Informe um preço válido");
    }

    const newId = String(listProducts.length + 1);

    if (!newId) {
      res.statusCode = 404
      throw new Error("Não foi possível achar a lista de produtos");
    }

    const newProduct: Product = {
      id: newId,
      name,
      price,
    };
    listProducts.push(newProduct);
    res
      .status(201)
      .send({ message: "Produto criado com sucesso!", data: listProducts });
  } catch (error:any) {
    res.status(res.statusCode || 500).send({ message: error.message })
  }
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});

// Exercício 4 e refatoração exercício 10- Crie um endpoint que **retorna todos os produtos**.
app.get("/allProducts", (req: Request, res: Response) => {
  try {
    const {search} = req.query

    console.log(search)

    if(!listProducts) {
      res.statusCode = 404
      throw new Error("Não foi possível achar a lista de produtos");
    }

    // if(!search) {
    //   res.statusCode = 401
    //   throw new Error("Não foi possível encontrar a busca solicitada");
    // }

    const filteredByName:Product[] = listProducts.filter((item) => { 
      return item.name === search 
    })

    if(filteredByName.length === 0) {
      res.statusCode = 404
      throw new Error(`Não foi possivel achar o ${search} na lista de produtos`)
    }

    let listToDisplay:Product[] =[]

    if(filteredByName) {
      listToDisplay = filteredByName
    }

    if(!search) {
      listToDisplay = listProducts
    }

    res
      .status(200)
      .send({ message: "Lista com todos os produtos", data: listToDisplay });
  } catch (error:any) {
    res.status(res.statusCode || 500).send({ message: error.message })
  }
});


/**
 * Exercício 5 e refatoração exercício 8- Crie um endpoint que **edita** **o preço de** **um determinado produto** e 
 * retorna a lista de produtos atualizada.
 */
 app.put("/editProduct/:id", (req: Request, res: Response) => {
  try {
    const idProduct = req.params.id
    const { price } = req.body


    if(!idProduct || !price) {
      res.statusCode = 401
      throw new Error("Erro, id ou preço não podem ser vazios");
    }

    if(!listProducts) {
      res.statusCode = 401
      throw new Error("Não foi possível achar a lista de produtos");
    }

    if (typeof price !== "number" || price <= 0) {
      res.statusCode = 401
      throw new Error("Informe um preço válido");
    }

    const productFiltered:Product[] = listProducts.filter((item) => {
      if(item.id === idProduct) {
        return item.price = price
      }
      return item
    })

    if(listProducts.filter((item) => { return item.id === idProduct }).length === 0) {
      res.statusCode = 404
      throw new Error(`Não foi possivel achar o id na lista de produtos`)
    }

    res
      .status(200)
      .send({ message: "Lista com produtos atualizados", data: productFiltered });
  } catch (error:any) {
    res.status(res.statusCode || 500).send({ message: error.message })
  }
});

/**
 * Exercício 6 e refatoração exercício 9 - Construa um endpoint que **deleta um determinado produto** e retorna a 
 * lista de produtos atualizada.
 */

 app.delete("/deleteProduct/:id", (req: Request, res: Response) => {
  try {
    const idProduct = req.params.id

    if(!idProduct) {
      res.statusCode = 401
      throw new Error("Erro ao receber id dos produtos");
    }

    if(!listProducts) {
      res.statusCode = 404
      throw new Error("Não foi possível achar a lista de produtos");
    }

    if(listProducts.filter((item) => { return item.id === idProduct }).length === 0) {
      res.statusCode = 404
      throw new Error(`Não foi possivel achar o id na lista de produtos`)
    }

    const deletedProduct:Product[] = listProducts.filter((item) => {
      return item.id !== idProduct
    })

    res
      .status(200)
      .send({ message: "Lista sem o produto deletado", data: deletedProduct });
    
  } catch (error:any) {
    res.status(res.statusCode || 500).send({ message: error.message })
  }
 })
