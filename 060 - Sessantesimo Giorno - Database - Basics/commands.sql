CREATE TABLE celebs (
   id INTEGER, 
   name TEXT, 
   age INTEGER
);

CREATE TABLE celebs (
   -- id: Identificatore univoco per ogni record (chiave primaria).
   id INTEGER PRIMARY KEY, 
   -- name: Nome univoco, non può essere duplicato nella tabella.
   name TEXT UNIQUE,
   -- date_of_birth: Data di nascita, campo obbligatorio.
   date_of_birth TEXT NOT NULL,
   -- date_of_death: Data di morte, valore predefinito 'Not Applicable' se non specificato.
   date_of_death TEXT DEFAULT 'Not Applicable'
);

ALTER TABLE celebs 
ADD COLUMN twitter_handle TEXT;


SELECT * FROM celebs;

SELECT name FROM celebs;


INSERT INTO celebs (id, name, age) 
VALUES (1, 'Justin Bieber', 29);

 
UPDATE celebs 
SET twitter_handle = '@taylorswift13' 
WHERE id = 4; 


DELETE FROM celebs 
WHERE id = 1;

DELETE FROM celebs
WHERE property IS NULL;
