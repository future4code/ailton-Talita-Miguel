/**
 * - Exercício 6
    
    Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital. Antes de 
    explicar a sua tarefa, você precisa entender como eles guardam as contas dos clientes. 
    Basicamente, eles salvam o nome do clientes, o saldo total e uma lista contendo todas os 
    débitos realizados pelo cliente. Exemplo:
    
    ```tsx
    // entrada
    [
    	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
    ]
    
    ```
    
    Pensando em aumentar seu lucros, o banco quer identificar possíveis clientes precisando 
    de empréstimos. Dessa forma, a sua tarefa é criar uma função que receba este `array` como 
    parâmetro, atualize o saldo total descontando todos os débitos e retorne apenas os clientes 
    com saldo negativo.
 */

type Cliente = {
  cliente: string, 
  saldoTotal: number,
  debitos: number[]
}

const listaCliente = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function saldoNegativo(listaCliente:Cliente[]): Cliente[] {
  let totalDebitos
  let saldoTotalConta
  let resultado: Cliente[] = []
  for (const item of listaCliente) {
    totalDebitos = item.debitos.reduce(function(total, numero){
       return total + numero;
    },0);
    
    saldoTotalConta = item.saldoTotal - totalDebitos
    item.saldoTotal = saldoTotalConta
    item.debitos = []
    
    if(saldoTotalConta < 0) {
      resultado.push(item)
    }
  }
  return resultado
}
console.log(saldoNegativo(listaCliente))
