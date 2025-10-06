-- Esempio base di utilizzo di WHERE in SQL

-- Seleziona tutti i record dalla tabella utenti dove l'età è maggiore di 18
SELECT * FROM utenti
WHERE eta > 18;

-- Seleziona tutti i prodotti con prezzo inferiore a 50
SELECT * FROM prodotti
WHERE prezzo < 50;

-- Seleziona tutti gli ordini effettuati da un cliente specifico
SELECT * FROM ordini
WHERE cliente_id = 123;

-- Seleziona tutti i libri pubblicati dopo il 2020
SELECT * FROM libri
WHERE anno_pubblicazione > 2020;

-- Seleziona tutti i dipendenti che lavorano nel reparto 'Vendite'
SELECT * FROM dipendenti
WHERE reparto = 'Vendite';