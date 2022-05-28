// /**
//  * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
//  * 
//  * 
//     const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
//     console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
//     console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
//  * 
//  * 
//  * 
//  */

// console.log("Bem-vindo(a) ao jogo de blackjack")

// cartaUsuario1 = comprarCarta()
// cartaUsuario2 = comprarCarta()

// cartaComputador1 = comprarCarta()
// cartaComputador2 = comprarCarta()



// const gerarJogo = (user1, user2, computador1, computador2 ) => {

//    let resultadoUser = (user1.valor + user2.valor)
//    let resultadoComputador = (computador1.valor + computador2.valor)
   
//    if(resultadoComputador > resultadoUser) {
//       console.log(`Usuário  - cartas: ${user1.texto} ${user2.texto} - ${resultadoUser}`)
//       console.log(`Computador  - cartas: ${computador1.texto} ${computador2.texto} - ${resultadoComputador}`)
//       console.log(`O computador ganhou!`)
   
//    } else if(resultadoComputador < resultadoUser) {
//       console.log(`Usuário  - cartas: ${user1.texto} ${user2.texto} - ${resultadoUser}`)
//       console.log(`Computador  - cartas: ${computador1.texto} ${computador2.texto} - ${resultadoComputador}`)
//       console.log(`O usuário ganhou!`)
//    } else {
//       console.log(`Usuário  - cartas: ${user1.texto} ${user2.texto} - ${resultadoUser}`)
//       console.log(`Computador  - cartas: ${computador1.texto} ${computador2.texto} - ${resultadoComputador}`)
//       console.log(`Empate!`)
//    }
   
// }

// if (confirm("Quer iniciar uma nova rodada?")) {
//    gerarJogo(cartaComputador1, cartaComputador2, cartaUsuario1,cartaUsuario2)
// } else {
//    console.log("O jogo acabou")
// }



