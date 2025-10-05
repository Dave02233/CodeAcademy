-- Esempio 1: CTE per calcolare il totale ordini per cliente
WITH ordini_per_cliente AS (
    SELECT customer_id, COUNT(order_id) AS totale_ordini
    FROM orders
    GROUP BY customer_id
)
SELECT customers.customer_name, ordini_per_cliente.totale_ordini
FROM customers
JOIN ordini_per_cliente ON customers.customer_id = ordini_per_cliente.customer_id;
-- Questo esempio usa la CTE per calcolare il numero di ordini per ogni cliente e poi mostra il nome del cliente con il totale ordini.

-- Esempio 2: CTE per filtrare risultati intermedi
WITH prodotti_costosi AS (
    SELECT product_id, product_name, price
    FROM products
    WHERE price > 100
)
SELECT * FROM prodotti_costosi;
-- Qui la CTE seleziona solo i prodotti con prezzo superiore a 100, rendendo la query principale più leggibile.

-- Esempio 3: CTE ricorsiva per esplorare una gerarchia (ad esempio, categorie e sottocategorie)
WITH RECURSIVE categorie_padre_figlio AS (
    SELECT category_id, parent_id, category_name
    FROM categories
    WHERE parent_id IS NULL
    UNION ALL
    SELECT c.category_id, c.parent_id, c.category_name
    FROM categories c
    INNER JOIN categorie_padre_figlio cpf ON c.parent_id = cpf.category_id
)
SELECT * FROM categorie_padre_figlio;
-- Questo esempio mostra come usare una CTE ricorsiva per esplorare una struttura ad albero.