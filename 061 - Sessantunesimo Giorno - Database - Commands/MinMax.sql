select max(price) from fake_apps order by price desc limit 1

-- Trova il prezzo minimo nella tabella fake_apps
select min(price) from fake_apps;

-- Trova il prezzo massimo nella tabella fake_apps
select max(price) from fake_apps;

-- MIN restituisce il valore più basso di una colonna numerica
-- MAX restituisce il valore più alto di una colonna numerica