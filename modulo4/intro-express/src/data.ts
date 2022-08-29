//Exercício 2 - crie uma variável de tipo para representar esse recurso
export type User = {
  id: number,
  name: string,
  phone: string,
  email: string,
  website: string
}

// Exercício 3 - Crie um array de usuários para servir como base de dados da nossa API. 

export const usersList:User[] = [
  {
    id: 1,
    name: 'Talita',
    phone: '(41) 5555-55555',
    email: 'talita@gmail.com',
    website: 'talita.com.br'
  },
  {
    id: 2,
    name: 'Mari',
    phone: '(41) 5555-55555',
    email: 'mari@gmail.com',
    website: 'mari.com.br'
  },
  {
    id: 3,
    name: 'Jil',
    phone: '(41) 5555-55555',
    email: 'jil@gmail.com',
    website: 'jil.com.br'
  },
  {
    id: 4,
    name: 'Jil',
    phone: '(41) 5555-55555',
    email: 'jil@gmail.com',
    website: 'jil.com.br'
  }
]

// Exercício 5 - crie uma variável de tipo para representar posts

export type Post = {
  id: number,
  title: string,
  body: string,
  userId: number
}

// Exercício 6 - Crie um array de posts para incrementar a base de dados da nossa API. 
/**
 * Você acha melhor criá-los dentro ou fora do array de usuários? Justifique com comentários no código.
 * Eu acho melhor criar fora, pq quando formos adicionar, editar ou remover um post, poderemos bater no 
 * endpoint de post
 */
export const postsList: Post[] = [
  {
    id: 1,
    title: "Bom Dia",
    body: "Bom dia polvos!!!",
    userId: 2
  },
  {
    id: 2,
    title: "Ajuda",
    body: "Bom tarde, preciso de ajuda",
    userId: 3
  },
  {
    id: 3,
    title: "Git",
    body: "Tô com problema no git.",
    userId: 1
  },
  {
    id: 4,
    title: "Bom Dia",
    body: "Bom dia polvos!!!",
    userId: 2
  },
]