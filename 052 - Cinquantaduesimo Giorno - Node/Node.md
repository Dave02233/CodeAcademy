# Cos'è Node.js

**Node.js** è un runtime open source, multipiattaforma, orientato agli eventi, che consente di eseguire codice JavaScript al di fuori di un browser. È costruito sul motore JavaScript V8 di Google Chrome, lo stesso motore che interpreta JavaScript all'interno del browser Chrome.

## Caratteristiche principali

- **Esecuzione lato server**: Con Node.js, JavaScript non è più limitato al solo ambiente client (browser), ma può essere eseguito sul server per generare contenuti dinamici o gestire logiche di backend.
- **Event-driven e asincrono**: Node.js adotta un'architettura basata su eventi e operazioni di input/output non bloccanti, che lo rende adatto per applicazioni con molte operazioni di I/O, come applicazioni in tempo reale o servizi di rete scalabili.
- **Single-threaded con event loop**: Sebbene Node.js utilizzi un singolo thread per l'esecuzione del codice, gestisce le richieste concorrenti con un ciclo di eventi che mette in coda e gestisce operazioni asincrone in modo efficiente.
- **Ecosistema vasto**: Node.js dispone di un ampio ecosistema di pacchetti e librerie open source disponibili tramite il gestore di pacchetti npm, facilitando lo sviluppo di molte tipologie di applicazioni.

## Perché usare Node.js?

- Permette di scrivere sia frontend che backend in **JavaScript**, unificando lo sviluppo web sotto un unico linguaggio.
- Ideale per applicazioni in tempo reale, come chat, giochi online e dashboard che richiedono aggiornamenti continui.
- Scalabile e performante grazie alle sue caratteristiche asincrone e non bloccanti.
- Multi-piattaforma: funziona su sistemi operativi Windows, macOS e Linux.

# Il Modulo Events e EventEmitter in Node.js

Node.js è spesso descritto come basato su un'architettura **event-driven** (guidata dagli eventi). Questo significa che il codice risponde ad eventi che si verificano in momenti imprevisti, invece di eseguire semplicemente una sequenza di istruzioni lineari.

## Cos'è un EventEmitter?

Node.js mette a disposizione la classe `EventEmitter`, inclusa nel modulo core chiamato `events`, che permette di:

- **Definire eventi personalizzati**
- **Assegnare funzioni listener** a quegli eventi
- **Emettere (triggerare) eventi**, facendo eseguire ai listener le rispettive callback.

### Come si usa?

1. Importare il modulo `events` e creare un'istanza di `EventEmitter`:

const events = require('events');
const myEmitter = new events.EventEmitter();



2. Registrare un listener per un evento specifico con il metodo `.on()`. Il primo argomento è il nome dell'evento (stringa), il secondo è la funzione callback chiamata quando l'evento viene emesso:

myEmitter.on('newUser', (data) => {
console.log(Nuovo utente registrato: ${data});
});



3. Emettere un evento con `.emit()`. Il primo argomento è il nome dell'evento, seguito da eventuali dati da passare alla callback:

myEmitter.emit('newUser', 'Mario Rossi');
// Stampa: Nuovo utente registrato: Mario Rossi



## Caratteristiche importanti

- Gli eventi possono passare dati ai listener come argomenti.
- Si possono aggiungere più listener allo stesso evento.
- Sono disponibili metodi come `.once()` per listener che si attivano solo una volta, o `.removeListener()` per rimuovere listener.

---

Questo meccanismo è il cuore dell’architettura asincrona e non bloccante di Node.js, permettendo di gestire operazioni come input utente, richieste di rete e altro in modo efficiente senza aspettare la conclusione di ogni operazione.

# Input/Output (I/O) in Node.js

- **Output** è qualsiasi dato mostrato dal computer (es. `console.log()` stampa sul terminale).
- Internamente, `console.log()` usa `process.stdout.write()`, che scrive sull'output standard.
- `console.log()` aggiunge automaticamente un ritorno a capo (`\n`), `process.stdout.write()` no.

```js
process.stdout.write("Ciao");
process.stdout.write("Mondo\n");
// Stampa: CiaoMondo

console.log("Ciao");
console.log("Mondo");
// Stampa:
// Ciao
// Mondo
```
Per input da terminale, si usa process.stdin che è un EventEmitter:

```js
process.stdin.on('data', (input) => {
  console.log(`Hai inserito: ${input.toString()}`);
});
```
Quando l’utente preme Invio, viene emesso un evento data e il dato (buffer) viene convertito in stringa.

Questo modello permette di gestire input e output in modo asincrono e reattivo nel terminale con Node.js.

