import { app } from "./app";
import createUser from "./endpoints/User";
import connectionTest from "./endpoints/test";

const user = new createUser();

app.get("/connectionTest", connectionTest);
app.get("/user/byEmail", user.getUserByEmail);
app.get("/user/byId", user.getUserById);
app.get("/user/login", user.login);
app.post("/user/signup", user.createUser);

/* Exercício 1
a) *Qual a sua opinião em relação a usar strings para representar os ids? 
Você concorda que seja melhor do que usar números?*

-É melhor usar como string, visto que é mais seguro e também evita conflitos. 

b) *A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas 
dentro de funções. Isso vai deixar nosso código mais organizado e aumentar 
a facilidade da manutenção e refatoração. Dado isso, crie uma função para 
gerar um id.*

*/

/***
 * Exercício 2 - 
 * a) *Explique o código acima com as suas palavras.*
 * 
 * - Chamou a tabela User, criou a conexão com o banco de dados e criou
 * a função para criar um usuário. 

  b) *Comece criando a tabela de usuários. Coloque a query que você utilizou 
  no arquivo de respostas.*

  CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
  );

  c) *Pela mesma justificativa do exercício anterior, crie uma função para 
  ser responsável pela criação de usuários no banco.*

  - função criada no data/ connection.ts
 */

/**
 * Exercício 3
 * a) *O que a linha `as string` faz? Por que precisamos usar ela ali?*
 * 
 * - nessa linha garantimos que o retorno será uma string.Pq o typescript 
 * precisa de um tipo certo para esse retorno.

  b) *Agora, crie a função que gere o token. Além disso, crie um type  
  para representar o input dessa função.*

  - criado no arquivo  service / GenerateToken
 */

/**
 * Exercício 4 
 * 
 * a) *Crie o endpoint que realize isso, com as funções que você implementou 
 * anteriormente*

  b) *Altere o seu endpoint para ele não aceitar um email vazio ou que não 
  possua um `"@"`*

  c) *Altere o seu endpoint para ele só aceitar uma senha com 6 caracteres 
  ou mais*
 */

/**
 *  Exercício 5
 * a) Crie uma função que retorne as informações de um usuário a partir do email
 */

/**
 * Exercício 6
 * 
 * a) *Crie o endpoint que realize isso, com as funções que você implementou 
 * anteriormente*

b) *Altere o seu endpoint para ele não aceitar um email vazio ou que não 
possua um `"@"`*
 */

/**
 * Exercício 7
 * a) *O que a linha `as any` faz? Por que precisamos usá-la ali?*
 *  - Pq pode retornar como JWT e não é possivel tipar esse formato. 

  b) *Crie uma função que realize a mesma funcionalidade da função acima*
 */


