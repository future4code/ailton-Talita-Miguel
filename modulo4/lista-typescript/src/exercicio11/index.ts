/**
 * - Exercício 11
    
    Escreva uma função para converter de números normais para algarismos romanos (`string`).
    
    Os romanos eram bem inteligentes. Eles conquistaram a maior parte da Europa e a governaram 
    por centenas de anos. Inventaram estradas de concreto e até biquínis. Uma coisa que eles 
    nunca descobriram foi o número zero. Isso tornou a escrita e a datação de histórias extensas de 
    suas façanhas um pouco mais desafiadoras, mas o sistema de números que eles criaram ainda está 
    em uso hoje. 
    
    Os romanos escreviam números usando letras - I, V, X, L, C, D, M. Não há necessidade de converter 
    números maiores que cerca de 3000. (Os próprios romanos não tendiam a ir mais alto)
    
    A Wikipedia diz: Os algarismos romanos modernos são escritos expressando cada dígito separadamente, 
    começando com o dígito mais à esquerda e pulando qualquer dígito com valor zero.
    
    Para ver isso na prática, considere o exemplo de 1990.
    
    Em algarismos romanos 1990 é MCMXC: 1000=M 900=CM 90=XC
 */

    const converteNumeros = (num: any): string => {
      if (num === "") {
        return "Digite um número";
      }
    
      if (num === 0) {
        return "Não existe 0 em romanos";
      }
    
      if (num > 3000) {
        return "Não converte acima de 3000 em romanos";
      }
    
      let resultado = "";
      let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
      let romano = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
      for (let i = 0; i <= decimal.length; i++) {
        while (num % decimal[i] < num) {
          resultado += romano[i];
          num -= decimal[i];
        }
      }
      return resultado;
    };
    
    console.log(converteNumeros("1500"));