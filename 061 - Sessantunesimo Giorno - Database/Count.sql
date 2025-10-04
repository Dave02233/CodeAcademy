-- Conta il numero totale di record in una tabella
SELECT COUNT(*) AS totale_utenti FROM utenti;

-- Conta il numero di valori NON NULL in una colonna specifica
SELECT COUNT(email) AS utenti_con_email FROM utenti;

-- Conta il numero di utenti per ogni città (raggruppamento)
SELECT citta, COUNT(*) AS numero_utenti
FROM utenti
GROUP BY citta;

-- Conta il numero di ordini per ogni utente
SELECT id_utente, COUNT(*) AS numero_ordini
FROM ordini
GROUP BY id_utente;

-- Conta solo i record che soddisfano una condizione
SELECT COUNT(*) AS utenti_attivi
FROM utenti
WHERE stato = 'attivo';

-- Conta i valori distinti in una colonna
SELECT COUNT(DISTINCT citta) AS numero_citta_distinte
FROM utenti;

-- Esempio di utilizzo con HAVING per filtrare gruppi
SELECT citta, COUNT(*) AS numero_utenti
FROM utenti
GROUP BY citta
HAVING COUNT(*) > 10;