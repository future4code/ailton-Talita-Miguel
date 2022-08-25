SELECT * FROM Movies;
SELECT * FROM MovieCast;
SELECT * FROM Actor;
SELECT * FROM Rating;

-- Exercício 1.B  
CREATE TABLE Rating (
id VARCHAR(255) PRIMARY KEY,
comment TEXT NOT NULL,
rate FLOAT NOT NULL,
Movies_id VARCHAR(255),
FOREIGN KEY (Movies_id) REFERENCES Movies(id)
);

-- Exercício 1.C
INSERT INTO Rating (id, comment, rate, Movies_id) VALUES 
("009", "Não gostei!", 1, "007");

-- Exercício 1.D 
ALTER TABLE Movies DROP COLUMN rating;

-- Exercício 1.E
 DELETE FROM Movies WHERE id = "001"; 
 
 -- Exercício 2.B 
 CREATE TABLE MovieCast (
 movie_id VARCHAR(255),
 actor_id VARCHAR(255),
 FOREIGN KEY (movie_id) REFERENCES Movies(id),
 FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

-- Exercício 2.C 
INSERT INTO MovieCast(movie_id, actor_id) VALUES("007", "003");

INSERT INTO Movies(id, name, synopsis, playing_limit_date, release_date) VALUES (
    "007",
    "Top Gun: Maverick",
    "Depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, Pete Maverick Mitchell está de volta, rompendo os limites como um piloto de testes corajoso",
    "2022-09-25",
    "2022-08-25"
);

-- Exercício 2.D 
DELETE FROM Actor WHERE id = "003"; 

-- Exercício 3.B 
SELECT Movies.id, name, rate FROM Movies
JOIN Rating
ON Movies.id = Rating.Movies_id 
WHERE Rating.rate IS NOT NULL;

-- Exercício 4.A 
SELECT Movies.id, name, rate, comment FROM Movies
LEFT JOIN Rating
ON Movies.id = Rating.Movies_id;

-- Exercício 4.B 
SELECT Movies.id, Movies.name, actor_id, Actor.name FROM Movies
JOIN MovieCast as mc
ON Movies.id = mc.movie_id
JOIN Actor
ON Actor.id = mc.actor_id;

-- Exercício 4.C 
SELECT Movies.name, AVG(rate) AS AverageRate FROM Movies
JOIN Rating
ON Movies.id = Rating.Movies_id
GROUP BY Movies.name;

-- Exercício 5.D 
SELECT Movies.id, Movies.name, actor_id, Actor.name, rate, comment FROM Movies
JOIN MovieCast as mc
ON Movies.id = mc.movie_id
JOIN Actor
ON Actor.id = mc.actor_id
JOIN Rating
ON Movies.id = Rating.Movies_id;





