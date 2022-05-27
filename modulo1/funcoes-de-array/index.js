/****  Exercícios de interpretação de código *****/

/*
*   1 - a) O que vai ser impresso no console?

    { nome: "Amanda Rangel", apelido: "Mandi" }
    0
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }

    { nome: "Laís Petra", apelido: "Laura" },
    1
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }

    { nome: "Letícia Chijo", apelido: "Chijo" }
    2
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
*/

/*
*   2 - a) O que vai ser impresso no console?
    
    ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]
*/

/*
*   3 - a) O que vai ser impresso no console?

    [{nome: 'Amanda Rangel', apelido: 'Mandi'}, {nome: 'Laís Petra', apelido: 'Laura'}]
*/

/*************************************************************************************/
/*****  Exercícios de escrita de código ****/

/*
*   1 - Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize 
*   as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
*/

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

/*
*   1.a) Crie um novo array que contenha apenas o nome dos doguinhos
*/

const arrayNomeDog = pets.map((item) => {
    return item.nome
})

console.log(arrayNomeDog)

/*
*   1.b) Crie um novo array apenas com os cachorros salsicha
*/

const apenasRacaSalsicha = pets.filter((item) => {
    return item.raca === 'Salsicha'
})

console.log(apenasRacaSalsicha)

/*
*   1.c) Crie um novo array que possuirá mensagens para enviar para todos 
*   os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom 
*   de desconto de 10% para tosar o/a [NOME]!"
*/
const apenasRacaPoodle = pets.filter((item) => {
    return item.raca === 'Poodle'

}).map((item) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
})

console.log(apenasRacaPoodle)

/*
*   2 - Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando 
*   as funções de array map e filter:
*/

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

/*
*   2.a) Crie um novo array que contenha apenas o nome de cada item
*/

const arrayNomeProdutos = produtos.map((item) => {
    return item.nome
})

console.log(arrayNomeProdutos)


/*
*   2.b) Crie um novo array que contenha um objeto com o nome e o preço de cada 
*   item, aplicando 5% de desconto em todos eles
*/

const produtosComDesconto = produtos.map((item) => {
    let nome = item.nome
    let preco = item.preco - (item.preco * 0.05)
    let resultado = {nome , preco}
    return resultado
})

console.log(produtosComDesconto)

/*
*   2.c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
*/

const apenasBebidas = produtos.filter((item) => {
    return item.categoria === 'Bebidas'
})

console.log(apenasBebidas)

/*
*   2.d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
*/

const produtosYpe = produtos.filter((item) => {
    if(item.nome.includes('Ypê'))  {
        return item
    }
    
})

console.log(produtosYpe)

/*
*   2.e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array 
*   deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
*/

const produtosYpeFrase = produtos.filter((item) => {
    if(item.nome.includes('Ypê'))  {
        return item
    }
}).map((item) => {
    return `Compre ${item.nome} por ${item.preco}`
})

console.log(produtosYpeFrase)

/******************************************************************************************/
/**********************************  DESAFIO ***********************************/

/*
*   1 - Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:
*/

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

/*
*   1 - a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética
*/

const pokemonsOrdemAlfabetica = pokemons.map((pokemon) => {
    return pokemon.nome
})

console.log(pokemonsOrdemAlfabetica.sort())

/*
*   1 - b) Crie um novo array apenas com os tipos dos pokémons, sem repetição
*/

const tiposDePokemons = pokemons.map((pokemon) => {
    return pokemon.tipo
}).filter((tipo, index,array) => {
    return array.indexOf(tipo) === index
})

console.log(tiposDePokemons)