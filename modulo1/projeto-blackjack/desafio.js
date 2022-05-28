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

console.log("Bem-vindo(a) ao jogo de blackjack")

let cartaUsuario = []
let cartaComputador = []
let suasCartasSao = []
let pontuacaoUsuario = 0
let pontuacaoComputador = 0
let confirmacao = false


const darCartas = () => {
   for (let i = 0; i < 2; i++) {
      if(cartaUsuario.length < 2) {
         cartaUsuario.push(comprarCarta())
      }
      if(cartaComputador.length < 2) {
         cartaComputador.push(comprarCarta())
      }
   }

   pontuacaoComputador = cartaComputador[0].valor + cartaComputador[1].valor
}

const mensagemFimDeJogo = (suasCartasSao, pontuacaoUsuario) => {
   let vitoria

   if ( pontuacaoUsuario > pontuacaoComputador && pontuacaoUsuario <= 21) {
      vitoria = "O usuário ganhou!"

   } else if (pontuacaoComputador > pontuacaoUsuario && pontuacaoUsuario <= 21) {
      vitoria = "O computador ganhou!"

   } else {
      vitoria = "Empate!"
   }

   return alert(`
      Suas cartas são ${suasCartasSao}. Sua pontuação é ${pontuacaoUsuario}
      As cartas do computador são ${cartaComputador[0].texto} ${cartaComputador[1].texto} . A pontuação do computador é ${pontuacaoComputador}.
      ${vitoria}
   `)
}

const enquantopontuacaoUsuarioMenor21 = (cartaUsuario) => {
   
   if(confirmacao) { 
      cartaUsuario.push(comprarCarta())
   } else {
      confirmacao = false
   }

   if(pontuacaoUsuario < 20) {
      console.log('pontuacao1', pontuacaoUsuario)
      for (const item of cartaUsuario) {
         console.log('item valor', item.valor)
         pontuacaoUsuario += item.valor
         suasCartasSao.push(`${item.texto} `)
         
         console.log('pontuacao2', pontuacaoUsuario)
      }
      
      console.log('pontuacao3', pontuacaoUsuario)
      
   }

   console.log('suasCartasSao', suasCartasSao)
      
   mensagemFimDeJogo(suasCartasSao, pontuacaoUsuario)

   console.log('fim do enquanto', pontuacaoUsuario)

}

const darNovaCarta = (cartaUsuario) => {
   enquantopontuacaoUsuarioMenor21(cartaUsuario)
  
}

const verificaDoisAses = (cartaUsuario, cartaComputador) => {
   if(cartaUsuario[0].texto.includes('A') && cartaUsuario[1].texto.includes('A'))  {
      cartaUsuario.splice(0, cartaUsuario.length)
      darCartas()
      
   } else if(cartaComputador[0].texto.includes('A') && cartaComputador[1].texto.includes('A')) {
      cartaComputador.splice(0, cartaComputador.length)
      darCartas()
   }
}

const desejaComprarMaisCartas = (cartaUsuario, cartaComputador, suasCartasSao) => {
   console.log('confirmação1', confirmacao)
   confirmacao = confirm(`
      Suas cartas são ${cartaUsuario[0].texto} ${cartaUsuario[1].texto}. 
      A carta revelada do computador é ${cartaComputador[0].texto}.
      Deseja comprar mais uma carta?
   `)

   console.log('confirmação2', confirmacao)

   if(confirmacao === true) {
      console.log('confirmação3', confirmacao)
      darNovaCarta(cartaUsuario)
      
      // confirmacao = confirm(`
      // Suas cartas são ${suasCartasSao} 
      // A carta revelada do computador é ${cartaComputador[0].texto}.
      // Deseja comprar mais uma carta?
      // `)
      // darNovaCarta(cartaUsuario)
      // console.log('******')
      
   } else {
      suasCartasSao.push(cartaUsuario[0].texto)
      suasCartasSao.push(cartaUsuario[1].texto)
      mensagemFimDeJogo(suasCartasSao, pontuacaoUsuario)
   }
}

const gerarJogo = (cartaUsuario, cartaComputador) => {
   if (confirm("Bem-vindo(a) ao jogo de blackjack" + "\n" + "Quer iniciar uma nova rodada?")) {
      
      darCartas()

      verificaDoisAses(cartaUsuario, cartaComputador)
    
      desejaComprarMaisCartas(cartaUsuario, cartaComputador, suasCartasSao)
      
   }
   
   
}

gerarJogo(cartaUsuario, cartaComputador)

