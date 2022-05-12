// * Exercícios de interpretação de código *

/*
* // 1
*
* // 1.a - O que vai ser impresso no console?
* No primeiro console será impresso 10 e no segundo 50. 
*
* // 1.b - O que aconteceria se retirasse os dois console.log e simplesmente invocasse a 
* função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
* Como foi chamada a função, ela será executada mas não vai mostrar nada no console, pq não
* pedimos pra ela exibir alguma coisa no console.  
*
*/

/* 
* // 2
*
* // 2.a - Explique o que essa função faz e qual é sua utilidade
* A função pela o texto digitado pelo usuário, na variável textoDoUsuario, e transforma para letra 
* minúscula e após isso verifica se existe a palavra "cenoura" no texto, retorna e mostra no console 
* true ou false.
*
*
* // 2b - Determine qual será a saída no console para cada uma das 3 entradas do usuário:
*    i.   Eu gosto de cenoura - Saída True
*    ii.  CENOURA é bom pra vista - Saída True
*    iii. Cenouras crescem na terra - Saída True
*/


// ** Exercícios de escrita de código **

/* 
* 1.a - Escreva as funções explicadas abaixo:
* a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas 
* informações sobre você, como: 
*          "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
*
* Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando 
* que a função não possui entradas, apenas imprime essa mensagem.
*/

let nome = "Talita"
let idade = 34
let cidade = "Curitiba"
let estudante = "sou estudante"

const sobreMim = () => console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estudante}.`)

sobreMim()

/*
* 1.b -  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: 
* o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma 
* string que unifique todas as informações da pessoa em uma só mensagem com o template:
*          Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
*/

const informacoesPessoais = (nome, idade, cidade, profissao) => console.log(
`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)

informacoesPessoais("João", 22, "São Paulo", "Dentista")

/*
* 2. Escreva as funções explicadas abaixo:
*    
* 2.a - Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma 
* das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
*
*/

const somar = (valor1, valor2) => valor1 + valor2

console.log("A soma dos valores é:", somar(5, 10))

/*   
* 2.b - Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro 
* número é maior ou igual ao segundo.
*/

const maiorOuIgual = (valor1, valor2) => valor1 >= valor2

console.log("Primeiro número é maior ou igual ao segundo:", maiorOuIgual(5, 10))

/*   
* 2.c - Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não.
*/

const numeroEPar = (valor1) => valor1 % 2 === 0

console.log("O número é par:", numeroEPar(7))

/*
* 2.d - Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa 
* mensagem, juntamente com uma versão dela em letras maiúsculas.
*/

const mensagem = (msg) => {
    let msgUpper = msg.toUpperCase()
    let msgLength =  msg.length
    console.log( msgLength, msgUpper)   
}

mensagem("labenu")


/*
* 3.1 - Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
* 3.2 - Em seguida, peça para o usuário inserir dois números 
* 3.3 - e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. 
* 3.4 - Por fim, mostre no console o resultado das operações:
*/

// 3.1
const soma = (valor1, valor2) => valor1 + valor2
const subtracao = (valor1, valor2) => valor1 - valor2
const multiplicacao = (valor1, valor2) => valor1 * valor2
const divisao = (valor1, valor2) => valor1 / valor2

// 3.2
const valor1 = Number(prompt("Digite o 1° valor:"))
const valor2 = Number(prompt("Digite o 2° valor:"))

// 3.3
let resultadoSoma = soma(valor1, valor2)
let resultadoSubtracao = subtracao(valor1, valor2)
let resultadoMultiplicacao = multiplicacao(valor1, valor2)
let resultadoDivisao = divisao(valor1, valor2)

// 3.4
console.log(`
Números inseridos: ${valor1} e ${valor2}
Soma: ${resultadoSoma}
Diferença: ${resultadoSubtracao}
Multiplicação: ${resultadoMultiplicacao}
Divisão: ${resultadoDivisao}
`)

// ** DESAFIO ** 

/*
* 1. Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma 
* vez ao longo do código através de invocações/chamadas. Então, funções podem chamar/invocar outras 
* funções também. Sua tarefa é escrever duas funções
*  
* a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro

* b) Escreva outra arrow function que recebe dois valores como parâmetros mas nenhum retorno. 
* Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma 
* como entrada para imprimi-lo
*/

// 1.a
const imprimir = (dado) => console.log(dado)
imprimir("arrow function")

// 1.b
const calculaSoma = (valor1, valor2) => {
    let resultado = valor1 + valor2
    imprimir(resultado)
}

calculaSoma(10, 20)


/*
* 2 - Faça uma função que execute o teorema de Pitágoras, 
* 2.1 - recebendo dois catetos e 
* 2.2 - calculando o valor da hipotenusa. 
* 2.3 - Retorne este valor, 
* 2.4 - invoque a função e imprima o resultado no console. 
*/

// 2.1
const cateto1 = prompt("Digite um valor para o cateto oposto:")
const cateto2 = prompt("Digite um valor para o cateto adjacente:")

// 2.2
const calculandoHipotenusa = (cateto1, cateto2) => Math.hypot(cateto1, cateto2)

console.log("Resultado do calculo da hipotenusa é:", calculandoHipotenusa(cateto1, cateto2))
