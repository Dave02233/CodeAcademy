SELECT * FROM customers
ORDER BY customer_id;

SELECT * FROM customers_log;

CREATE TRIGGER customers_update
BEFORE UPDATE ON customers
FOR EACH ROW
WHEN ( 
NEW.first_name <> OLD.first_name OR NEW.last_name <> OLD.last_name
)
EXECUTE PROCEDURE log_customers_change();

CREATE TRIGGER customers_insert
AFTER INSERT ON customers
FOR EACH STATEMENT
EXECUTE PROCEDURE log_customers_change();

CREATE TRIGGER customer_min_age
BEFORE INSERT ON customers
FOR EACH ROW
WHEN (NEW.years_old < 13)
EXECUTE PROCEDURE override_with_min_age();

UPDATE customers
SET first_name = 'Davide'
WHERE customer_id = 1;

INSERT INTO customers (first_name, last_name, email_address, home_phone, city, state_name, years_old)
VALUES ('Jeffery', 'Cook', 'Jeffery.Cook@gmail.com', '202-911-555', 'Jersery City', 'New Jersey', 66),
('Paperino', 'Paperopoli', 'orcamado@oioo.it', '911-199', 'Paperinopoli City', 'Cesano Maderno', 10),
('Pippo', 'Coca', 'PippoCoca@gmail.com', '118-811', 'PippoVille', 'Cesano Boscone', 28);

UPDATE customers
SET years_old = 9,
    first_name = 'Dennis'
WHERE last_name = 'Coca';

DROP TRIGGER customer_min_age on customers;

SELECT * FROM information_schema.triggers;

SELECT * FROM customers
ORDER BY customer_id;

SELECT * FROM customers_log;

