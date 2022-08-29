## Aula - Banco de Dados e Introdução a SQL
# Exercício 1
a) Nesta tabela, utilizamos o `FLOAT` para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.

Varchar - para criar uma string, primary Key - identificação única, not null - campo com preenchimento obrigatório, Date - campo com formato de data.

b) O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.

SHOW DATABASES - Lista todas as databases que temos.
SHOW TABLES - Lista todas as tabelas criadas. 

c) O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando  `DESCRIBE Actor` e explique os resultados. 
  O comando describe mostra uma tabela com todas as informações de seus campos. 


# Exercício 2
a) Escreva uma query que crie a atriz `Glória Pires`, com o id `002`, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963

```INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES("002", "Glória Pires", 1200000, "1963-08-23", "female");```

b) Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.

Acontece o Error code: 1062 Duplicate entry "002" for key "PRIMARY"
Tradução = Entrada "002" duplicada
Não é possível criar outra informação repetindo o mesmo ID, o ID  deve ser único. 

# Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta

c) 
Error Code: 1136. Column count doesn't match value count at row 1	0,207 sec
Tradução: Código de erro: 1136. A contagem de colunas não contagem de valor de correspondência na linha 1 0,207 seg
Faltava as informações de birth_date e gender no parâmetro.

``` INSERT INTO Actor (id, name, salary,birth_date, gender) VALUES("003", "Fernanda Montenegro", 300000, "1929-10-19", "female");```

d)
Error Code: 1364. Field 'name' doesn't have a default value	0,150 sec
Tradução: Código do erro: 1364. O campo 'nome' não possui um valor padrão 0,150 seg
Falta a informação tanto no parametro e nos valores a informação do name

``` INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES("004", "Lima Duarte", 400000, "1949-04-18", "male");```
e)
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1	0,153 sec
Tradução: Código do erro: 1292. Valor de data incorreto : '1950' para a coluna 'birth_date' na linha 1 0,153 seg
Falta colocar aspas na informação da data. 

``` INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES("005", "Juliana Paes", 719333.33, "1979-03-26", "female");```

f) Foi adicionado os Atores na tabela


# Exercício 3
    
  Com os dados criados, podemos nos aventurar nas queries de seleção de dados. Elas são indicadas pelo operador `SELECT` 

  a) Escreva uma query que retorne todas as informações das atrizes
  ```SELECT * from Actor WHERE gender = "female";```

  b) Escreva uma query que retorne o salário do ator com o nome Tony Ramos
  ```SELECT salary from Actor WHERE name = "Tony Ramos";```

  c) Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.
  ```SELECT * from Actor WHERE gender = "invalid";```
  A pesquisa não dá erro, mas não localiza um ator com esse gênero.

  d) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000
  ```SELECT id, name, salary from Actor WHERE salary < 500000;```

  e) Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta

  Error Code: 1054. Unknown column 'nome' in 'field list'	0,158 sec
  Tradução: Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos' 0,158 seg
  A coluna 'name' foi informado como 'nome' isso gera um erro. 


# Exercício 4
    
  Para finalizar o nosso estudo nas tabelas de atores, vamos fazer uma query mais complexa. Queremos encontrar todos os atores e atrizes:
    
    - cujos nomes começam com "A" ou "J"; e
    - cujos salários são maiores do que R$300.000 
  
  ```SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000```

  a) Explique com as suas palavras a query acima
  Seleciona todos os atores da tabela, e faz uma verificação para pegar apenas os nomes com as iniciais A ou J e com o salário maior que 300.000

  b) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00
  ```SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND salary > 350000;```

  c) Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome. 
  ```SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%";```

  d) Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00

  ```SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;```


  # Exercício 5
    
    Terminamos de fazer um belo estudo sobre a tabela de Atores. Agora, você vai ficar mais independente. Precisamos criar a tabela de Filmes com as informações: id, nome, sinopse, data de lançamento e avaliação (que pode ser de 0 a 10).
    
    a)Escreva a query que cria essa tabela. Para sinopse, utilize o tipo TEXT, pesquise sobre ele se precisar. Explique a query resumidamente.

  ```CREATE TABLE Filme (id VARCHAR(255) PRIMARY KEY, name VARCHAR (255) NOT NULL, sinopse TEXT NOT NULL,data_de_lancamento DATE NOT NULL, avaliacao INT NOT NULL)```

    b)Crie 4 filmes com as seguintes informações: 
    
  ```INSERT INTO Filme (id, name, sinopse, data_de_lancamento, avaliacao) VALUES("001", "Se Eu Fosse Você","Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", "2006/01/06", 7);```

    c)Crie 4 filmes com as seguintes informações: 

  ```INSERT INTO Filme (id, name, sinopse, data_de_lancamento, avaliacao) VALUES("002", "Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", "2012/12/27", 10);```

    d)Crie 4 filmes com as seguintes informações: 
    
  ``` INSERT INTO Filme (id, name, sinopse, data_de_lancamento, avaliacao) VALUES("003", "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017/11/02", 8);```

    e)Crie 4 filmes com as seguintes informações: 

  ```INSERT INTO Filme (id, name, sinopse, data_de_lancamento, avaliacao) VALUES("004", "Deus é Brasileiro", "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.", "2003-01-31", 9);```

  # Exercício 6
    
    Escreva uma query que:
    
    a) Retorne o id, título e avaliação a partir de um id específico;

  ``` SELECT id, nome, avaliacao from Filme WHERE id = 001 ```
    
    b) Retorne um filme a partir de um nome específico;

  ``` SELECT * from Filme WHERE name = "Deus é Brasileiro" ```
    
    c) Retorne o id, título e sinopse dos filmes com avaliação mínima de `7` 

  ```SELECT id, name, sinopse from Filme WHERE avaliacao > 7```

  # Exercício 7
    
    Escreva uma query que:
    
    a) Retorna um filme cujo título contenha a palavra `vida`

  ```SELECT * FROM Filme WHERE name LIKE "%Deus%";```
    
    b) Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer `TERMO DE BUSCA` para exemplificar.

  ```SELECT * FROM Filme WHERE name LIKE "%Deus%" OR sinopse LIKE "%professora%";```
    
    c) Procure por todos os filmes que já tenham lançado

  ```SELECT * FROM Filme WHERE data_de_lancamento < CURDATE();```
    
    d) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que `7`. 

  ```SELECT * FROM Filme WHERE data_de_lancamento < "2022-08-22" AND (name LIKE "%Deus%" OR sinopse LIKE "%Deus%") AND avaliacao > 7; ```