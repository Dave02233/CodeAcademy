SELECT price, 
   ROUND(AVG(downloads)),
   COUNT(*)
FROM fake_apps
GROUP BY price
having count(*) > 10;

-- Esempio 1: Mostra i prezzi con media download superiore a 5000
SELECT price,
    ROUND(AVG(downloads)) AS avg_downloads,
    COUNT(*) AS num_apps
FROM fake_apps
GROUP BY price
HAVING AVG(downloads) > 5000;

-- Esempio 2: Mostra i prezzi con almeno 20 app e prezzo maggiore di 0
SELECT price,
    COUNT(*) AS num_apps
FROM fake_apps
GROUP BY price
HAVING COUNT(*) >= 20 AND price > 0;

-- Esempio 3: Mostra i prezzi dove il massimo dei download supera 10000
SELECT price,
    MAX(downloads) AS max_downloads
FROM fake_apps
GROUP BY price
HAVING MAX(downloads) > 10000;

-- Il comando HAVING si usa per filtrare i risultati dopo il raggruppamento (GROUP BY),
-- mentre WHERE filtra prima del raggruppamento.