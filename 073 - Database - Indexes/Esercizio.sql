SELECT NOW();

\COPY orders FROM 'orders_add.txt' DELIMITER ',' CSV HEADER;

SELECT NOW();

CREATE INDEX orders_customer_id ON orders(customer_id);
CREATE INDEX orders_book_id ON orders(book_id);

EXPLAIN ANALYZE
SELECT original_language, title, sales_in_millions
FROM books
WHERE original_language = 'French';

CREATE INDEX books_original_language ON books(original_language);

EXPLAIN ANALYZE
SELECT original_language, title, sales_in_millions
FROM books
WHERE original_language = 'French';

DROP INDEX books_original_language;

SELECT NOW();

\COPY orders FROM 'orders_add.txt' DELIMITER ',' CSV HEADER;

SELECT NOW();


SELECT pg_size_pretty (pg_total_relation_size('books'));

SELECT *
FROM pg_Indexes
WHERE tablename IN ('customers', 'orders', 'books');

SELECT * 
FROM customers
LIMIT 10;

SELECT * 
FROM orders
LIMIT 10;

SELECT * 
FROM books
LIMIT 10;

