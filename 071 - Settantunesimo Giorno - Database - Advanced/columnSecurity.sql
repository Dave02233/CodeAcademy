-- 1
GRANT SELECT ON projects to manager;

-- 2
GRANT UPDATE (project_name, project_status) 
ON projects to manager;

-- 3
select * 
from information_schema.column_privileges
where grantee = 'manager';