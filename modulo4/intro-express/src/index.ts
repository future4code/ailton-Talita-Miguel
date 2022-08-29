import express from 'express'
import cors from 'cors'
import { User, usersList, Post, postsList } from './data'


const app = express()

app.use(express.json())
app.use(cors())

// Exercício 1
app.get("/exercicio1", (req, res) => {
  res.send("Hello from Express!")
})

// Exercício 4 - Construa um endpoint que retorne os usuários criados no exercício anterior
app.get("/user", (req, res) => {
  res.send(usersList)
})

// Exercício 7 - Construa um endpoint que retorne os posts criados no exercício anterior.
app.get("/posts", (req, res) => {
  res.send(postsList)
})

// Exercício 8 - Construa um endpoint que retorne os posts de um usuário em particular.
app.get("/posts/:id", (req, res) => {
  const idUser = Number(req.params.id)

  const acharPosts:Post[] = postsList.filter((item) => {
    return item.userId === idUser
  })

  res.send(acharPosts)
})

// Exercício 9 - Construa um endpoint para deletar um post.
app.delete("/posts/:id", (req,res) => {
  const idPost = Number(req.params.id)
  const deletePost: Post[] = postsList.filter((item) => {
    return item.id !== idPost
  })
  res.send(deletePost)
})

// Exercício 10 - Construa um endpoint para deletar um usuário.
app.delete("/user/:id", (req,res) => {
  const idUser = Number(req.params.id)
  const deleteUser:User[] = usersList.filter((item) => {
    return item.id === idUser
  })
  res.send(deleteUser)
})


//exercicio 11(extra)
app.post("/addPost", (request, response) => {
  const newPost = request.body;

  postsList.push(newPost);

  response.status(201).send({ Mensagem: "Post adicionado com sucesso" });
});

app.listen(3003, () => {
  console.log("Server is runnig in http://localhost:3003")
})