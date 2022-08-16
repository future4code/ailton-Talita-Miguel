import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import {listAfazeres, Afazeres} from "./data"
const app = express();

app.use(cors());
app.use(express.json());

// Exercício 1 - crie um endpoint que aponte para o path “/ping”
app.get("/ping", (req, res) => {          
  res.send("Pong! 🏓")
})

/** Ecercício 4 - Construa um endpoint que retorne todos os afazeres do exercício 
* anterior de acordo com um único status, ou seja, retorne ou afazeres concluídos ou 
* somente os que ainda estão em andamento.
*/
app.get("/afazeresCompletos/:completed", (req, res) => {  
  const completed:boolean = (req.params.completed === "true" ? true : false)

  const afazeresCompletos:Afazeres[] = listAfazeres.filter((item) => {
    if(item.completed === completed) {
      return item
    }
  })
  res.send(afazeresCompletos)
})

/**
 * Exercício 5 - Construa um endpoint de criação de afazer. A resposta deve retornar o array 
 * de afazeres atualizado.
*/

app.post("/criarAfazeres", (req,res) => {
  const novoAfazer:Afazeres = req.body

  listAfazeres.push(novoAfazer)
  res.send(listAfazeres)
  //res.status(201).send({ Mensagem: "Tarefa adicionado com sucesso" });
})

/**
* Exercício 6 - Construa um endpoint de edição do status de um afazer, ou seja, de 
* completo para incompleto e vice-versa.
*/

app.put("/editarAfazeres/:id", (req,res) => {
  const idAfazer = Number(req.params.id)
  const newCompleted= req.body

  const resultado = listAfazeres.filter((item) => {
    if(item.id === idAfazer) {
      item.completed = newCompleted.completed
    }
    return item
  })
  
  res.send(resultado)
})

/**
 * Exercício 7 - Construa um endpoint que deleta um determinado afazer de acordo com sua id.
*/

app.delete("/apagarAfazeres/:id", (req,res) => {
  const idAfazer = Number(req.params.id)

  const deleteAfazer: Afazeres[] = listAfazeres.filter((item) => {
      return item.id !== idAfazer
  })

  res.send(deleteAfazer)
})

/**
 * Exercício 8 - Construa um endpoint que retorne todos os afazeres de uma determinada id de usuário.
*/

app.get("/todosafazeres/:idUser", (req, res) => {  
  const idUser:number = Number(req.params.idUser)

  const listaTodosAfazeres = listAfazeres.filter((item) => {
    return item.userId === idUser
  })
  res.send(listaTodosAfazeres)
})


/**
 * Exercício 10 - No endpoint do exercício 8, modele o retorno para a seguinte estrutura:
*/

app.get("/todosafazeresFormatado/:idUser", (req, res) => {  
  const idUser:number = Number(req.params.idUser)
  type Todos = {
    selectedUser: Afazeres[],
		others: Afazeres[]
  }
  const todos:Todos = {
    selectedUser: [],
		others: []
  }

  listAfazeres.filter((item) => {
    if(item.userId === idUser) {
      todos.selectedUser.push(item)
    }else {
      todos.others.push(item)
    }
  })
  res.send({todos: todos})
})


/**
 * Exercício 11 - Dê uma pesquisada sobre como ler e salvar dados em arquivos no PC. Tente 
 * refatorar o endpoint do exercício 5 para que os afazeres adicionados sejam realmente 
 * armazenados no array do exercício 3.
 */

 import fs from 'fs';

function armazenar() {
  try {
    const content = JSON.stringify(listAfazeres)
    fs.writeFileSync('./test.txt', content);
  } catch (err) {
    console.log(err);
  }
}
armazenar();

 


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;