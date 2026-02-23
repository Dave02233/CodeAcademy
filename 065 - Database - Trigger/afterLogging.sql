SELECT * FROM customers
ORDER BY customer_id ASC;

CREATE TRIGGER after_trigger
AFTER UPDATE ON customers
FOR EACH ROW
EXECUTE PROCEDURE log_customers_change();

UPDATE customers 
SET years_old = years_old + 10
WHERE customer_id = 1;

SELECT * FROM customers
ORDER BY customer_id ASC;

SELECT * FROM customers_log;