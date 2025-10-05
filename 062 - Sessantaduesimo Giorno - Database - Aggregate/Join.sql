SELECT *
FROM orders
JOIN subscriptions
  ON orders.subscription_id = subscriptions.subscription_id;

SELECT *
FROM orders
JOIN subscriptions
  ON orders.subscription_id = subscriptions.subscription_id
WHERE subscriptions.description = 'Fashion Magazine';

select count(*) 
from newspaper;
select count(*) 
from online;
select count(*)
from online
join newspaper 
on online.id = newspaper.id;