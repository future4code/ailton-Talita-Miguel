/**
 * - **Exercício 1**
    
    O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos 
    conhecer um pouco desses critérios.
    
    a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. 
    Tente atribuir um número a esta variável. O que acontece?
*/

let minhaString: string = "Minha string";
//minhaString = 0
console.log(minhaString);

// Ele mostra o seguinte erro:  let minhaString: string
// Exercício 1
// O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.

// a) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

// Type 'number' is not assignable to type 'string'

/**
    
    b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. 
    Como fazer para que essa variável também aceite strings? Ou seja, como criamos no 
    typescript uma variável que aceite mais de um tipo de valor?
*/
let meuNumero: number | string = 0;
// Dessa for ma a variável meuNumero aceita string e número

/**    
    c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
    
    `nome`, que é uma string;
    
    `idade`, que é um número;
    
    `corFavorita`, que é uma string.
    
    Crie mais três objetos, que também precisam ter apenas os campos definidos acima. 
    Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.
*/

enum Cores {
    Laranja = "Laranja",
    Azul = "Azul",
    Vermelho = "Vermelho",
    Amarelo = "Amarelo",
    Verde = "Verde",
    Lilas = "Lilas",
    Indigo = "Indigo"
}

type Pessoa = {
  nome: string;
  age: number;
  corFavorida: Cores
};

let person1: Pessoa = {
  nome: "Talita",
  age: 35,
  corFavorida: Cores.Azul,
};

let person2: Pessoa = {
  nome: "Mari",
  age: 20,
  corFavorida: Cores.Indigo,
};

let person3: Pessoa = {
  nome: "Jil",
  age: 36,
  corFavorida: Cores.Lilas,
};

console.table([person1, person2, person3]);

/* 
    d) Modifique a propriedade `corFavorita` para que apenas seja possível escolher entre 
    as Cores do arco-íris. Utilize um `enum` para isso.

    ** Feito na linha 45
 */

// enum CORES {
//     LARANJA = "Laranja",
//     AZUL = "Azul",
//     VERMELHO = "Vermelho",
//     AMARELO = "Amarelo",
//     VERDE = "Verde",
//     LILAS = "Lilas",
//     INDIGO = "Indigo"
// }

