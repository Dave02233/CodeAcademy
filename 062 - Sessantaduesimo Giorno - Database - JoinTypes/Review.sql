-- 1. Media, conteggio e ora dei post, ordinati per media punteggio decrescente
SELECT 
    strftime('%H', timestamp) AS hour,
    ROUND(AVG(score), 2) AS avg_score,
    COUNT(*) AS count
FROM hacker_news
WHERE timestamp IS NOT NULL
GROUP BY hour
ORDER BY avg_score DESC
LIMIT 5;

-- 2. Conteggio delle fonti principali
SELECT 
    CASE 
        WHEN url LIKE '%github.com%' THEN 'GitHub'
        WHEN url LIKE '%medium.com%' THEN 'Medium'
        WHEN url LIKE '%nytimes.com%' THEN 'New York Times'
        ELSE 'Other'
    END AS Source,
    COUNT(url) AS count
FROM hacker_news
GROUP BY Source;

-- 3. Conteggio dei post con uno specifico URL (YouTube Rickroll)
SELECT COUNT(url) AS count
FROM hacker_news
WHERE url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

-- 4. Percentuale dei punteggi totali ottenuti dagli utenti top (>200 punti)
SELECT ROUND(
    (
        SELECT SUM(score)
        FROM hacker_news
        WHERE user IN (
            SELECT user
            FROM hacker_news
            GROUP BY user
            HAVING SUM(score) > 200
        )
    ) * 1.0 / (SELECT SUM(score) FROM hacker_news)
, 2) AS percTopUsers;

-- 5. Utenti con più di 200 punti, ordinati per punteggio decrescente
SELECT 
    user, 
    SUM(score) AS total_score
FROM hacker_news
GROUP BY user
HAVING SUM(score) > 200
ORDER BY total_score DESC;

-- 6. Somma totale dei punteggi
SELECT SUM(score) AS total_score
FROM hacker_news;

-- 7. I 5 post con punteggio più alto
SELECT 
    title, 
    score
FROM hacker_news
ORDER BY score DESC
LIMIT 5;
