/**
 * - Exercício 5
    
  Agora, implemente uma função que receba um array de usuários e uma mensagem e envie essa 
  mensagem como notificação para todos os usuários. A princípio, não utilize o `Promise.all`
 */
import {BASE_URL} from "./constants/urls"
import axios from 'axios'


type user = {
	id: string;
	name: string;
	email: string;
}

const news = {
  title: "Melhor sobremesa",
  content: "A Jil disse que sorvete é a melhor sobremesa",
  date: Date.now()
}

const createNews = (news: any) => {
  return axios.put(`${BASE_URL}/news`, news)
}

const getAllSubscribers = async (): Promise<void> => {
  const result = await axios.get(`${BASE_URL}/subscribers`)
  return result.data
};

const getSubscribersIds = async (subscribers: any) => {
  return await subscribers?.map((subscriber:any) => {
      return subscriber
  })
}

const sendNotifications = async (
  users: user[]
): Promise<void> => {

  try {
    if(!users) {
      throw new Error("Error receiving user information");
    }
    for (const user of users) {
      await axios.post(`${BASE_URL}/notifications`, {
        subscriberId: user.id,
        message: "Olá, há uma nova notícia em nosso site"
      })
      .then(() => {console.log(`Notificação enviadas para usuário ${user.name}!`)})
      .catch(() => {console.log(`Erro ao enviar para ${user.name}`)})
    }

    console.log("All notifications sent");
  } catch (error: any) {
    console.log(error.message || "An error occurred. Please try again");
  }
};

                                            
createNews(news)
  .then(getAllSubscribers)
  .then(getSubscribersIds)
  .then(sendNotifications)
  .catch(erro => erro.response?.data || erro.message || "An error occurred. Please try again")