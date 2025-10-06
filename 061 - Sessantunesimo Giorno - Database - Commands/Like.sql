SELECT * 
FROM movies
WHERE name LIKE 'Se_en';

-- Trova tutti i film che iniziano con 'Se' e finiscono con 'en', con un solo carattere qualsiasi al posto dell'underscore
-- Esempio: 'Seven', 'Sezen', ecc.

-- Trova tutti i film che iniziano con 'Star'
SELECT * 
FROM movies
WHERE name LIKE 'Star%';

-- Trova tutti i film che finiscono con 'Wars'
SELECT * 
FROM movies
WHERE name LIKE '%Wars';

-- Trova tutti i film che contengono la parola 'Love'
SELECT * 
FROM movies
WHERE name LIKE '%Love%';

-- Trova tutti i film che hanno una lettera qualsiasi tra 'B' e 'tman' (es: 'Batman', 'Btman')
SELECT * 
FROM movies
WHERE name LIKE 'B_tman';

-- Il simbolo % sostituisce qualsiasi sequenza di caratteri, _ sostituisce un solo carattere.