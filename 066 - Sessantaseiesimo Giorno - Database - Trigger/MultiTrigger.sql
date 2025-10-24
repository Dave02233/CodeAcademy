CREATE TRIGGER update_zeta
BEFORE UPDATE ON orders
FOR EACH ROW
EXECUTE PROCEDURE update_first();

CREATE TRIGGER update_bravo
BEFORE UPDATE ON orders
FOR EACH ROW
EXECUTE PROCEDURE update_second();

SELECT * FROM orders
ORDER BY order_id;

UPDATE orders
SET quantity = 5
WHERE order_id = 1234;

SELECT * FROM orders
ORDER BY order_id;


-- Vengono eseguite in ordine alfabetico --