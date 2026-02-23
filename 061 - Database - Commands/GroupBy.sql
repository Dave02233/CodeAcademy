select category, price, avg(downloads)
from fake_apps
group by 1, 2;
-- Il GROUP BY viene utilizzato per raggruppare i risultati in base a uno o più campi.
-- Ad esempio, nel codice sopra, i dati vengono raggruppati per categoria e prezzo.
-- Questo permette di calcolare, per ogni combinazione di categoria e prezzo, la media dei download.

-- Esempio applicativo:
-- Supponiamo di avere una tabella "vendite" con colonne: prodotto, anno, quantità.
-- Per sapere la quantità totale venduta per ogni prodotto in ogni anno:
SELECT prodotto, anno, SUM(quantità)
FROM vendite
GROUP BY prodotto, anno;
