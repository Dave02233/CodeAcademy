GRANT SELECT, DELETE, UPDATE, INSERT ON census.economic_survey TO writer;

ALTER DEFAULT PRIVILEGES IN SCHEMA census
GRANT SELECT, DELETE, UPDATE, INSERT ON TABLES TO writer;

CREATE TABLE census.housing_survey (
    area_id int primary key, 
    median_rent int
);

SELECT
    grantee, 
    table_schema,
    table_name,
    privilege_type
FROM information_schema.table_privileges 
WHERE table_schema  = 'census'
AND grantee = 'writer';
