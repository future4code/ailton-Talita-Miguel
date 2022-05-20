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
let pontuacao = 0
let cartasDaMaoUsuario = ""

let darCartas = () => {
   for (let i = 0; i < 2; i++) {
      if(cartaUsuario.length < 2) {
         cartaUsuario.push(comprarCarta())
      }
      if(cartaComputador.length < 2) {
         cartaComputador.push(comprarCarta())
      }
   }
}

const adicionarNovaCarta = () => {
   //cartasDaMaoUsuario = ""

   console.log('1',cartaUsuario)

   cartaUsuario.push(comprarCarta())
   
   for (const item of cartaUsuario) {
      console.log('2----', item)
      pontuacao += item.valor

      cartasDaMaoUsuario = cartasDaMaoUsuario + item.texto
      console.log(cartasDaMaoUsuario)

      console.log('3---',pontuacao)
      if(pontuacao >= 21) {
         console.log('maior')
         return
      }
   }
}

const gerarJogo = (cartaUsuario, cartaComputador) => {
   if (confirm("Bem-vindo(a) ao jogo de blackjack" + "\n" + "Quer iniciar uma nova rodada?")) {
      darCartas()
    
      
      if(cartaUsuario[0].texto.includes('A') && cartaUsuario[1].texto.includes('A'))  {
         cartaUsuario.splice(0, cartaUsuario.length)
         darCartas()
         
      } else if(cartaComputador[0].texto.includes('A') && cartaComputador[1].texto.includes('A')) {
         cartaComputador.splice(0, cartaComputador.length)
         darCartas()
      }

      console.log(cartaUsuario)

      console.log(pontuacao)

      let continuarJogando  = true


     while (pontuacao < 21 && continuarJogando === true) {
      adicionarNovaCarta()

      if(confirm(`Suas cartas são ${cartasDaMaoUsuario}. 
      A carta revelada do computador é ${cartaComputador[0].texto}. \n  Deseja comprar mais uma carta?`)) {


         
         

         console.log('carta --', cartasDaMaoUsuario)
         console.log('2---', pontuacao)
      
         
      } else {
         continuarJogando = false
      }
        
     }
      
      
      
   } else {
      console.log("O jogo acabou")
   }
   
   
}

gerarJogo(cartaUsuario, cartaComputador)

