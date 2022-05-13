// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = prompt('Digite a altura')
  const largura = prompt('Digite a largura')

  const area = Number(largura * altura)

  console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt('Digite o ano atual')
  const anoDeNascimento = prompt('Digite seu ano de nascimento')

  const idade = Number(anoAtual - anoDeNascimento)

  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura)

  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('Digite o seu nome')
  const idade1 = prompt('Digite sua idade')
  const email = prompt('Digite seu e-mail')

  console.log(`Meu nome é ${nome}, tenho ${idade1} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt('Digite sua 1° cor favorita')
  const cor2 = prompt('Digite sua 2° cor favorita')
  const cor3 = prompt('Digite sua 3° cor favorita')

  const arrayCores = [cor1, cor2, cor3]

  console.log(arrayCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const quantidadeDeIngressos = custo / valorIngresso

  return quantidadeDeIngressos

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const tamanho = (string1.length === string2.length)
  
  return tamanho

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array[0]
  const ultimoElemento = array[array.length - 1]
  
  array[0] = ultimoElemento
  array[array.length - 1] = primeiroElemento

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() === string2.toLowerCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual1 = prompt('Digite o ano atual')
  const anoDeNascimento1 = prompt('Digite o seu ano de nascimento')
  const anoCarteiraDeIdentidade = prompt('Digite o ano em que sua carteira de identidade foi emitida')

  const idade2 = Number(anoAtual1 - anoDeNascimento1)
  const carteiraValidade = Number(anoAtual1 - anoCarteiraDeIdentidade)

  console.log(idade2 <= 20 && carteiraValidade >= 5 || idade2 >= 21 && idade2 <= 50 && carteiraValidade >= 10 || idade2 >= 51 && carteiraValidade >= 15)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const anoMultiplosDeQuatro = ano % 4 === 0  
  const anoMultiplosDeCem = ano % 100 === 0
  const anoMultiplosDeQuatrocentos = ano % 400 === 0

  return anoMultiplosDeQuatro && anoMultiplosDeCem === false || anoMultiplosDeQuatro && anoMultiplosDeCem && anoMultiplosDeQuatrocentos

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maiorDezoito = prompt('Você tem mais de 18 anos? - Sim ou Não').toLocaleLowerCase()
  const ensinoMedio = prompt('Você possui ensino médio completo? - Sim ou Não').toLocaleLowerCase()
  const disponibilidade = prompt('Você possui disponibilidade exclusiva durante os horários do curso? - Sim ou Não').toLocaleLowerCase()

  console.log(maiorDezoito === "sim" && ensinoMedio === "sim" && disponibilidade === "sim")

}