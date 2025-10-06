-- Questa query SQL seleziona in modo univoco i valori presenti nella colonna "column_name" della tabella "table_name".
-- Utilizzando la clausola DISTINCT, vengono restituiti solo i valori diversi, eliminando i duplicati.
-- Esempio:
-- Se la tabella contiene i valori [A, B, A, C], la query restituirà [A, B, C].
SELECT DISTINCT column_name
FROM table_name;