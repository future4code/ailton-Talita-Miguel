import {BASE_URL} from "./constants/urls"
import axios from 'axios'
/**
 * Exercício 1
 * 
 * a. Qual endpoint você deve utilizar para isso?
 * usamos o endpoint get para pegar as informações: https://labenews.herokuapp.com/subscribers
 *
 * b. Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa"?
 * : Promise<any[]>
 *
 * c. Implemente uma função nomeada que faça o que foi pedido.
*/

async function getSubscribers(): Promise<any[]> {
  const response = await axios.get(`${BASE_URL}/subscribers`);
  return response.data;
};

const main = async() => {
  return await getSubscribers()
}

main().then((res) => {
  console.log(res)
})