// * Exercícios de interpretação de código * 

/*
* 1 -  Indique todas as mensagens impressas no console
* 
* 1.1 - 
* let array
* console.log('a. ', array) - Undefined, pq o array não recebeu nenhum valor. 
*
* 1.2 - 
* array = null
* console.log('b. ', array) - Null, array recebeu null, então agora ele é null. 
* 
* 1.3 - 
* array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
* console.log('c. ', array.length) - O array o comprimento 11
* 
* 1.4 - 
* let i = 0
* console.log('d. ', array[i]) - O i vai indicar o índice do array, no console vai mostrar o número 3.
*
* 1.5 - 
* array[i+1] = 19
* console.log('e. ', array) - O i que estava na posição 0 agora soma mais 1, indo para a posição 1, que tem 
* o número 4 mas agora irá receber o número 19. 
*
* 1.6 - 
* const valor = array[i+6]
* console.log('f. ', valor) - A const valor irá receber o conteúdo do indice (0 + 6 = 6), que é o valor 9. 
*/

/*
* 2 - Leia o código abaixo com atenção. 
* - Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
* SUBI NUM ÔNIBUS EM MIRROCOS 27
* 
*/


// Exercícios de escrita de código
/* 
* 1 - Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console 
* a seguinte mensagem:    
*   O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`! 
*/

const nome = prompt("Qual é o seu nome?")
const email = prompt("Qual é o seu e-mail?")

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}`)

/*
* 2 - Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. 
* Em seguida, siga os passos:
*/

const comidas = ["Lasanha", "Estrogonofe", "Macarronada", "Pizza", "Panqueca"]

// 2.a - imprimir
console.log(comidas)

/* 2.b - Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", 
seguida por cada uma das comidas, uma embaixo da outra. */
console.log(`Essas são as minhas comidas preferidas:
${comidas[0]},
${comidas[1]},
${comidas[2]},
${comidas[3]},
${comidas[4]}`)

/* 
2.c - Aqui vai um desafio: 
2.c.1 - pergunte ao usuário uma comida preferida. 
2.c.2 - Troque a segunda comida da sua lista pela inserida pelo usuário. 
2.c.3 - Imprima no console a nova lista 
*/

// 2.c.1
const comidaPreferidaUsuario = prompt("Qual a sua comida preferida?")

// 2.c.2
const comidas1 = ["Lasanha", "Estrogonofe", "Macarronada", "Pizza", "Panqueca"]
comidas1[1] = comidaPreferidaUsuario

// 2.c.3
console.log(comidas1)

/*
* 3. Faça um programa, seguindo os passos:
*    
*    a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
*    
*    b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
*    
*    c) Imprima o array no console
*    
*    d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
*    
*    e) Remova da lista o item de índice que o usuário escolheu.
*    
*    f) Imprima o array no console
*/

// 3.a
const listaDeTarefas = []

// 3.b
const tarefa1 = prompt("Informe a primeira tarefa que deseja realizar")
const tarefa2 = prompt("Informe a segunda tarefa que deseja realizar")
const tarefa3 = prompt("Informe a terceira tarefa que deseja realizar")

listaDeTarefas[0] = tarefa1
listaDeTarefas[1] = tarefa2
listaDeTarefas[2] = tarefa3

// 3.C
console.log(listaDeTarefas)

// 3.d
const escolherTarefa = Number(prompt(`
Escolha uma tarefa que deseja retirar da lista: 
0 - ${listaDeTarefas[0]}, 
1 - ${listaDeTarefas[1]},
ou 2 - ${listaDeTarefas[2]}`))

// 3.e
listaDeTarefas.splice( escolherTarefa, 1)

// 3.f
console.log(listaDeTarefas)


// *** DESAFIO ***

/*
* 1.1 - Receba uma frase
* 1.2 - retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços
*/

// 1.1
const frase = prompt("Digite uma frase")

// 1.2
const arrayFrase = frase.split(" ")
console.log(arrayFrase)

/*
* 2 - Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], 
* 2.1 - faça um programa que acha o índice da palavra Abacaxi 
* 2.2 - e imprime tanto o índice quanto o tamanho do array
*/

// 2.0
const arrayFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

// 2.1
const index = arrayFrutas.indexOf("Abacaxi")

// 2.2
console.log(`Índice da palavra Abacaxi - ${index}, Tamanho do array - ${arrayFrutas.length}`)





