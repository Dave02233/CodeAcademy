select avg(price) from fake_apps;

-- Calcola la media dei prezzi delle app gratuite (price = 0)
select avg(price) as avg_free_price from fake_apps where price = 0;

-- Calcola la media dei prezzi delle app a pagamento (price > 0)
select avg(price) as avg_paid_price from fake_apps where price > 0;

-- Calcola la media dei voti (rating) delle app
select avg(rating) as avg_rating from fake_apps;

-- Calcola la media dei prezzi raggruppati per categoria
select category, avg(price) as avg_price_per_category
from fake_apps
group by category;

-- Calcola la media dei prezzi arrotondata a due decimali
select round(avg(price), 2) as avg_price_rounded from fake_apps;