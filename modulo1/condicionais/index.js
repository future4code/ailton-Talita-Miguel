/***** Exercícios de interpretação de código *****/

/*

    1.a) Explique o que o código faz. Qual o teste que ele realiza? 

        O usuário digita um número e o if divide o número digitado por 2, se o 
        resto for igual a zero a função imprime Passou no teste, caso seja diferente 
        de zero a função imprime Não passou no teste. 

    1.b) Para que tipos de números ele imprime no console "Passou no teste"? 

        Para números multiplos de 2.

    1.c) Para que tipos de números a mensagem é "Não passou no teste"?

        Para números que não são multiplos de 2. Que tem o resto da divisão diferente de zero. 

*/


/*

    2.a) Para que serve o código acima?

        O usuário informa uma fruta e se a fruta estiver em um dos casos do switch 
        então mostra o valor da fruta, caso não esteja ele entra no default e mostra um preço.

    2.b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

        O preço da fruta Maçã é R$ 2,25

    2.c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem 
    impressa no console se retirássemos o `break` que está logo acima do `default` 
    (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

        Sem o break ele não sai do switch, então ele pega o próximo preço, que é o preço do default.
        O preço da fruta  Pêra  é  R$  5


*/


/*
    3.a) O que a primeira linha está fazendo?

        Pedindo para o usuário digitar um número, e guarda o número digitado na variável numero.

    3.b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? 
    E se fosse o número -10?

        Digitando o número 10 vai mostrar a mensagem - Esse número passou no teste e um erro.
        Digitando o número -10 vai mostrar a mensagem - Não tem mensagem, temos um erro.

    3.c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

        Na última linha do código tem um console que mostra a variável mensagem mas essa variável não 
        existe fora do if. Ela existe apenas dentro do bloco do if. Então como o console está fora do 
        bloco temos um erro que a variável mensagem não foi declarada. 
*/


/**** Exercícios de escrita de código *****/
/*
    1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela 
    pode dirigir (apenas maiores de idade).
    
        1.a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
        1.b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
*/

// const idade = Number(prompt("Digite sua idade"))

/*
    
        1.c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
        Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
*/

// if(idade >= 18) {
//     console.log("Você pode dirigir")
// } else {
//     console.log("Você não pode dirigir")
// }

/*
    2 - Agora faça um programa que verifica que turno do dia um aluno estuda. 
    Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
    Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else
*/

// let turnoDoDia = prompt(`Em que turno do dia você estuda: 
// M (matutino) ou 
// V (Vespertino) ou 
// N (Noturno)`)

// turnoDoDiaUpper = turnoDoDia.toUpperCase()

// if(turnoDoDiaUpper === "M") {
//     console.log("Bom Dia!")
// } else if (turnoDoDiaUpper === "V") {
//     console.log("Boa Tarde!")
// } else {
//     console.log("Boa Noite!")
// }

/*
    3 - Repita o exercício anterior, mas utilizando a estrutura de switch case agora.
*/

// switch(turnoDoDiaUpper) {
//     case 'M':
//         console.log("Bom Dia!")
//         break
//     case 'V':
//         console.log("Boa Tarde!")
//         break
//     default:
//         console.log("Boa Noite!")
//         break
// }


/*
    4 - Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a 
    um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um 
    código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o 
    preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, 
    imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("
*/

// const generoDoFilme = prompt("Qual é o gênero do filme?").toLowerCase()
// const valorIngresso = Number(prompt("Qual é o valor do ingresso?"))

// if(generoDoFilme === "fantasia" && valorIngresso < 15) {
//     console.log("Bom filme! :)")
// } else {
//     console.log("Escolha outro filme :(")
// }


/******* DESAFIO *****/

/*
    1 - Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem 
    "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, 
    doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", 
    trocando [LANCHINHO] pelo que o usuário colocou no input.
*/

// if(generoDoFilme === "fantasia" && valorIngresso < 15) {
//     const lanchinho = prompt("Qual lanchinho você vai comprar?").toLowerCase()
//     console.log(`Bom filme! :)`) 
//     console.log(`Aproveite o seu ${lanchinho}`)
// } else {
//     console.log("Escolha outro filme :(")
// }

/*

    2 - Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. 
    Para esta compra, o usuário deve fornecer algumas informações:
    - Nome completo;
    - Tipo de jogo: IN indica internacional; e DO indica doméstico;
    - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
    - Categoria: pode ser as opções 1, 2, 3 ou 4;
    - Quantidade de ingressos
    
    O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, 
    ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário 
    tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há 
    a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor 
    de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo 
    valor do dólar (considerar o dólar = R$4,10)

*/

const nome = prompt("Informe seu nome completo")
let tipoDeJogo = prompt(`Qual é o tipo de jogo:
IN - internacional;
DO - doméstico;
`).toUpperCase()

let etapaDoJogo = prompt(`Informe a etapa do jogo: 
SF - semi-final; 
DT - decisão de terceiro lugar;
FI - final`).toUpperCase()

const categoria = Number(prompt(`Informe a categoria: 1, 2, 3 ou 4`))
const quantidadeDeIngressos = Number(prompt('Informe a quantidade de ingressos'))
let valorUnitarioIngresso
let valorTotal

const dadosDaCompra = (nome, tipoDeJogo, etapaDoJogo, categoria, quantidadeDeIngressos) => {

    switch(etapaDoJogo) {
        case "SF":
            if(categoria == 1 ) {
                valorUnitarioIngresso = 1320
            } else if(categoria == 2) {
                valorUnitarioIngresso = 880
            } else if(categoria == 3) {
                valorUnitarioIngresso = 550
            } else if (categoria == 4) {
                valorUnitarioIngresso = 220
            } else {
                console.log("Categoria inválida!")
            }
            etapaDoJogo = 'Semifinais'
            break
        case "DT":
            if(categoria == 1 ) {
                valorUnitarioIngresso = 660
            } else if(categoria == 2) {
                valorUnitarioIngresso = 440
            } else if(categoria == 3) {
                valorUnitarioIngresso = 330
            } else if (categoria == 4) {
                valorUnitarioIngresso = 170
            } else {
                console.log("Categoria inválida!")
            }
            etapaDoJogo = 'Decisão do 3° lugar'
            break
            
        case "FI":
            if(categoria == 1 ) {
                valorUnitarioIngresso = 1980
            } else if(categoria == 2) {
                valorUnitarioIngresso = 1320
            } else if(categoria == 3) {
                valorUnitarioIngresso = 880
            } else if (categoria == 4) {
                valorUnitarioIngresso = 330
            } else {
                console.log("Categoria inválida!")
            }
            etapaDoJogo = 'Final'
            break

    }

    if(tipoDeJogo === 'IN') {
        valorUnitarioIngresso = (valorUnitarioIngresso * 4.10)
        tipoDeJogo = 'Internacional'
    } else {
        tipoDeJogo = 'Nacional'
    }

    valorTotal = valorUnitarioIngresso * quantidadeDeIngressos

    console.log(`
    ---Dados da compra--- 
    Nome do cliente:  ${nome}
    Tipo do jogo:  ${tipoDeJogo}
    Etapa do jogo:  ${etapaDoJogo} 
    Categoria:  ${categoria}
    Quantidade de Ingressos:  ${quantidadeDeIngressos} ingressos 
    ---Valores--- 
    Valor do ingresso:  R$ ${valorUnitarioIngresso}
    Valor total:  R$ ${valorTotal}
    `)

}

dadosDaCompra(nome, tipoDeJogo, etapaDoJogo, categoria, quantidadeDeIngressos)










