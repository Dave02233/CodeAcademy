# Dipendenze in Node.js

Quando si sviluppano applicazioni Node.js, oltre ai moduli core inclusi nell’installazione di Node.js, gli sviluppatori possono usare moduli creati da altri sviluppatori, spesso condivisi liberamente. Questi moduli di terze parti vengono chiamati **dipendenze**.

Per esempio, se la tua app deve gestire diversi formati di date, invece di scrivere tutto il codice da zero, puoi usare un modulo già creato da altri che offre questa funzionalità, risparmiando tempo e gestendo correttamente molti casi complessi.

L’uso delle dipendenze è fondamentale per creare applicazioni moderne in modo efficiente, senza dover reinventare soluzioni comuni.

---

# Gestione delle dipendenze con un package manager

Le dipendenze sono raccolte in **pacchetti** gestiti da un **package manager**. Un pacchetto è un modulo di terze parti con legate anche le sue dipendenze.

Questo sistema permette moduli sempre più complessi e potenti, ma anche una catena di dipendenze annidata che può diventare difficile da gestire manualmente.

Un package manager come **npm** (Node Package Manager), preinstallato con Node.js, si occupa automaticamente di:

- Scaricare e installare i pacchetti e le loro dipendenze
- Controllare vulnerabilità note
- Gestire aggiornamenti alle versioni più recenti
- Pulire e rimuovere pacchetti quando non servono più
- Garantire un’installazione coerente per tutti i collaboratori

---

# Inizializzare un progetto Node.js con npm

Per iniziare un nuovo progetto Node.js con npm, si esegue in terminale il comando:

npm init

text

Segue una serie di domande per configurare il progetto. In alternativa, per risposta automatica si usa:

npm init -y

text

Questo crea il file **package.json** con informazioni sul progetto, tra cui la sezione `"dependencies"` dove vengono elencati i pacchetti usati con le rispettive versioni.

---

# Installare un pacchetto con npm

Per installare un pacchetto locale, ad esempio `nodemon`, si usa il comando:

npm i nodemon

text

Il pacchetto viene installato nella cartella `node_modules/` del progetto e aggiunto alle dipendenze in `package.json`:

"dependencies": {
"nodemon": "^2.0.13"
}

text

---

# Tipi di installazione dei pacchetti

### Dipendenze normali (dependencies)

Pacchetti necessari per far funzionare l’applicazione in produzione.

### Dipendenze di sviluppo (devDependencies)

Pacchetti utili solo durante lo sviluppo, per esempio `nodemon` per il riavvio automatico del server.

Installazione come devDependency:

npm install nodemon --save-dev

text

Aggiunta nel `package.json` sotto `"devDependencies"`:

"devDependencies": {
"nodemon": "^2.0.13"
}

text

---

### Pacchetti globali

Pacchetti installati una volta per il sistema, usati da linea di comando senza bisogno di reinstallarli in ogni progetto.

Esempio:

npm install http-server -g

text

I pacchetti globali **non** appaiono nel `package.json` e sono archiviati in una cartella diversa.

---

# Installare tutte le dipendenze di un progetto

Se hai il file `package.json` con tutte le dipendenze, per installarle tutte insieme basta:

npm i

text

Per installazione in produzione (evitando dipendenze di sviluppo):

npm i --production

text

---

# Consiglio

Non includere la cartella `node_modules/` nel controllo versione (es. Git), perché occupa molto spazio e può essere rigenerata con `npm i` da `package.json`.

---