SELECT * FROM customers;

CREATE TRIGGER each_statement_trigger 
AFTER UPDATE ON customers
FOR EACH STATEMENT 
EXECUTE PROCEDURE statement_function();

UPDATE customers
SET years_old = years_old + 1;

SELECT * FROM customers;
