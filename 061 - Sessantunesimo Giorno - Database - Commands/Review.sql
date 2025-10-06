/*SELECT *
FROM nomnom;

select distinct neighborhood from nomnom;

select distinct cuisine from nomnom;

select * from nomnom where cuisine = 'Chinese'

select * from nomnom where review > 4;

select * from nomnom 
where cuisine = 'Italian' and price = '$$$'; 

select * from nomnom where name like '% meatball %'

select * from nomnom 
where neighborhood = 'Midtown' 
OR neighborhood = 'Downtorn'
or neighborhood = 'Chinatown';

select * from nomnom 
where health is not null;

select * from nomnom order by review DESC limit 10;

*/

SELECT name,
 CASE
  WHEN review > 4.5 THEN 'Extraordinary'
  WHEN review > 4 THEN 'Excellent'
  WHEN review > 3 THEN 'Good'
  WHEN review > 2 THEN 'Fair'
  ELSE 'Poor'
 END AS 'Review'
FROM nomnom;
















