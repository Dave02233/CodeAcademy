-- 1
UPDATE mock.stock_prices
SET price_sh = price_sh + 10.00
WHERE trading_date > '2020-01-01'::date;

-- 2
VACUUM mock.stock_prices;

-- 3
SELECT pg_size_pretty(
    pg_total_relation_size('mock.stock_prices')
) as total_size;


-- 1
analyze mock.orders;

-- 2
SELECT schemaname, relname, 
    last_vacuum,
    last_autovacuum, 
    last_analyze
FROM pg_stat_all_tables
WHERE relname = 'orders';

-- 1
DELETE FROM mock.stock_prices 
WHERE day_id IN (5, 6);

-- 2
SELECT pg_size_pretty(
    pg_total_relation_size('mock.stock_prices')
) as total_size;

-- 3
analyze mock.stock_prices; 

-- 4 
SELECT relname, n_dead_tup, n_live_tup
FROM pg_stat_all_tables 
WHERE relname = 'stock_prices';

-- 1
select relname, n_live_tup, n_dead_tup , last_vacuum
from pg_catalog.pg_stat_all_tables
where relname = 'orders';

-- 2
VACUUM FULL mock.orders;

-- 3
SELECT pg_size_pretty(
    pg_total_relation_size('mock.orders')
) as total_size; 
