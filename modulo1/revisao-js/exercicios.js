// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort((num1, num2) => {
        if(num1 > num2) return 1;
        if(num1 < num2) return -1;
        return 0
    })

    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let numerosPares = []
    
    array.map((item) => {
        if(item % 2 === 0) {
            numerosPares.push(item)
        }
    })

    return numerosPares
  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numerosParesElevadoADois = []
    
    array.map((item) => {
        if(item % 2 === 0) {
            let itemElevadoADois = item ** 2
            numerosParesElevadoADois.push(itemElevadoADois)
        }
    })

    return numerosParesElevadoADois
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let num = -Infinity
    for (const item of array) {
        if(item > num) {
           num = item
        }
    }
    return num
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero 
    let menorNumero
    let diferenca
    let maiorDivisivelPorMenor

    if(num1 > num2) {
        maiorNumero = num1
        menorNumero = num2
    } else {
        maiorNumero = num2
        menorNumero = num1
    }

    maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
    diferenca = maiorNumero - menorNumero

    return {"maiorNumero": maiorNumero, "maiorDivisivelPorMenor": maiorDivisivelPorMenor, "diferenca": diferenca}
    
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let nNumerosPares = []
    let num = Number(n)

    for(let i = 0; nNumerosPares.length < num; i++) {
        if(i % 2 === 0) {
            nNumerosPares.push(i)
        }

    }
    
    return nNumerosPares
    
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let triangulo

    if (ladoA === ladoB && ladoA === ladoC) {
        triangulo = 'Equilátero'

    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        triangulo = 'Isósceles'
    
    } else {
        triangulo = 'Escaleno'
    }

    return triangulo
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

    array.sort((num1, num2) => {
        if(num1 > num2) return 1;
        if(num1 < num2) return -1;
        return 0
    })

    const retornaSegundoMaiorValor = () => {
        let maiorValor
        let maiorSegundoValor

        console.log(array)
        for (let i = 0; i < array.length; i++) {
            
            if(i === 0) {
                maiorValor = array[i]
            
            } else if (maiorValor < array[i]) { 
                maiorValor = array[i]
                
            } 
        }

        for (let i = 0; i < array.length; i++) {
            
            if(i === 0) {
                maiorSegundoValor = array[i]
                
            } else if (maiorSegundoValor <= array[i] && maiorValor !== array[i]) { 
                maiorSegundoValor = array[i] 

            } 

        }
    
        return maiorSegundoValor
        
    }

    const retornaSegundoMenorValor = () => {
        let menorValor
        let menorSegundoValor
    
        for (let i = 0; i < array.length; i++) {
        
            if(i === 0) {
                menorValor = array[i]
                menorSegundoValor = array[i]

            } else if (menorValor > array[i]) { 
                menorValor = array[i]

                
            } else if (menorSegundoValor < array[i]) { 
                menorSegundoValor = array[i]
                return menorSegundoValor
            } 
        }
    }

    return[retornaSegundoMaiorValor(), retornaSegundoMenorValor()]

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let atores = ''

    for (let i = 0; i < filme.atores.length; i++) {
        const arr = (filme.atores.length) - 1

        if(i !== arr) {
            atores += `${filme.atores[i]}, `
        } else {
            atores += `${filme.atores[i]}`
        }
        
    }
    return ( `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atores}.`)
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return {
        ...pessoa,
        nome: "ANÔNIMO"
    }
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasAutorizadas = []
    pessoas.map((item) => {
        if(item.altura >= 1.5 && item.idade > 14 && item.idade < 60) {
            return pessoasAutorizadas.push(item)
        }
    })

    return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasNaoAutorizadas = []
    pessoas.map((item) => {
        console.log(item)
        if(item.altura < 1.5 || item.idade <= 14 || item.idade > 60) {
            return pessoasNaoAutorizadas.push(item)
        }
    })

    return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    
    for (const conta of contas) {
        let atualizaSaldo
        
        let totalCompras = 0
        for (const compra of conta.compras) {
            totalCompras += compra
        }

        console.log(conta)
        console.log(totalCompras)
        console.log(conta.saldoTotal)

        console.log(conta.saldoTotal - totalCompras)

        conta.saldoTotal = conta.saldoTotal - totalCompras
        conta.compras = []

    }

    return contas

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}