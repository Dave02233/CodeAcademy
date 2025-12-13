SELECT pg_size_pretty(
  pg_table_size('mock.house_prices')
);

SELECT pg_size_pretty(
  pg_indexes_size('mock.house_prices')
);

SELECT pg_size_pretty(
  pg_total_relation_size('mock.house_prices_pk')
);

SELECT pg_size_pretty(
  pg_total_relation_size('mock.house_prices')
);
