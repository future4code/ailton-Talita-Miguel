// ** Exercícios de interpretação de código **

// Exercício 1 - O primeiro console vai exibir o número 10 e o segundo console vai exibir 10 e 5. 
// Exercício 2 - O console vai exibir 20, 10, 10.
// Exercício 3 - let p, fica melhor sendo const cargaHoraria, let t, fica melhor const salarioPorDia. 

// ** Exercícios de escrita de código **

// 1.a
let nome;

// 1.b
let idade; 

// 1.c
console.log("Tipo variavel nome: ", typeof nome);
console.log("Tipo variavel idade: ", typeof idade);

// 1.d - A variável é do tipo undefined porque ainda não foi inicializada, não atribuímos nada pra ela. 

// 1.e
nome = prompt("Qual é o seu nome?");
idade = prompt("Qual é o sua idade?");

// 1.f
console.log("Tipo variavel nome: ", typeof nome);
console.log("Tipo variavel idade: ", typeof idade);

// Agora que receberam um valor, as variáveis nome e idade não são mais undefined e sim String. 

// 1.g
console.log("Olá", nome, "você tem", idade, "anos");



// 2 - fazer 3 perguntas de Sim ou Não

let pergunta1 = "Você está usando uma camisa azul hoje?";
let pergunta2 = "Você está usando uma calça azul hoje?";
let pergunta3 = "Você está usando sapato azul hoje?";

// 2.a - respostas

let resposta1 = prompt(pergunta1);
let resposta2 = prompt(pergunta2);
let resposta3 = prompt(pergunta3);

// 2.b - exibir perguntas e respostas. 
console.log(pergunta1, "-", resposta1);
console.log(pergunta2, "-", resposta2);
console.log(pergunta3, "-", resposta3);


// 3 - trocar valores.

let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores

let troca = a;
a = b;
b = troca;

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a); // O novo valor de a é 25
console.log("O novo valor de b é", b); // O novo valor de b é 10



// DESAFIO

let numero1 = prompt("Digite o primeiro número:");
let numero2 = prompt("Digite o segundo número:");

console.log("O resultado da soma dos valores é", Number(numero1) + Number(numero2));
console.log("O resultado da multiplicação dos valores é", Number(numero1) * Number(numero2));



