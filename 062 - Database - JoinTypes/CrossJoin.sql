-- 1. Generare tutte le possibili combinazioni tra prodotti e colori disponibili
SELECT product.name, color.name
FROM product
CROSS JOIN color;
-- Utile per vedere tutte le varianti di prodotto-colori che si potrebbero offrire.

-- 2. Creare un calendario delle attività per ogni giorno del mese
SELECT activity.name, calendar.day
FROM activity
CROSS JOIN calendar
WHERE calendar.month = 6;
-- Serve per pianificare ogni attività in ogni giorno del mese.

-- 3. Calcolare tutte le possibili combinazioni di studenti e corsi
SELECT student.id, course.id
FROM student
CROSS JOIN course;
-- Utile per analisi di iscrizioni potenziali o simulazioni.

-- 4. Simulare tutte le combinazioni di parametri per test automatici
SELECT test_case.id, parameter.value
FROM test_case
CROSS JOIN parameter;
-- Aiuta a generare casi di test esaustivi.