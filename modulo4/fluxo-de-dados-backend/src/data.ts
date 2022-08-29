// Exercício 2 - Crie uma variável de tipo para representar cada produto.
export type Product = {
  id: string;
  name: string;
  price: number;
};

export const listProducts:Product[] = [
  {
    id: "1",
    name: 'Arroz',
    price: 10
  },
  {
    id: "2",
    name: 'Feijão',
    price: 8
  },
  {
    id: "3",
    name: 'Açúcar',
    price: 8
  }
]