# Exercício 1
a) O comando DROP COLUMN altera a estrutura da tabela, adiciona uma coluna com o nome de salary.

``` ALTER TABLE Actor DROP COLUMN salary;```

b) O comando CHANGE altera uma propriedade da coluna, vai alterar a propriedade gender para o nome sex e também varchar com 6 caracteres. 

``` ALTER TABLE Actor CHANGE gender sex VARCHAR(6); ```

c) O comando CHANGE altera uma propriedade da coluna, vai alterar a propriedade gender para o nome gender e também varchar com 255 caracteres.

``` ALTER TABLE Actor CHANGE gender gender VARCHAR(255);```

d) Agora,  altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres

``` ALTER TABLE Actor CHANGE gender gender VARCHAR(100); ```

# Exercício 2

a) Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003

```UPDATE Actor SET name = "Moacyr Franco", birth_date = "2020-02-10" WHERE id = 003```

b) Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. Então, escreva outra query para voltar ao nome anterior.

```UPDATE Actor SET name = "JULIANA PAES" WHERE id = 005;```
```UPDATE Actor SET name = "Juliana Paes" WHERE id = 005;```

c) Escreva uma query que atualize todas as informações do ator com o id 005

```UPDATE Actor SET name = "Maria Fernanda Cândido", salary = 133000, bith_date = "1974-05-21", gender = "female"  WHERE id = 005;```

d) Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado. 

Não aparece nenhum erro ao rodar o update com um id inválido, mas na mensagem mostra que 0 linhas foram alteradas. 

```UPDATE Actor SET name = "Juliana Paes" WHERE id = 008;```

# Exercício 3

a) Escreva uma query que apague a atriz com o nome Fernanda Montenegro
```DELETE FROM Actor WHERE name = "Fernanda Montenegro"```

b) Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00
``` DELETE FROM Actor WHERE gender = "male" AND salary > 1000000```

# Exercício 4

a) Escreva uma query que pegue o maior salário de todos os atores e atrizes

``` SELECT MAX(salary) from Actor```

b) Escreva uma query que pegue o menor salário das atrizes

``` SELECT MAX(salary) from Actor WHERE gender = "female"```

c) Escreva uma query que pegue a quantidade de atrizes

``` SELECT count(*) from Actor WHERE gender = "female"```

d) Escreva uma query que pegue a soma de todos os salários

``` SELECT SUM(salary) as total_salary from Actor```

# Exercício 5

a) Releia a última query. Teste-a. Explique o resultado com as suas palavras

Essa query soma o total de atores por agrupando por gênero, o total de atores do sexo masculino e o total de atrizes do sexo feminino. 

``` SELECT COUNT(*), gender FROM Actor GROUP BY gender```

b) Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética

``` SELECT id, name FROM Actor ORDER BY name DESC```

c) Faça uma query que retorne todos os atores ordenados pelo salário

``` SELECT * FROM Actor ORDER BY salary ASC```

d) Faça uma query que retorne os atores com os três maiores salarios

``` SELECT * FROM Actor ORDER BY salary DESC LIMIT 3```

e) Faça uma query que retorne a média de salário por gênero

``` SELECT AVG(salary), gender FROM Actor GROUP BY gender;```

# Exercício 6 

a) Altere a tabela de Movie e adicione um novo parâmetro: playing_limit_date que indique a data limite em que o filme será passado no cinema. 

``` ALTER TABLE Filme ADD playing_limit_date DATE; ```

b) Altere a tabela de Movie para que o parâmetro rating possa aceitar valores não inteiros, como, por exemplo, uma avaliação 8.5.

``` ALTER TABLE Filme CHANGE  avaliacao avaliacao FLOAT; ```

c) Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído

```UPDATE Filme SET playing_limit_date = "2022-04-10"  WHERE id = 001;```
```UPDATE Filme SET playing_limit_date = "2022-09-28"  WHERE id = 002;```


d) Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.

Não aparece erro ao tentar fazer o update, mas na menssagem mostra que 0 linhas foram afetadas.

```DELETE FROM Filme WHERE id = 005;```
```UPDATE Filme SET sinopse = "Deletado" WHERE id = 005;```

# Exercício 7 

a) Quantos filmes em cartaz possuem avaliações maiores do que 7.5?

``` SELECT COUNT(*) as total_filmes FROM Filme WHERE avaliacao > 7.5; ```

b) Qual a média das avaliações dos filmes?

``` SELECT AVG(avaliacao) as media_avaliacao FROM Filme;```

c) Qual a quantidade de filmes em cartaz?

``` SELECT COUNT(*) as total_filmes FROM Filme WHERE playing_limit_date > current_date(); ```

d) Qual a quantidade de filmes que ainda irão lançar?

``` ALTER TABLE Filme ADD release_date DATE; ```
```UPDATE Filme SET release_date = "2022-10-10"  WHERE id = 001;```
```UPDATE Filme SET release_date = "2022-09-28"  WHERE id = 002;```
```UPDATE Filme SET release_date = "2022-11-28", release_date = "2022-12-12"  WHERE id = 003;```
``` SELECT COUNT(*) as total_lancamentos FROM Filme WHERE release_date > current_date(); ```

e) Qual a maior nota dos filmes?

``` SELECT MAX(avaliacao) from Filme;```

f) Qual a menor nota dos filmes?

``` SELECT MIN(avaliacao) from Filme;```

# Exercício 8

a) Retorne todos os filmes em ordem alfabética

``` SELECT * FROM Filme ORDER BY name ASC```

b) Retorne os 5 primerios filmes em ordem descrente alfabética 

``` SELECT * FROM Filme ORDER BY name DESC LIMIT 5```

c) Retorne os 3 filmes mais recentes em cartaz

```SELECT * FROM Filme WHERE release_date <= current_date() ORDER BY release_date DESC;```

d) Retorne os 3 filmes melhor avalidos

``` SELECT * FROM Filme ORDER BY avaliacao DESC LIMIT 3```