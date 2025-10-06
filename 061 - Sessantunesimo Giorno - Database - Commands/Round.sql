SELECT round(AVG(price), 2)
FROM fake_apps;

-- La funzione ROUND in SQL viene utilizzata per arrotondare un numero a un determinato numero di cifre decimali.
-- Sintassi: ROUND(numero, decimali)
-- Esempi:
-- 1. Arrotondare 123.456 a 2 decimali:
--    SELECT ROUND(123.456, 2); -- Risultato: 123.46
-- 2. Arrotondare 987.654 a 0 decimali:
--    SELECT ROUND(987.654, 0); -- Risultato: 988
-- 3. Arrotondare -45.6789 a 3 decimali:
--    SELECT ROUND(-45.6789, 3); -- Risultato: -45.679
-- Se il parametro 'decimali' non viene specificato, il valore viene arrotondato all'intero più vicino.