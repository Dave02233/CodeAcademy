# Core Modules in Node.js

## Cos’è la modularità
La **modularità** è una tecnica di progettazione software in cui un programma è suddiviso in parti distinte, ognuna delle quali fornisce una specifica funzionalità.  
Questi moduli separati si uniscono per creare un insieme coeso.  

La modularità è fondamentale per:
- creare programmi scalabili
- integrare librerie e framework
- suddividere le responsabilità del programma in parti gestibili

In pratica, un **modulo** è una raccolta di codice contenuta in un singolo file.  
Invece di mettere tutto il programma in un unico file, il codice viene organizzato in più file in base alla logica o al “concern” che affrontano.  
Questi file possono poi essere inclusi in altri file tramite la funzione `require()`.

---

## Core Modules in Node.js
Per evitare che gli sviluppatori **reinventino la ruota** ogni volta, **Node.js** mette a disposizione diversi moduli integrati per svolgere compiti comuni in modo efficiente.  

Questi moduli integrati sono chiamati **core modules** e sono definiti all’interno del codice sorgente di Node.js, nella cartella `lib/`.  

Puoi richiedere un modulo core passando una **stringa** con il nome del modulo alla funzione `require()`:

```js
// Richiedere il modulo core 'events':
const events = require('events');
```

# The Console Module in Node.js

Uno dei **core modules** più utilizzati in Node.js è il **console module**.  

In Node.js, il **terminale** viene usato per inviare e ricevere messaggi di testo da un programma, spesso per scopi di **debug**.  
Questo può sembrare familiare a come usiamo la console nel browser, e infatti non è un caso: in Node.js, il modulo `console` incorporato esporta un **oggetto globale** `console` che offre al terminale funzionalità simili.

---

## Metodi principali del console module

Il modulo `console` fornisce molti metodi già noti, tra cui:

- **`.log()`** → stampa messaggi nel terminale.
- **`.assert()`** → stampa un messaggio nel terminale se il valore fornito è *falsy*.
- **`.table()`** → stampa una tabella nel terminale a partire da un oggetto o un array.

---

## Caratteristica importante
Poiché `console` è un **modulo globale**, i suoi metodi possono essere usati **ovunque nel codice** senza doverlo importare con `require()`.

---

### Esempio
```js
console.log("Hello from Node.js!");
console.assert(2 > 3, "Questa condizione è falsa");
console.table([{ name: "Davide", role: "Developer" }, { name: "Anna", role: "Designer" }]);
```

# The Process Module in Node.js

## Cos’è un processo
In informatica, un **processo** è l’istanza di un programma in esecuzione.  
Su Windows puoi visualizzarli nel **Task Manager**, su macOS tramite **Activity Monitor**.

In Node.js esiste un **oggetto globale** `process` che contiene metodi e proprietà utili per ottenere informazioni sul processo corrente.

---

## `process.env`
`process.env` è un **oggetto** che memorizza e controlla informazioni sull’ambiente in cui il processo sta girando.

Esempio: la proprietà `PWD` contiene la directory corrente del processo.

Può essere utile per eseguire logiche differenti a seconda dell’ambiente (sviluppo o produzione).  
Una convenzione comune è aggiungere una proprietà `NODE_ENV` a `process.env` con valore `"production"` o `"development"`.

```js
if (process.env.NODE_ENV === 'development') {
  console.log('Testing! Testing! Does everything work?');
}
process.memoryUsage()
Questo metodo restituisce informazioni sul consumo di memoria del processo corrente.

Esempio di output:

{
  rss: 26247168,
  heapTotal: 5767168,
  heapUsed: 3573032,
  external: 8772
}
```
📌 Nota:

heap può riferirsi sia a una struttura dati che a un blocco di memoria.

heapUsed indica quanti byte di memoria heap sta usando il processo.

process.argv
Questa proprietà contiene un array con i valori forniti da linea di comando quando il processo è stato avviato.

process.argv[0] → percorso assoluto di Node.js

process.argv[1] → percorso dello script eseguito

process.argv[2+] → eventuali argomenti passati

Esempio:
console.log(process.argv[3]); // Stampa: 'several'

Schema del flusso di process.argv:

