
GRANT USAGE, CREATE ON SCHEMA marketing TO analyst;

GRANT SELECT, INSERT, DELETE ON marketing.prospects TO analyst;

REVOKE DELETE ON marketing.prospects FROM analyst;

SET ROLE analyst;

DELETE FROM marketing.prospects WHERE id = 2;
