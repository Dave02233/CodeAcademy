# Cos'è un Middleware in Express

Un **middleware** in Express è una funzione che ha accesso agli oggetti **richiesta** (`req`), **risposta** (`res`) e alla funzione `next` nel ciclo di richiesta-risposta di un'applicazione Express.

## Cosa può fare un middleware?

- Eseguire qualsiasi tipo di codice
- Modificare la richiesta (`req`) e la risposta (`res`)
- Terminare il ciclo di richiesta-risposta
- Passare il controllo al middleware successivo usando `next()`

## A cosa serve?

I middleware vengono utilizzati per:

- Logging delle richieste
- Autenticazione e autorizzazione
- Parsing di dati (ad esempio JSON o form)
- Gestione degli errori
- Altre operazioni ripetitive o condivise tra più route

## Esempio di middleware

```js
// Un semplice middleware che logga ogni richiesta ricevuta dal server
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Passa il controllo al prossimo middleware
});
```

## Come funziona la catena dei middleware?

Express esegue i middleware nell'ordine in cui sono stati dichiarati. Ogni middleware può:

- Terminare la richiesta inviando una risposta
- Passare il controllo al middleware successivo chiamando `next()`

Se nessun middleware termina la richiesta, Express restituirà un errore.

---