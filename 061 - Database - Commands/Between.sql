-- Esempio 1: BETWEEN su valori di testo (nomi dei film che iniziano tra 'D' e 'G')
SELECT *
FROM movies
WHERE name BETWEEN 'D' AND 'G';

-- Esempio 2: BETWEEN su valori numerici (film usciti tra il 1970 e il 1979)
SELECT *
FROM movies
WHERE year BETWEEN 1970 AND 1979;

-- Esempio 3: BETWEEN su date (film usciti tra il 1 gennaio 2000 e il 31 dicembre 2010)
SELECT *
FROM movies
WHERE release_date BETWEEN '2000-01-01' AND '2010-12-31';

-- BETWEEN include i valori estremi (sia il valore iniziale che quello finale sono inclusi)