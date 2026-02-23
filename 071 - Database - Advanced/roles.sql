CREATE ROLE analyst WITH LOGIN;

CREATE ROLE analyst_mgmt WITH LOGIN CREATEROLE;

ALTER ROLE analyst_mgmt WITH CREATEDB;

SET ROLE analyst_mgmt;

CREATE ROLE wilson WITH LOGIN;

SELECT * FROM pg_catalog.pg_roles
ORDER BY rolname;