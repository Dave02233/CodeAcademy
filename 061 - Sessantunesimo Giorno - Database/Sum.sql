select sum(downloads) from fake_apps;
-- Somma totale dei download per ogni categoria di app
select category, sum(downloads) as total_downloads
from fake_apps
group by category;

-- Somma dei download solo per le app gratuite
select sum(downloads) as free_app_downloads
from fake_apps
where price = 0;

-- Somma dei download per ogni sviluppatore
select developer, sum(downloads) as total_downloads
from fake_apps
group by developer;