-- JOIN base: restituisce tutte le colonne di orders e subscriptions dove subscription_id corrisponde
SELECT *
FROM orders
JOIN subscriptions
  ON orders.subscription_id = subscriptions.subscription_id;

-- JOIN con filtro: restituisce solo gli ordini relativi a 'Fashion Magazine'
SELECT *
FROM orders
JOIN subscriptions
  ON orders.subscription_id = subscriptions.subscription_id
WHERE subscriptions.description = 'Fashion Magazine';

-- Conta tutte le righe nella tabella newspaper
SELECT COUNT(*) 
FROM newspaper;

-- Conta tutte le righe nella tabella online
SELECT COUNT(*) 
FROM online;

-- Conta le righe che hanno lo stesso id sia in online che in newspaper (INNER JOIN)
SELECT COUNT(*)
FROM online
JOIN newspaper 
  ON online.id = newspaper.id;