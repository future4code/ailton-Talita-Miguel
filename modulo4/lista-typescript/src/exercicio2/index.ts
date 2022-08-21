/**
 * - Exercício 2
    
    Crie uma função que receba um parâmetro qualquer e que imprima no console o tipo da variável. 
    
    - **Entradas/Saídas**
        input: várias possibilidades
        output: nenhuma
 */

function tipoParametro (data: any):void {
  if (typeof data !== "object") {
    console.log(typeof data)
  } else if (Array.isArray(data)) {
    console.log("array")
  } else {
    console.log("object")
  }
}

tipoParametro("Info")
tipoParametro(10)
tipoParametro( 5 > 10)
tipoParametro([1, 2, 3, 4])