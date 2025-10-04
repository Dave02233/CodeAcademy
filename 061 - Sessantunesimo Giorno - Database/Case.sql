-- Esempio 1: CASE in una SELECT per classificare l'età
SELECT nome, eta,
    CASE
        WHEN eta < 18 THEN 'Minorenne'
        WHEN eta BETWEEN 18 AND 65 THEN 'Adulto'
        ELSE 'Anziano'
    END AS categoria_eta
FROM persone;

-- Esempio 2: CASE per gestire valori NULL
SELECT nome,
    CASE
        WHEN email IS NULL THEN 'Email mancante'
        ELSE email
    END AS stato_email
FROM utenti;

-- Esempio 3: CASE in un UPDATE per aggiornare valori condizionalmente
UPDATE ordini
SET stato =
    CASE
        WHEN data_consegna < GETDATE() THEN 'Consegnato'
        ELSE 'In attesa'
    END;

-- Esempio 4: CASE semplice (valore confrontato direttamente)
SELECT giorno_settimana,
    CASE giorno_settimana
        WHEN 'Sabato' THEN 'Weekend'
        WHEN 'Domenica' THEN 'Weekend'
        ELSE 'Feriale'
    END AS tipo_giorno
FROM calendario;

-- Il CASE permette di eseguire logica condizionale direttamente nelle query SQL.