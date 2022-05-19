/***** Exercícios de interpretação de código *******/

/* 1 - O que o código abaixo está fazendo? Qual o resultado impresso no console?

    Ele faz um for até o valor de i ser 5, a cada iteração ele guarda na variavel a soma do 
    valor + o valor de cada iteração do i.
    O resultado no console é 10.
*/

/*
    2 - a) O que vai ser impresso no console?

        Será impresso no console os números maiores que 18 da lista, 
        que são: 19, 21, 23, 25, 27, 30.

    2 - b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` 
    é suficiente? Se sim, o que poderia ser usado para fazer isso?

        Pode ser usado sim, para isso podemos criar uma variável que começa com 0 e soma 1 a cada 
        iteração.
*/

/*

    3 - Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

        Vai imprimir 4 vezes o *.
*/


/***** Exercícios de escrita de código ******/

/**
* 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
*/

const quantidadeDeBichos = Number(prompt("Quantos bichinhos de estimação você tem?"))

/*
*   1 - a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, 
    e guarde esses nomes em um array
    c) Por fim, imprima o array com os nomes dos bichinhos no console
*/

if(quantidadeDeBichos === 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else {
    let arrNomeBichos = []
    let nome = ""
    let count = 0

    console.log(quantidadeDeBichos)
    while(count < quantidadeDeBichos){
        nome = prompt(`Digite o nome do seu ${count + 1} bichicho`)
        arrNomeBichos.push(nome)
        count++
        
    }

    console.log(arrNomeBichos)
}

/*

    2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto 
    somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, 
    realizando as operações pedidas:
        
        a) Escreva um programa que **imprime** cada um dos valores do array original.
*/

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

const cadaValor = (arrayOriginal) => {
    for(let itemArray of arrayOriginal) {
        console.log(itemArray)
    }
}

cadaValor(arrayOriginal)

/* 
    2 - b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
*/

const cadaValorDividido = (arr) => {
    for (const item of arr) {
        console.log(item / 10)
    }
}

cadaValorDividido(arrayOriginal)


/*
        
    2 - c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do 
    array original e **imprima** esse novo array
*/

const numerosPares = (array) => {
    const novoArray = []

    for (const item of array) {
        if (item % 2 === 0) {
            novoArray.push(item)
        }
    }

    console.log(novoArray)
}

numerosPares(arrayOriginal)


/*      
    2 - d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O 
    elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
*/

const indexDoArray = (array) => {
    const novoArray = []
    let count = 0

    for (const item of array) {
        novoArray.push(`O elemento do índex ${count} é ${item}`)
        count++
    }

    console.log(novoArray)
}

indexDoArray(arrayOriginal)

/*
    2 - e) Escreva um programa que imprima no console o maior e o menor números contidos no array 
    original  
*/

const maiorEMenorNumero = (array) => {
    let maiorNumero = 0
    let menorNumero = 1000

    for (const item of array) {
        if(item > maiorNumero) {
            maiorNumero = item
        } else if (item < menorNumero) {
            menorNumero = item
        }
    }

    console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`)
}

maiorEMenorNumero(arrayOriginal)



/***** DESAFIO ******/

/*
*   1 - "Adivinhe o número que estou pensando".
    1 - a) Solicitar que o primeiro jogador escolha um número, através do `prompt`. Neste momento, 
    deve-se imprimir no console a mensagem `Vamos jogar!`

    1 - b) A partir daí, será solicitado, ao segundo jogador, que ele chute os números até acertar, 
    através do `prompt`. A cada chute, deve ser informado no console:

    - O número chutado, com a mensagem: `O número chutado foi: <número>`
    - Uma mensagem dizendo se o número escolhido é maior ou menor do que o número chutado: `Errou. 
    O número escolhido é maior/menor`

    1 - C) Quando o segundo jogador acertar o número escolhido pelo primeiro jogador, deve ser impressa 
    a mensagem: `Acertou` ; e, embaixo, `O número de tentativas foi : <quantos chutes o usuário deu>`
*/

const adivinheUmNumero = () => {
    const primeiroNum = +prompt('Primeiro Jogador, escolha um número:')

    console.log(`Vamos jogar!`)

    let segundoNum = +prompt('Segundo Jogador, chute um número:')
    let count = 0

    while(primeiroNum !== segundoNum) {

        if(segundoNum > primeiroNum) {
            console.log(`O número chutado foi: ${segundoNum}`)
            console.log(`Errrrrrrrou, é maior`)
        } else  {
            console.log(`O número chutado foi: ${segundoNum}`)
            console.log(`Errrrrrrrou, é menor`)
        }
        
        count++
        segundoNum = +prompt('Segundo Jogador, chute um número:')
    }

    console.log(`Acertou!!`)
    console.log(`O número de tentativas foi: ${count}`)
}

adivinheUmNumero()

/*
    2 - Uma das principais características de uma boa pessoa programadora é conseguir 
    resolver seus problemas independentemente. Queremos que você comece a treinar isso a 
    partir de hoje! Então, vamos pedir para que você faça uma alteração no código acima. 
    Agora, ao invés de ter 2 jogadores, haverá um só; e o seu adversário será o computador. 
    A ideia é: ao iniciar o jogo, você deve sortear um número aleatório (entre 1 e 100) e o 
    usuário terá que ficar chutando o valor até acertar. Mantenha as demais funcionalidades e 
    mensagens pedidas no exercício anterior.
    
    Quando resolver o exercício, pare e faça a seguinte reflexão: foi fácil fazer esta alteração? 
    O que você poderia ter feito para que fosse mais fácil? **Deixe comentários no seu código sobre 
    esta reflexão.**

    **reflexão.**
    Foi fácil fazer essa alteração, só precisei mudar a variável primeiroNum, que antes tinha um prompt 
    para pedir um número e agora estou usando o método random para gerar um número aleatório. 
*/

const adivinheUmNumeroAleatorio = () => {
    const primeiroNum = Math.floor(Math.random() * 100)

    console.log(primeiroNum)

    console.log(`Vamos jogar!`)

    let segundoNum = +prompt('Segundo Jogador, chute um número:')
    let count = 0

    while(primeiroNum !== segundoNum) {

        if(segundoNum > primeiroNum) {
            console.log(`O número chutado foi: ${segundoNum}`)
            console.log(`Errrrrrrrou, é maior`)
        } else  {
            console.log(`O número chutado foi: ${segundoNum}`)
            console.log(`Errrrrrrrou, é menor`)
        }
        
        count++
        segundoNum = +prompt('Segundo Jogador, chute um número:')
    }

    console.log(`Acertou!!`)
    console.log(`O número de tentativas foi: ${count}`)
}

adivinheUmNumeroAleatorio()




