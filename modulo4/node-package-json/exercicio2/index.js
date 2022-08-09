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

switch (operacao) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
}