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

console.log(`Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos. Em sete anos você terá ${process.argv[4]}`)
