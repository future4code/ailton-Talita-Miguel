/**
 * - Exercício 6
    
    Vamos reescrever a função anterior utilizando o `Promise.all`. Antes disso, responda as 
    perguntas abaixo:
    
    a. O que o `Promise.all` faz?
    Para resolver o problema do await, que espera o anterior terminar para depois começar 
    o próximo. Ele dispara todos ao mesmo tempo, 
    
    b. Quais as vantagens de se utilizar o `Promise.all` no caso de se enviar as notificações 
    para todos os usuários?

    Porque ele vai disparar todas as notificações independente se a anterior terminou ou não.
    
    c. Reimplemente a função utilizando `Promise.all`
 */

import { BASE_URL } from "./constants/urls";
import axios from "axios";

type user = {
  id: string;
  name: string;
  email: string;
};

const news = {
  title: "Melhor sobremesa",
  content: "A Jil disse que sorvete é a melhor sobremesa",
  date: Date.now(),
};

const createNews = (news: any) => {
  return axios.put(`${BASE_URL}/news`, news);
};

const getAllSubscribers = async (): Promise<void> => {
  const result = await axios.get(`${BASE_URL}/subscribers`);
  return result.data;
};

const getSubscribersIds = async (subscribers: any) => {
  return await subscribers?.map((subscriber: any) => {
    return subscriber;
  });
};

const sendNotifications = async (
  users: user[],
  message: string
): Promise<void> => {
  try {
    if(!users || !message) {
      throw new Error("Error receiving user or message information");
    }

    const promises = users.map((user) => {
      return axios.post(`${BASE_URL}/notifications`, {
        subscriberId: user.id,
        message: message,
      });
    });

    await Promise.all(promises)

  } catch (error: any) {
    console.log(error.message || "An error occurred. Please try again");
  }
};

createNews(news)
  .then(getAllSubscribers)
  .then(getSubscribersIds)
  .then((res) =>
    sendNotifications(res, "Olá, há uma nova notícia em nosso site")
  )
  .catch((erro) => erro.response?.data || erro.message || "An error occurred. Please try again");
