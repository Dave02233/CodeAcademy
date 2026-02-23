select * from newspaper
left join online 
on newspaper.id = online.id;

select * from newspaper
left join online 
on newspaper.id = online.id
where online.id is null;

-- Esempio 1: LEFT JOIN per mostrare tutte le righe di newspaper e i dati corrispondenti (se esistono) da online
select newspaper.id, newspaper.title, online.url
from newspaper
left join online 
on newspaper.id = online.id;

-- Esempio 2: LEFT JOIN per trovare i giornali che non hanno una versione online
select newspaper.id, newspaper.title
from newspaper
left join online 
on newspaper.id = online.id
where online.id is null;

-- Esempio 3: LEFT JOIN con più condizioni
select newspaper.id, newspaper.title, online.url
from newspaper
left join online 
on newspaper.id = online.id and online.active = 1;

-- 
-- Commenti:
-- Il LEFT JOIN restituisce tutte le righe della tabella di sinistra (newspaper) e i dati corrispondenti dalla tabella di destra (online).
-- Se non ci sono corrispondenze nella tabella di destra, i valori saranno NULL.
-- È utile per trovare elementi "orfani" (ad esempio giornali senza versione online) o per unire dati opzionali.