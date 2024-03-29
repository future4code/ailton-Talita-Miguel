/**
 * - Exercício 8
    
    Escreva uma função que pergunta ao usuário a data de nascimento de uma pessoa (ex.: “24/04/1993”, 
    e a data de emissão da sua carteira de identidade (ex.: “07/11/2015”). A função deve retornar um 
    booleano que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada 
    segundo os seguintes critérios:
    
    - Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos 
    (se for exatamente 5 anos, deve ser renovada).
    - Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se 
      for exatamente 10 anos, deve ser renovada).
    - Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos
 */

    const formataData = (data: string):number => {
      const dataCompleta = data.split("/");
      const ano = dataCompleta[2];
      return Number(ano);
    };
    
    const checaRenovacaoCNH = (anoAtual: string, anoNascimento: string, anoEmissao: string): boolean => {
      const anoAtualFormatado = formataData(anoAtual);
      const anoNascFormatado = formataData(anoNascimento);
      const anoEmissaoFormatado = formataData(anoEmissao);
      let idade: number = anoAtualFormatado - anoNascFormatado;
      let tempoCarteira: number = anoAtualFormatado - anoEmissaoFormatado;
    
      if (idade <= 20) {
        return tempoCarteira >= 5 ? true : false;
      } else if (idade >= 20 || idade <= 50) {
        return tempoCarteira >= 10 ? true : false;
      } else if (idade > 50) {
        return tempoCarteira >= 15 ? true : false;
      } else {
        return false;
      }
    };
    console.log(checaRenovacaoCNH("12/08/2022", "11/11/1993", "25/11/2014"));