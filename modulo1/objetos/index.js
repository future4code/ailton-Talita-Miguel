// ** Exercícios de interpretação de código **

/* 1.a) O que vai ser impresso no console?

 console.log(filme.elenco[0]) - Matheus Nachtergaele
 console.log(filme.elenco[filme.elenco.length - 1]) - Virginia Cavendish
 console.log(filme.transmissoesHoje[2]) -  {canal: "Globo", horario: "14h"}

*/

/*
*
* 2 - a) O que vai ser impresso no console?

    console.log(cachorro)  - { nome: "Juca", idade: 3, raca: "SRD" }
    console.log(gato)   -  { nome: "Juba", idade: 3, raca: "SRD" }
    console.log(tartaruga)  -  { nome: "Juco", idade: 3, raca: "SRD" }

* 2 - b) O que faz a sintaxe dos três pontos antes do nome de um objeto? - copia exatamente o objeto
*/

/*

    3 - a) O que vai ser impresso no console?

        console.log(minhaFuncao(pessoa, "backender"))  - False
        console.log(minhaFuncao(pessoa, "altura"))  - Undefined

    3 - b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

    O 1° mostrou False porque é o valor do atributo "backender", já no "altura" como não existe esse atributo 
    no objeto pessoa, então mostra undefined. 

*/

// *****Exercícios de escrita de código******

/*
    1 - a.1) Crie um objeto. Ele deve conter duas propriedades: nome (string) e 
    apelidos (um array que sempre terá exatamente **três apelidos**). 
*/

const pessoa = {
    nome: "Juliana",
    apelido: ["Ju", "Juli", "Ana"]
}

/*
    1 - a.2) Depois, escreva uma função que recebe como entrada um objeto 
    e imprime uma mensagem no modelo abaixo
*/

function exibePessoa(obj) {
    console.log(`"Eu sou ${obj.nome}, mas pode me chamar de: ${obj.apelido[0]}, ${obj.apelido[1]}, ${obj.apelido[2]}"`)
}

exibePessoa(pessoa)

/* 
    1 - b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade 
    nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior 
    passando como argumento o novo objeto
*/

const novaPessoa = {
    ...pessoa,
    apelido: ["Juju", "Li", "Na"]
}

exibePessoa(novaPessoa)

/*

    2. Resolva os passos a seguir: 
    
        a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
*/

const obj1 = {
    nome: "João",
    idade: 22,
    profissao: "Dentista"
}

const obj2 = {
    nome: "Paulo",
    idade: 18,
    profissao: "Marceneiro"
}

/*
    
    2.b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
    
    2.b.1 - O valor de `nome`
*/

function atributoNome(obj1, obj2) {
    const array = [obj1, obj2]
    return array
}

atributoNome(obj1.nome, obj2.nome)


/*
    2.b.2 -  O numero de caracteres do valor `nome`
*/

function quantidadeNome(obj1, obj2) {
    const array = [obj1.length, obj2.length]
    return array
}

quantidadeNome(obj1.nome, obj2.nome)


/*
    2.b.3 -  O valor de `idade`
*/

function atributoIdade(obj1, obj2) {
    const array = [obj1, obj2]
    return array
}

atributoIdade(obj1.idade, obj2.idade)

/*
    2.b.4 - O valor de `profissão`
*/

function atributoProfissao(obj1, obj2) {
    const array = [obj1, obj2]
    console.log( array)
}

atributoProfissao(obj1.profissao, obj2.profissao)

/*
    2.b.5 - O numero de caracteres do valor `profissão`
*/

function quantidadeProfissao(obj1, obj2) {
    const array = [obj1.length, obj2.length]
    return array
}

quantidadeProfissao(obj1.profissao, obj2.profissao)


/*

    3. Resolva os passos a seguir: 
    
        3.a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
*/
    let carrinho = []

/*
    3.b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as 
    seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
*/

const fruta1 = {
    nome: "Manga",
    disponibilidade: true
}

const fruta2 = {
    nome: "Mexerica",
    disponibilidade: true
}

const fruta3 = {
    nome: "Abacate",
    disponibilidade: true
}

/*
    3.c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array 
    de `carrinho`. Invoque essa função passando os três objetos criados.
*/

function carrinhoDeFrutas(obj) {
    carrinho.push(obj)
}

carrinhoDeFrutas(fruta1)
carrinhoDeFrutas(fruta2)
carrinhoDeFrutas(fruta3)

/*
    3.d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. 
*/

console.log(carrinho)

// ***** DESAFIO *******

/*
    1 - Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima 
    no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o 
    tipo dele para garantir que é um objeto.
*/

function informacoesPessoa() {
    const nome = prompt("Digite seu nome")
    const idade = Number(prompt("Digite sua idade"))
    const profissao = prompt("Digite sua profissão")

    const info = {
        nome,
        idade,
        profissao
    }

    console.log(info)
    console.log(typeof info)
    
}

informacoesPessoa()

/*
    2 - Crie uma função que receba dois objetos que representam filmes. Eles devem ter as 
    propriedades: ano de lançamento e nome. A função deve retornar uma mensagem no seguinte modelo:
*/

const filme1 = {
    ano_lancamento: 2022,
    nome: "Avatar"
}

const filme2 = {
    ano_lancamento: 2022,
    nome: "A vida é bela"
}

function sobreOsFilmes(obj1, obj2) {
    const primeiroAntesDoSegundo = obj1.ano < obj2.ano
    const primeiroIgualSegundo = obj1.ano === obj2.ano

    console.log(`O primeiro filme foi lançado antes do segundo?`, primeiroAntesDoSegundo)
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo?`, primeiroIgualSegundo)
}

sobreOsFilmes(filme1, filme2)


/*
    3 - Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar 
    o controle de estoque do sacolão: ela deve receber por parâmetro uma das frutas e retornar 
    esse mesmo objeto com a propriedade disponibilidade com o valor invertido. 
*/

function controleDeEstoque(obj) {
    return !obj.disponibilidade
}

controleDeEstoque(fruta1)