-- Esempio 1: Unire nomi e email da due tabelle clienti
SELECT nome, email FROM clienti_italiani
UNION
SELECT nome, email FROM clienti_stranieri;

-- Esempio 2: Unire titoli di articoli da due fonti diverse
SELECT titolo FROM newspaper
UNION
SELECT titolo FROM online;

-- Esempio 3: Unire ID e data di pubblicazione da due tabelle
SELECT id, data_pubblicazione FROM newspaper
UNION
SELECT id, data_pubblicazione FROM online;
