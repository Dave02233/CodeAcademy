CREATE POLICY policy ON accounts FOR DELETE TO sales USING (salesperson = current_user);

ALTER TABLE accounts ENABLE ROW LEVEL SECURITY;

SET ROLE alice;

DELETE FROM accounts 
WHERE contract_amt < 10000;

SELECT * FROM accounts;
