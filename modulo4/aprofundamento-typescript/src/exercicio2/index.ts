/**
 * - **Exercício 2**
    
    Observe a função a seguir, escrita em JavaScript:
    
    ```jsx
    function obterEstatisticas(numeros) {
    
        const numerosOrdenados = numeros.sort(
            (a, b) => a - b
        )
    
        let soma = 0
    
        for (let num of numeros) {
            soma += num
        }
    
        const estatisticas = {
            maior: numerosOrdenados[numeros.length - 1],
            menor: numerosOrdenados[0],
            media: soma / numeros.length
        }
    
        return estatisticas
    }
    ```
    
    a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e 
    faça a tipagem desses parâmetros
  */

// entrada é um array de números e a saída um objeto

function obterEstatisticas(numeros: number[]): {} {
  const numerosOrdenados: number[] = numeros.sort(
    (a: number, b: number) => a - b
  );

  let soma: number = 0;
  let num: number;

  for (num of numeros) {
    soma += num;
  }

  const estatisticas: {} = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}
console.log(obterEstatisticas([21, 18, 65, 44, 15, 18]));
/*  
  b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas 
*/

// obterEstatisticas que é um objeto, numerosOrdenados que é um array, soma,maior, menor e media são number

/*
    
    c) Crie um *type* chamado **amostra** de dados, isto é, um objeto com as propriedades 
    **numeros** e **obterEstatisticas**. Abaixo, temos um exemplo de objeto desse tipo, declarado 
    em JavaScript:
 */

type Amostra = {
  numero: number[];
  obterEstatistica: (numeros:number[]) => {
    maior: number,
    menor: number,
    media: number
  }
};
