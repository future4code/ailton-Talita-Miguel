/**
 * - Exercício 4
    
    Vamos continuar as nossas funcionalidades da API. Crie uma função que permita criar uma 
    nova notícia.
    
    a. Qual é o tipo dessa função? Por quê?
    O correto seria POST, mas utilizei o tipo PUT pq na api está utilizando o put. 
    
    b. Implemente a função solicitada
 */

import {BASE_URL} from "./constants/urls"
import axios from 'axios'

const createNews = async (
  title: string,
  content: string,
  date: number
): Promise<void> => {
  
  try {

    await axios.put(`${BASE_URL}/news`, {
      title: title,
      content: content, 
      date: date
    })
    console.log("News created successfully!")

  } catch (error) {
    console.log("Something wrong is not right!")
  }
}

const main = async():Promise<void> => {
  await createNews("Melhor sobremesa", "A Jil disse que sorvete é a melhor sobremesa", Date.now() )
}

main()