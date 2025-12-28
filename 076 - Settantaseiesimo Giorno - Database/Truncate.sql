-- 1
TRUNCATE mock.current_day_logins;

-- 2 
SELECT 
    pg_size_pretty(pg_table_size('mock.current_day_logins')) as tbl_size, 
    pg_size_pretty(pg_indexes_size('mock.current_day_logins')) as idx_size,
    pg_size_pretty(pg_total_relation_size('mock.current_day_logins')) as total_size;
