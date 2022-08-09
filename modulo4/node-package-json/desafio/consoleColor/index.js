/* 
  **Exercício 1**
    
    a) Como fazemos para acessar os parâmetros passados na linha de comando para o Node?
      Usamos o process.argv

    b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima
    no console uma mensagem que siga a seguinte estrutura: "Olá, (Nome)! Você tem (sua idade) anos."
      Terminal: node index.js Talita 35
      Index.js: console.log(`Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos`)

    c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.
      Terminal: node index.js Talita 35 42
      Index.js: console.log(`Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos. Em sete anos você terá ${process.argv[4]}`)
*/

// Exercicio - 1c
/*
if (
  process.argv[2] !== undefined &&
  process.argv[3] !== undefined &&
  process.argv[4] !== undefined
) {
  console.log(
    `Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos. Em sete anos você terá ${process.argv[4]}`
  );
} else {
  console.log("É necessario informar 3 parâmetros!");
}

*/

// Exercício - 2

/* 
  **Exercício 2**
    
    Crie uma aplicação Node que recebe uma string representando uma operação matemática e 
    dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando 
    os 2 valores fornecidos.

      Terminal: node index.js 2 + 2
      Index.js: 
        const num1 = parseInt(`${process.argv[2]}`)
        const operacao = `${process.argv[3]}`
        const num2 = parseInt(`${process.argv[4]}`)

        switch(operacao){
          case "+":
            console.log(num1 + num2)
            break;
          case "-":
            console.log(num1 - num2)
            break;
          case "*":
            console.log(num1 * num2)
            break;
          case "/":
            console.log(num1 / num2)
            break;
        }
*/

const num1 = parseInt(`${process.argv[2]}`);
const operacao = `${process.argv[3]}`;
const num2 = parseInt(`${process.argv[4]}`);

if(process.argv[2] !== undefined && process.argv[3] !== undefined && process.argv[4] !== undefined) {
  switch (operacao) {
    case "+":
      console.log('\033[31m', 'O resultado é', `\x1b[36m${num1 + num2}\x1b[0m`, num1 + num2);
      break;
    case "-":
      console.log('\x1b[36m%s\x1b[0m', num1 - num2);
      break;
    case "*":
      console.log('\x1b[36m%s\x1b[0m', num1 * num2);
      break;
    case "/":
      console.log('\x1b[36m%s\x1b[0m', num1 / num2);
      break;
  }
} else {
  console.log('\x1b[36m%s\x1b[0m', "É necessario informar 3 parâmetros!]");
}

