// 3 - Crie mais um tipo: para representar as transações que serão salvas no extrato
export type Statement = {
  value:number,
  description:string,
  date:string
}

// 1 - Crie um tipo para representar uma conta para o usuário
export type User = {
  id:number,
  name: string;
  cpf: string;
  birthDate: string;
  balance: number,
  statement:Statement[]
};

// 2 - Crie um array global que armazene usuários na aplicação e
// 4 - Dentro da definição do usuário, crie um array que armazene as transações de um cliente.
export const listUsers: User[] = [
  {
    id:1,
    name: "Mari",
    cpf: "013.083.250-29",
    birthDate: "11/11/1993",
    balance: 3000,
    statement: [
      {
        value:150,
        description: "car",
        date:"02/03/2022"
      }
    ]
  },
  {
    id:2,
    name: "Jill",
    cpf: "297.446.510-24",
    birthDate: "21/02/1986",
    balance: 3000,
    statement: [
      {
        value:50,
        description: "pet",
        date:"01/08/2022"
      },
      {
        value:50,
        description: "pet",
        date:"01/08/2022"
      },
      {
        value:50,
        description: "pet",
        date:"20/08/2022"
      }
    ]
  }
];
