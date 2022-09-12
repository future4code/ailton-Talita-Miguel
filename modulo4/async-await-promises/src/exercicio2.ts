/**
 * - Exercício 2
    
    Agora, para treinar um pouco da sintaxe, reescreva a função do exercício 1 utilizando *arrow 
    function*. 
    
    a. Explique, com suas palavras, a diferença da sintaxe de uma função nomeada assíncrona e 
    uma arrow function assíncrona

    não escrevemos function e é menor e o async vem antes. 
    
    b. Implemente a função solicitada, usando arrow function
 */

    import {BASE_URL} from "./constants/urls"
    import axios from 'axios'

    const getSubscribers = async (): Promise<any[]> => {
      const response = await axios.get(`${BASE_URL}/subscribers`);
      return response.data;
    };
    
    const main = async() => {
      return await getSubscribers()
    }
    
    main().then((res) => {
      console.log(res)
    })