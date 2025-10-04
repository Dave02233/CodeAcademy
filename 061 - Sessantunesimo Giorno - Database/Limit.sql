-- Seleziona i primi 5 record dalla tabella utenti
SELECT * FROM utenti
LIMIT 5;

-- Seleziona 10 record a partire dal sesto (offset 5)
SELECT * FROM utenti
LIMIT 10 OFFSET 5;

-- Seleziona i primi 3 prodotti più costosi
SELECT * FROM prodotti
ORDER BY prezzo DESC
LIMIT 3;

-- Seleziona i primi 2 clienti in ordine alfabetico
SELECT * FROM clienti
ORDER BY nome ASC
LIMIT 2;