/**
 * - Exercício 7
    
    Você acabou de conseguir um emprego em uma importadora e precisa continuar a desenvolver o 
    sistema de organização de estoque da empresa. A pessoa desenvolvedora anterior a você chegou 
    a criar uma função que ajusta os preços para o formato brasileiro, mas não chegou a implementa-la:
    
    ```tsx
    const ajustaPreco = (preco :number): string => {
    	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
    	return "R$ "+valorAjustado
    }
    ```
    
    O seguinte `array` traz o estoque atual da empresa:
    
    ```tsx
    [
    	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
    	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
    	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
    	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
    	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
    	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
    	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
    ]
    ```
    
    Aproveitando a função já feita, faça uma nova função que receba o `array`de estoque como parâmetro, 
    use a função `ajustaPreco` para corrigir os preços e retorne a lista de estoque ordenada pela 
    quantidade de cada produto.
 */

type Product = {
  name: string;
  quantity: number;
  unitaryValue: number | string;
};

const listInventory = [
  { name: "MacMugffin", quantity: 37, unitaryValue: 51.04 },
  { name: "Vassoura voadora", quantity: 56, unitaryValue: 210.0 },
  { name: "Laço da verdade", quantity: 32, unitaryValue: 571.5 },
  { name: "O precioso", quantity: 1, unitaryValue: 9181.923 },
  { name: "Caneta de 250 cores", quantity: 123, unitaryValue: 17 },
  { name: "Plumbus", quantity: 13, unitaryValue: 140.44 },
  { name: "Pokebola", quantity: 200, unitaryValue: 99.9915 },
];

const ajustaPreco = (preco: number): string => {
  const valorAjustado: string = preco.toFixed(2).replace(".", ",");
  return "R$ " + valorAjustado;
};

const produtoTransformado = (listInventory: Product[]) : Product[] => {
  listInventory.map((item) => {
    item.unitaryValue = ajustaPreco(item.unitaryValue as number);
  });

  const produtosOrdenados: Product[] = listInventory.sort(
    (a, b) => a.quantity - b.quantity
  );
  return produtosOrdenados;
};
console.table(produtoTransformado(listInventory));
