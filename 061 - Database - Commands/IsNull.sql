SELECT name
FROM movies 
WHERE imdb_rating IS NULL;
-- Seleziona tutti i film che NON hanno un valore per imdb_rating
SELECT name
FROM movies
WHERE imdb_rating IS NULL;

-- Seleziona tutti i film che HANNO un valore per imdb_rating
SELECT name
FROM movies
WHERE imdb_rating IS NOT NULL;

-- Conta quanti film non hanno un imdb_rating
SELECT COUNT(*)
FROM movies
WHERE imdb_rating IS NULL;

-- Esempio con COALESCE per sostituire i valori NULL
SELECT name, COALESCE(imdb_rating, 'N/A') AS rating
FROM movies;