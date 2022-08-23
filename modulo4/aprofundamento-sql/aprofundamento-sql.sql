SET SQL_SAFE_UPDATES = 0;

SELECT * FROM Actor;
SELECT * FROM Filme;

-- Exercício 1.d
ALTER TABLE Actor CHANGE sex gender VARCHAR(100);

-- Exercício 2.a
UPDATE Actor SET name = "Moacyr Franco", birth_date = "2020-02-10" WHERE id = 003;

-- Exercício 2.b
UPDATE Actor SET name = "JULIANA PAES" WHERE id = 005;
UPDATE Actor SET name = "Juliana Paes" WHERE id = 005;

-- Exercício 2.c 
UPDATE Actor SET name = "Maria Fernanda Cândido", salary = 133000, birth_date = "1974-05-21", gender = "female"  WHERE id = 005;

-- Exercício 2.d 
UPDATE Actor SET name = "Juliana Paes" WHERE id = 008;

-- Exercício 3.a 
-- INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES("006", "Fernanda Montenegro", 1200000, "1963-08-23", "female");
DELETE FROM Actor WHERE name = "Fernanda Montenegro";

-- Exercício 3.b
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

-- Exercício 4.a 
SELECT MAX(salary) from Actor;

-- Exercício 4.b 
SELECT MAX(salary) from Actor WHERE gender = "female";

-- Exercício 4.c 
SELECT count(*) as total_atrizes from Actor WHERE gender = "female";

-- Exercício 4.d 
SELECT SUM(salary) as total_salary from Actor;

-- Exercício 5.a 
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

-- Exercício 5.b 
SELECT id, name FROM Actor ORDER BY name DESC;

-- Exercício 5.c
SELECT * FROM Actor ORDER BY salary ASC;

-- Exercício 5.d
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

-- Exercício 5.e 
SELECT AVG(salary), gender FROM Actor GROUP BY gender;

-- Exercício 6.a 
ALTER TABLE Filme ADD playing_limit_date DATE;

-- Exercício 6.b 
ALTER TABLE Filme CHANGE  avaliacao avaliacao FLOAT;

-- Exercício 6.c 
UPDATE Filme SET playing_limit_date = "2022-04-10"  WHERE id = 001;
UPDATE Filme SET playing_limit_date = "2022-09-28"  WHERE id = 002;

-- Exercício 6.d 
DELETE FROM Filme WHERE id = "004";
UPDATE Filme SET sinopse = "Deletado" WHERE id = "004";

-- Exercício 7.a
SELECT COUNT(*) as total_filmes FROM Filme WHERE avaliacao > 7.5;

-- Exercício 7.b 
SELECT AVG(avaliacao) as media_avaliacao FROM Filme;

-- Exercício 7.c
SELECT COUNT(*) as total_filmes FROM Filme WHERE playing_limit_date > current_date();

-- Exercício 7.d 
ALTER TABLE Filme ADD release_date DATE;
UPDATE Filme SET release_date = "2022-10-10"  WHERE id = "001";
UPDATE Filme SET release_date = "2022-09-28"  WHERE id = "002";
SELECT COUNT(*) as total_lancamentos FROM Filme WHERE release_date > current_date();

-- Exercício 7.e 
SELECT MAX(avaliacao) from Filme;

-- Exercício 7.f 
SELECT MIN(avaliacao) from Filme;

-- Exercício 8.a 
SELECT * FROM Filme ORDER BY name ASC;

-- Exercício 8.b 
SELECT * FROM Filme ORDER BY name DESC LIMIT 5;

-- Exercício 8.c
SELECT * FROM Filme WHERE release_date <= current_date() ORDER BY release_date DESC;

-- Exercício 8.d 
SELECT * FROM Filme ORDER BY avaliacao DESC LIMIT 3;