[0] Path Node.js     → "/usr/local/bin/node"
[1] Path script      → "/user/code/myProgram.js"
[2] Argomento 1      → "testing"
[3] Argomento 2      → "several"
[4] Argomento 3      → "features"
Riepilogo rapido
Proprietà / Metodo	Descrizione
process.env	Info sull’ambiente di esecuzione
process.env.NODE_ENV	Stato dell’app (production/dev)
process.memoryUsage()	Uso della memoria del processo
process.argv	Argomenti passati da terminale



# The OS Module in Node.js

## Introduzione
Quando si sviluppa o si fa debug di un’app, può essere utile ottenere informazioni sul **computer**, **sistema operativo** e **rete** su cui il programma è in esecuzione.

Prima di Node.js, JavaScript non poteva recuperare queste informazioni perché era confinato al browser.  
Node.js, essendo un **runtime JavaScript** (capace di eseguire codice fuori dal browser), fornisce accesso a queste informazioni tramite il **modulo core `os`**.

---

## Importare il modulo OS
A differenza di `process` e `console`, il modulo `os` **non è globale**: va importato manualmente.

```js
const os = require('os');
Metodi principali del modulo OS
os.type() → restituisce il sistema operativo.

os.arch() → restituisce l’architettura CPU del sistema operativo.

os.networkInterfaces() → restituisce le interfacce di rete del computer (IP, MAC address, ecc.).

os.homedir() → restituisce la home directory dell’utente corrente.

os.hostname() → restituisce il nome host del sistema operativo.

os.uptime() → restituisce il tempo di attività del sistema (in secondi).

Esempio pratico

const os = require('os');

const local = {  
  'Home Directory': os.homedir(),    
  'Operating System': os.type(),
  'Time since reboot': os.uptime()
}

console.log(local);
Esempio di output:


{
  'Home Directory': '/Users/luca',
  'Operating System': 'Darwin',
  'Time since reboot': 86997
}
```
📌 Note:

'Darwin' è il sistema operativo sottostante di macOS.

Il tempo di uptime è espresso in secondi.

Schema riepilogativo
Metodo	Descrizione
os.type()	Tipo di sistema operativo
os.arch()	Architettura CPU
os.networkInterfaces()	Info sulle interfacce di rete
os.homedir()	Home directory dell’utente
os.hostname()	Nome host del sistema
os.uptime()	Uptime del sistema (sec)

# Il modulo `util` di Node.js

Il modulo `util` è un modulo integrato di Node.js che offre una serie di **funzioni di utilità** per semplificare attività comuni nello sviluppo, soprattutto per l'ispezione di oggetti, il supporto alla formattazione, la gestione delle callback, e altre funzionalità di basso livello.

## A cosa serve?

Principalmente, il modulo `util` è pensato per:

- **Introspezione** delle variabili e degli oggetti (ad esempio con la funzione `util.inspect()` che restituisce una rappresentazione stringa dettagliata di un oggetto).
- Supportare la scrittura di codice leggibile e mantenibile con funzioni di formattazione simili a `printf` (`util.format()`).
- Facilitare la manipolazione delle callback e la loro trasformazione in funzioni basate su Promise (`util.promisify()`).
- Supporto alla gestione di `inherits` (ereditarietà tra classi o funzioni costruttore).

## Esempi pratici

### 1. `util.inspect()`

Permette di stampare a video un oggetto in modo dettagliato, molto utile nel debug.

const util = require('util');

const obj = {
nome: "Mario",
eta: 30,
dettagli: { luogo: 'Milano', hobby: ['calcio', 'lettura'] }
};

console.log(util.inspect(obj, { colors: true, depth: null }));


### 2. `util.format()`

Simile a `printf` in C, formatta una stringa con placeholder.

const util = require('util');

const name = 'Anna';
const age = 25;

const output = util.format('Ciao %s, hai %d anni.', name, age);
console.log(output);
// Output: "Ciao Anna, hai 25 anni."


### 3. `util.promisify()`

Converte una funzione che usa callback (stile error-first) in una che ritorna una Promise.

const util = require('util');
const fs = require('fs');

const readFileAsync = util.promisify(fs.readFile);

readFileAsync('./file.txt', 'utf8')
.then(content => console.log(content))
.catch(err => console.error(err));


## Conclusioni

Il modulo `util` è una **piccola cassetta degli attrezzi** per sviluppatori Node.js, ideale sia per il debug che per la scrittura di codice più elegante e modulare. Anche se alcune funzioni sono più "internazionali" (usate dal core di Node.js stesso), rappresenta comunque uno strumento molto utile per semplificare tante attività comuni.
