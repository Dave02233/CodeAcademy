select current_user;

select * from pg_catalog.pg_roles;

set role analyst;

SELECT grantee, table_name, privilege_type
FROM information_schema.table_privileges 
WHERE grantee = 'analyst';

SELECT * from event_log where id = 1;