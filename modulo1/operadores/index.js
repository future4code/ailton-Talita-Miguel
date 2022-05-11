// * Exercícios de interpretação de código *

/* 
*
* 1 - Indique todas as mensagem impressas
*
* let resultado = bool1 && bool2
* console.log("a. ", resultado) - Resultado é false, porque bool2 é false.
* 
* resultado = bool1 && bool2 && bool3 
* console.log("b. ", resultado) - Resultado é false, porque bool2 é false. 
*
* resultado = !resultado && (bool1 || bool2) - bool1 || bool2 é true && !resultado é true, então a resposta é true. 
* console.log("c. ", resultado)
* 
* console.log("d. ", typeof resultado) - Typeof de resultado é Boolean
* 
*/

/*
* 2 - Ajudar colega com problema
* 
* Ele está usando um prompt para perguntar os números e está retornando os números digitados 
* que são String e para fazer o cálculo da soma precisamos converter para número. 
* Ex: const soma = Number(primeiroNumero) + Number(segundoNumero).
*
*/

/*
* 3 - Sugestão
* 
* let primeiroNumero = prompt("Digite um numero!")
* let segundoNumero = prompt("Digite outro numero!")
*
* const soma = Number(primeiroNumero) + Number(segundoNumero)
* 
* console.log(soma)
*
*/


// * Exercícios de escrita de código *

// 1.a
let suaIdade = prompt("Qual a sua idade?")

// 1.b
let idadeAmigo = prompt("Qual a idade do seu melhor amigo(a)?")

// 1.c
let suaIdadeEMaior = suaIdade > idadeAmigo
console.log("Sua idade é maior do que a do seu melhor amigo?", suaIdadeEMaior)

// 1.d
let diferencaDeIdades = Number(suaIdade - idadeAmigo)
console.log("Diferença de idades:", diferencaDeIdades)


// 2.a
let numeroPar = prompt("Digite um número par")

// 2.b
let restoDivisao = Number(numeroPar) % 2
console.log("Resto da divisão:", restoDivisao)

// 2.c
// Sempre que dividimos um número par por 2 o resto da divisão é 0. 

// 2.d
// O resto da divisão é diferente de 0. 

// 3.a - idade em Meses
let idade = prompt("Quatos anos você tem?")
let idadeEmMeses = Number(idade) * 12
console.log("Sua idade em meses é: ", idadeEmMeses)

// 3.b - idade em dias
let idadeEmDias = Number(idade) * 365
console.log("Sua idade em dias é: ", idadeEmDias)

// 3.c - idade em horas
let idadeEmHoras = idadeEmDias* 24
console.log("Sua idade em horas é: ", idadeEmHoras)

// 4 
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

// 4.1 - número maior
let numeroMaior = primeiroNumero > segundoNumero
console.log("O primeiro numero é maior que segundo?", numeroMaior)

// 4.2 - são iguais
let numerosSaoIguais = primeiroNumero === segundoNumero
console.log("O primeiro numero é igual ao segundo?", numerosSaoIguais)

// 4.2 - são divisiveis
let numerosSaoDivisiveis = (primeiroNumero % segundoNumero) === 0
console.log("O primeiro numero é divisível pelo segundo?", numerosSaoDivisiveis)

// 4.3 - são divisiveis
let segundoNumeroSaoDivisiveis = (segundoNumero % primeiroNumero) === 0
console.log("O segundo numero é divisível pelo primeiro?", segundoNumeroSaoDivisiveis)


// * DESAFIO *

// 1.1 -  o valor de 77°F em  K
let fahrenheit = 77
let kelvin = (fahrenheit - 32)*(5/9) + 273.15

console.log(`${fahrenheit} graus em Fahrenheit são ${kelvin} graus em Kelvin`)

// 1.2 - o valor de 80°C em °F
let celsius = 80
let fahrenheit1 = (celsius)*(9/5) + 32

console.log(`${celsius} graus em Celsius são ${fahrenheit1} graus em Fahrenheit`)

// 1.3 - o valor de 30°C em °F e K
let celsius1 = 30
let fahrenheit2 = (celsius1)*(9/5) + 32
let kelvin1 = (fahrenheit2 - 32)*(5/9) + 273.15

console.log(`${celsius1} graus em Celsius são ${fahrenheit2} graus em Fahrenheit e ${kelvin1} graus em Kelvin`)

// 1.4 - usuário insira o valor em graus Celsius
let celsius2 = Number(prompt("Digite a temperatura em graus Celsius"))
let fahrenheit3 = (celsius2)*(9/5) + 32
let kelvin2 = (fahrenheit3 - 32)*(5/9) + 273.15

console.log(`${celsius2} graus em Celsius são ${fahrenheit3} graus em Fahrenheit e ${kelvin2} graus em Kelvin`)

// 2.a - Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora
let quilowattHora = 280
let valorAPagar = quilowattHora * 0.05

console.log(`O consumo foi de ${quilowattHora} o valor a ser pago é de R$ ${valorAPagar}`)

// 2.b - 15% de desconto
let valorDoDesconto = valorAPagar * 0.15
let valorFinal = valorAPagar - valorDoDesconto

console.log(`O consumo foi de ${quilowattHora} o valor a ser pago é de R$ ${valorAPagar}, com desconto o valor é R$ ${valorFinal}`)

// 3.a - libra (lb) para quilograma (kg)
let libra = 20
let kg = libra * 0.453592

console.log(`20lb equivalem a ${kg} kg`)

// 3.b - onça (oz) para quilograma (kg)
let onca = 10.5
let kg1 = onca * 0.283495

console.log(`10.5oz equivalem a ${kg1} kg`)

// 3.c - milha (mi) para metro (m)
let milha = 100
let metros = milha * 1609.344

console.log(`100mi equivalem a ${metros} m`)

// 3.d - pés (ft) para metro (m)
let pes = 50
let metros1 = pes * 0.3048

console.log(`50ft equivalem a ${metros1} m`)

// 3.e - galão (gal) para litro (l)
let galao = 103.56
let litros = galao * 3.79

console.log(`103.56gal equivalem a ${litros} l`)

// 3.f - converter xícara (xic) para litro (l)
let xicara = 450
let litros1 = xicara * 0.24

console.log(`450 xic equivalem a ${litros1} l`)

// 3.g - pedir valor para conversão 
let xicara1 = Number(prompt("Digite a quantidade de xícaras para conversão em litros"))
let litros2 = xicara1 * 0.24

console.log(`${xicara1} xic equivalem a ${litros2} l`)