# Gestione degli Errori in Node.js

## Errori standard

Node.js include tutti gli errori JavaScript standard come:

- `EvalError`
- `SyntaxError`
- `RangeError`
- `ReferenceError`
- `TypeError`
- `URIError`

e la classe base `Error` per creare nuovi errori.

Il modulo degli errori è globale, quindi non serve importarlo con `require()`.

## Generare e gestire errori

Nel codice si possono generare errori con `throw` e gestirli sincronicamente con `try...catch`:
```js
try {
throw new Error("Errore personalizzato");
} catch (err) {
console.error("Errore catturato:", err.message);
}
```

## Callback con gestione errori (error-first)

Molte API asincrone usano callback in cui il primo argomento è l'errore (o `undefined` se non c'è) e il secondo è il dato:
```js
const errorFirstCallback = (err, data) => {
if (err) {
console.log(Si è verificato un errore: ${err});
} else {
console.log(Nessun errore. Dati: ${data});
}
}
```

- Se l'operazione genera un errore, viene passato come primo argomento.
- Se non ci sono errori, il primo argomento è `undefined`.

---

Questi meccanismi permettono di gestire errori sia in modo sincrono che asincrono in Node.js, mantenendo stabile e prevedibile l'esecuzione delle applicazioni.

# Il modulo Buffer in Node.js

Il modulo **Buffer** è globale in Node.js e serve a gestire dati **binari** (sequenze di byte).

- Un oggetto `Buffer` rappresenta una porzione di memoria di dimensione fissa, simile a un array di interi tra 0 e 255.
- I `Buffer` non possono essere ridimensionati dopo la creazione.

## Metodi principali

### Buffer.alloc(size, fill?, encoding?)

Crea un nuovo `Buffer` di lunghezza `size`, opzionalmente riempito con un valore e con un encoding specificato (default 0 e UTF-8).

const buffer = Buffer.alloc(5); // Buffer di 5 byte inizializzato a 0
console.log(buffer); // <Buffer 00 00 00 00 00>

const buffer2 = Buffer.alloc(5, 'a');
console.log(buffer2.toString()); // 'aaaaa'



### Buffer.from(data, encoding?)

Crea un nuovo `Buffer` da una stringa, array, o altro buffer.

const buffer = Buffer.from('hello');
console.log(buffer); // <Buffer 68 65 6c 6c 6f>
console.log(buffer.toString()); // 'hello'



### buffer.toString(encoding?, start?, end?)

Converte il buffer in stringa secondo l'encoding specificato (default UTF-8), con opzioni per l'intervallo di byte da convertire.

const buffer = Buffer.alloc(5, 'a');
console.log(buffer.toString('utf8', 1, 4)); // 'aaa' (da indice 1 a 3)



### Buffer.concat(arrayOfBuffers, totalLength?)

Concatena più buffer in un unico buffer.

const buf1 = Buffer.from('hello');
const buf2 = Buffer.from('world');
const result = Buffer.concat([buf1, buf2]);
console.log(result.toString()); // 'helloworld'



---

Il modulo Buffer è essenziale per lavorare con dati binari in Node.js, come file, immagini, o dati di rete.


# Il modulo FS in Node.js

Il modulo **fs** (file system) permette di interagire con il sistema di file del computer.  
In Node.js backend, questo è essenziale per leggere, scrivere, modificare e organizzare file e cartelle.

## Caratteristiche principali

- Offre metodi per operazioni su file e directory (creare, leggere, scrivere, cancellare, rinominare, ecc.).
- Ogni metodo ha una versione **sincrona** (blocca l'esecuzione fino al completamento) e una **asincrona** (usa callback o Promises per non bloccare).
- È ispirato allo standard POSIX per l'interazione con file system.

## Esempio: leggere un file asincrono

const fs = require('fs');

const readDataCallback = (err, data) => {
if (err) {
console.log(Qualcosa è andato storto: ${err});
} else {
console.log(Il file contiene: ${data});
}
};

fs.readFile('./file.txt', 'utf-8', readDataCallback);



- `readFile()` riceve:
  - il percorso del file
  - il tipo di encoding (di solito 'utf-8' per testo)
  - una callback da chiamare al termine della lettura
- Se si verifica un errore, la callback riceve `err`.
- Se tutto va bene, la callback riceve i dati del file come stringa.

## Versione sincrona

try {
const data = fs.readFileSync('./file.txt', 'utf-8');
console.log(data);
} catch (err) {
console.error(err);
}



---

Il modulo `fs` è indispensabile per lavorare con file e cartelle sul server, perfetto per leggere configurazioni, salvare dati, servire file statici, e altro ancora.
