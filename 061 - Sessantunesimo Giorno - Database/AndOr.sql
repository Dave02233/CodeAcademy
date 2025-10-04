-- Seleziona tutti gli utenti che sono maggiorenni E residenti in Italia
SELECT *
FROM utenti
WHERE eta >= 18 AND paese = 'Italia';

-- Seleziona tutti i prodotti che costano meno di 10 euro O sono esauriti
SELECT *
FROM prodotti
WHERE prezzo < 10 OR disponibilita = 0;

-- Seleziona gli ordini effettuati da un cliente specifico E pagati
SELECT *
FROM ordini
WHERE cliente_id = 123 AND stato_pagamento = 'Pagato';

-- Seleziona i libri pubblicati dopo il 2020 O scritti da 'Rossi'
SELECT *
FROM libri
WHERE anno_pubblicazione > 2020 OR autore = 'Rossi';

-- Esempio combinato con parentesi per la precedenza
-- Seleziona utenti che sono maggiorenni E (residenti in Italia O Francia)
SELECT *
FROM utenti
WHERE eta >= 18 AND (paese = 'Italia' OR paese = 'Francia');