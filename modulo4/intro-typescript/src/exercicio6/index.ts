/**
 * Faça uma função que receba dois números como parâmetros e imprima no terminal, as seguintes informações:

a) A soma desses números

b) A subtração desses números

c) A multiplicação desses números

d) Qual deles é o maior
 */

function calculaValor(num1: number, num2: number):number[] {
  let soma:number = num1 + num2
  let subtacao:number = num1 - num2
  let multiplicacao:number = num1 * num2 
  let maiorNumero:number

  if (num1 > num2) {
    maiorNumero = num1;
  } else {
    maiorNumero = num2;
  }

  return [soma, subtacao, multiplicacao, maiorNumero]
}

console.log(calculaValor(2,2))