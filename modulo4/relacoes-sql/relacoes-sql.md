# Exercício 1 
a) Explique o que é uma chave estrangeira?

Chave estrangeira, ou Foreign Key (FK), é a chave que permite fazer referência a registros de outras tabelas. Ou seja, é o campo ou conjunto de campos que compõem a chave primária de uma outra tabela.

b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes

```
CREATE TABLE Rating (
id VARCHAR(255) PRIMARY KEY,
comment TEXT NOT NULL,
rate FLOAT NOT NULL,
Movies_id VARCHAR(255),
FOREIGN KEY (Movies_id) REFERENCES Movies(id)
);

```
```
INSERT INTO Rating (id, comment, rate, Movies_id) VALUES 
("001", "Excelente!", 9.2, "001"),
("002", "Muito bom!", 7, "002"),
("003", "Mais ou menos!", 4, "003"),
("004", "Não gostei!", 2, "004"),
("005", "Excelente!", 9.8, "005"),
("006", "Muito bom!", 6, "006"),
("007", "Não gostei!", 1, "008");
```

c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails.
Tradução: Código do erro: 1452. Não é possível adicionar ou atualizar uma linha filha: uma estrangeira falha na restrição de chave.

d) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.
``` ALTER TABLE Movies DROP COLUMN rating; ```

e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails 
Tradução: Código de erro: 1451. Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha.

# Exercício 2 

a) Explique, com as suas palavras, essa tabela
Essa tabela cria um relacionamento entre atores e filmes, mostra quais atores estão em um filme.

b) Crie, ao menos, 6 relações nessa tabela 
```
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```

c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails.
Tradução: Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha.

d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails.
Tradução: Código de erro: 1451. Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha.

# Exercício 3

a) Explique, com suas palavras, a query acima. O que é o operador ON?
O `ON` busca um correspondente na outra tabela e retorna as informações.

b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.
```
SELECT Movies.id, name, rate FROM Movies
JOIN Rating
ON Movies.id = Rating.Movies_id 
WHERE Rating.rate IS NOT NULL;
```

# Exercício 4

a) Escreva uma query que retorne todos os filmes e suas avaliações (com essa avaliação existindo ou não). A sua query deve retornar somente o nome, id, nota do filme e comentário

```
SELECT Movies.id, name, rate, comment FROM Movies
LEFT JOIN Rating
ON Movies.id = Rating.Movies_id;
```

b) Escreva uma query que retorne todas as relações de elenco, junto com as informações do filme. A sua query deve retornar o id do filme, título do filme e id do ator

```SELECT Movies.id, Movies.name, actor_id, Actor.name FROM Movies
JOIN MovieCast as mc
ON Movies.id = mc.movie_id
JOIN Actor
ON Actor.id = mc.actor_id;
```

c) Escreva uma query que retorne a média das avaliações de todos os filmes agrupada em relação aos filmes (mesmo que ele não tenha sido avaliado ainda)

```
SELECT Movies.name, AVG(rate) AS AverageRate FROM Movies
JOIN Rating
ON Movies.id = Rating.Movies_id
GROUP BY Movies.name;
```
# Exercício 5
a) Explique, com suas palavras essa query. Por que há a necessidade de dois JOIN?
A ligação entre o ator e o filme acontecem na tabela MovieCast, então para poder acessar o id do ator e o id do filme relacionados precisa tbm da tabela movieCast. 

b) Altere a query para que ela retorne o id e o título do filme, e o id e o nome do ator. Coloque alias para facilitar o endentimento do retorno da query

```
SELECT Movies.id, Movies.name, actor_id, Actor.name FROM Movies
JOIN MovieCast as mc
ON Movies.id = mc.movie_id
JOIN Actor
ON Actor.id = mc.actor_id;
```
c) A query abaixo deveria ser a resposta do item b. Tente rodá-la. Anote e explique o resultado.
Essa query faz o relacionamento das tabelas movies, actor e movieCast, retornando o id e título do filme, id e nome do ator. 

d) Desafio: Faça uma query que retorne todos os filmes com o nome de seus atores e as suas avaliações (nota e comentário)

```
SELECT Movies.id, Movies.name, actor_id, Actor.name, rate, comment FROM Movies
JOIN MovieCast as mc
ON Movies.id = mc.movie_id
JOIN Actor
ON Actor.id = mc.actor_id
JOIN Rating
ON Movies.id = Rating.Movies_id;
```