/**
 * - Exercício 1
    
    Crie um função que receba uma `string` com o nome e outra `string` com uma data 
    de nascimento (ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e 
    retornar uma `string` no seguinte formato:

    "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}" 
 */

function infoPessoa (nome: string, dataNasc: string):void {
  let dia: string
  let mes: string
  let ano: string

  let arrayDataNasc: string[] = dataNasc.split("/")
  dia = arrayDataNasc[0]
  mes = arrayDataNasc[1]
  ano = arrayDataNasc[2]

  console.log(`Olá me chamo ${nome}, nasci no dia ${dia} do mês ${mes} do ano ${ano}`)
}

infoPessoa("Maria", "20/09/1850")