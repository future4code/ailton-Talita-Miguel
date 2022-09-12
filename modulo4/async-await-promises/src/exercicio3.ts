/**
 * - Exercício 3
    
    Agora, vamos melhorar um pouco a nossa função, criando uma tipagem que represente 
    os assinantes da nossa aplicação. No nosso caso, eles possuem um `id`, `name` e `email`, 
    como indicado abaixo:

    a. Se apenas trocarmos o retorno da função para: `Promise<user[]>` , teremos algum erro 
     de tipagem?

     Não, não teremos nenhum erro.

    b. É boa prática fazermos um mapeamento do resultado de uma Promise, caso seja indicado 
    que ela retorne um `Promise<any>`. Explique com as suas palavras o porquê de fazermos isso

    Porque vamos percorrer o vetor e ele retorna mais informações no resultado dele, 
    por isso colocamos any.

    c. Reimplemente a função, corretamente.
 */

import {BASE_URL} from "./constants/urls"
import axios from 'axios'

type user = {
	id: string;
	name: string;
	email: string;
}

const getSubscribers = async (): Promise<user[]> => {
  const response = await axios.get(`${BASE_URL}/subscribers`);
  return response.data.map((res: any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email,
    };
  });
};

const main = async() => {
  return await getSubscribers()
}

main().then((res) => {
  console.log(res)
})