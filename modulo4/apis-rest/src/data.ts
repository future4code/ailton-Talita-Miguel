/** Exercício 1 - Vamos começar fazendo um endpoint que busque todos os usuários de uma lista. 
 *  A lista está disponível abaixo.
 * 
 * a. Qual método HTTP você deve utilizar para isso?
 * Para buscar os dados de todos os usuários de uma lista, devo usar o GET. 

 * b. Como você indicaria a **entidade** que está sendo manipulada?
  Por colocar User nos endipoint para indicar a entidade.
 */
enum UserType {
  ADMIN = 'ADMIN',
  NORMAL = 'NORMAL'
}
export type User = {
  id: number;
  name: string;
  email: string;
  type: UserType;
  age: number;
};

export const listUsers: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: UserType.ADMIN,
    age: 12,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: UserType.NORMAL,
    age: 36,
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: UserType.NORMAL,
    age: 21,
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: UserType.NORMAL,
    age: 17,
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: UserType.ADMIN,
    age: 17,
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: UserType.ADMIN,
    age: 60,
  },
];
