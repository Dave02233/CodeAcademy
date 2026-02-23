CREATE TRIGGER update_trigger_high
BEFORE UPDATE ON clients
FOR EACH ROW
WHEN (NEW.total_spent >= 1000)
EXECUTE PROCEDURE set_high_spender();

CREATE TRIGGER update_trigger_low
BEFORE UPDATE ON clients
FOR EACH ROW
WHEN (NEW.total_spent < 1000)
EXECUTE PROCEDURE set_low_spender();

SELECT * FROM clients
ORDER BY client_id;

UPDATE clients
SET total_spent = 5000
WHERE last_name = 'Campbell';

UPDATE clients
SET total_spent = 100
WHERE last_name = 'Lewis';

SELECT * FROM clients 
ORDER BY client_id;