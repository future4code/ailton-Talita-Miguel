CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
    );
    
    SHOW DATABASES;
    SHOW TABLES;
    DESCRIBE Actor;
    
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

INSERT INTO Actor (id, name, salary,birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Lima Duarte",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

SELECT * FROM Actor;
SELECT id, salary from Actor;
SELECT id, name from Actor WHERE gender = "male";
SELECT * from Actor WHERE gender = "female";
SELECT salary from Actor WHERE name = "Tony Ramos";
SELECT * from Actor WHERE gender = "invalid";
SELECT id, name, salary from Actor WHERE salary < 500000;
SELECT id, name from Actor WHERE id = "002";

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;

SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

CREATE TABLE Filme (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR (255) NOT NULL,
  sinopse TEXT NOT NULL,
  data_de_lancamento DATE NOT NULL,
  avaliacao INT NOT NULL
);

INSERT INTO Filme (id, name, sinopse, data_de_lancamento, avaliacao)
VALUES(
  "001",
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006/01/06",
  7
);

INSERT INTO Filme (id, name, sinopse, data_de_lancamento, avaliacao)
VALUES(
  "002",
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012/12/27",
  10
);

INSERT INTO Filme (id, name, sinopse, data_de_lancamento, avaliacao)
VALUES(
  "003",
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017/11/02",
  8
);

INSERT INTO Filme (id, name, sinopse, data_de_lancamento, avaliacao)
VALUES(
  "004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);

SELECT id, name, avaliacao from Filme WHERE id = 001;
SELECT * from Filme WHERE name = "Deus é Brasileiro";
SELECT id, name, sinopse from Filme WHERE avaliacao >= 7;

SELECT * FROM Filme WHERE name LIKE "%Deus%";

SELECT * FROM Filme
WHERE name LIKE "%Deus%" OR sinopse LIKE "%professora%";

SELECT * FROM Filme
WHERE data_de_lancamento < CURDATE();

SELECT * FROM Filme
WHERE data_de_lancamento < CURDATE() AND 
(name LIKE "%Deus%" OR
sinopse LIKE "%Deus%") AND avaliacao > 7;







