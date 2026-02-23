# Come Deployare su Render

## Cos'è Render?

### 📌 Definizione

**Render** è una piattaforma di cloud hosting che permette di deployare:
- ✅ Web app (Node.js, Python, Ruby, ecc.)
- ✅ Database (PostgreSQL, Redis, ecc.)
- ✅ Worker (processi in background)
- ✅ Static site (siti HTML/CSS/JS)

### 🎯 Vantaggi di Render

- 🚀 Deploy semplice e veloce
- 💰 Piano gratuito disponibile
- 🔄 Deploy automatico da GitHub
- 📊 Dashboard intuitiva
- 🗄️ Database gestito
- 🛡️ SSL/HTTPS gratuito
- 🌍 Uptime garantito

### ❌ Limitazioni Piano Gratuito

- ⏸️ Le app si sospendono dopo 15 minuti di inattività
- 📊 Risorse limitate (0.5 CPU, 512 MB RAM)
- 🔄 Non puoi deployare continuamente

---

## Parte 1️⃣: Deployare un'App Web su Render

### Step 1: Preparare il Progetto Localmente

#### 1.1 Crea un Repository GitHub

```bash
# Crea una cartella per il progetto
mkdir mio-sito
cd mio-sito

# Inizializza git
git init

# Crea file .gitignore
echo "node_modules
.env
.DS_Store" > .gitignore

# Aggiungi file iniziali
git add .
git commit -m "Initial commit"
```

#### 1.2 Crea l'app Express (Backend)

```javascript
// server.js
const express = require('express');
const app = express();

app.use(express.json());

// CORS per frontend
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Endpoint di test
app.get('/api', (req, res) => {
  res.json({ message: 'API funzionante!' });
});

// Port per produzione e sviluppo
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server in esecuzione su porta ${PORT}`);
});
```

#### 1.3 Crea package.json

```json
{
  "name": "mio-sito",
  "version": "1.0.0",
  "description": "App Render",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  },
  "engines": {
    "node": "18.x"
  }
}
```

**Installa dipendenze:**
```bash
npm install
```

#### 1.4 Crea file .env (per variabili di ambiente)

```
PORT=3000
NODE_ENV=development
```

#### 1.5 Test Locale

```bash
# Avvia il server
npm start

# Testa l'API
curl http://localhost:3000/api
```

---

### Step 2: Carica su GitHub

```bash
# Aggiungi i file
git add .

# Fai il commit
git commit -m "Setup app Express per Render"

# Carica su GitHub (assicurati di aver creato il repo su github.com)
git remote add origin https://github.com/TuoUsername/mio-sito.git
git branch -M main
git push -u origin main
```

---

### Step 3: Crea un Account Render

1. 🌐 Vai su [render.com](https://render.com)
2. 📧 Clicca "Sign up"
3. 🔐 Registrati con:
   - Email
   - GitHub (consigliato!)
   - Google

**Scegli GitHub** = Deploy automatico più facile!

---

### Step 4: Collegare GitHub a Render

1. Accedi a Render con il tuo account
2. Nel menu laterale, clicca **"Dashboard"**
3. Clicca il bottone blu **"New +"**
4. Seleziona **"Web Service"**

```
┌─────────────────────────────┐
│ New +                       │
├─────────────────────────────┤
│ • Web Service               │
│ • Static Site               │
│ • PostgreSQL                │
│ • Redis                     │
│ • Worker                    │
└─────────────────────────────┘
```

5. Clicca **"Connect Repository"**
6. Seleziona il repository GitHub dove hai caricato il progetto
7. Clicca **"Connect"**

---

### Step 5: Configura il Deploy

Dopo aver connesso il repository, vedrai un form. Riempilo così:

```
┌──────────────────────────────────────────┐
│ CREATE A NEW WEB SERVICE                 │
├──────────────────────────────────────────┤
│ Name: mio-sito                           │
│ (Questo sarà parte dell'URL)             │
├──────────────────────────────────────────┤
│ Environment: Node                        │
│ (Scegli il linguaggio del tuo progetto)  │
├──────────────────────────────────────────┤
│ Build Command: npm install               │
│ (Cosa fare prima di avviare)             │
├──────────────────────────────────────────┤
│ Start Command: npm start                 │
│ (Come avviare l'app)                     │
├──────────────────────────────────────────┤
│ Plan: Free (✅ Scegli questo!)           │
│ Paid options disponibili se serve più   │
└──────────────────────────────────────────┘
```

### Step 6: Aggiungi Variabili di Ambiente

Prima di fare il deploy, aggiungi le variabili di ambiente:

1. Scroll down fino a **"Environment"**
2. Clicca **"Add Environment Variable"**
3. Aggiungi:
   - **Key**: `NODE_ENV`
   - **Value**: `production`

```
NODE_ENV = production
PORT = (Render lo aggiunge automaticamente)
```

Se hai un database PostgreSQL, aggiungi anche:
```
DATABASE_URL = (lo farai dopo aver creato il database)
```

### Step 7: Deploy!

1. Scrolla fino in fondo
2. Clicca il bottone blu **"Create Web Service"**
3. Render inizierà il deploy automaticamente

```
Vedrai una schermata:
┌─────────────────────────────────┐
│ Building...                     │
│ [████████░░░░░░░░░░] 50%       │
│                                 │
│ Fetching code...                │
│ Installing dependencies...      │
│ Building...                     │
│ Starting service...             │
└─────────────────────────────────┘
```

### Step 8: Accedi all'App

Una volta completato il deploy, vedrai:

```
┌──────────────────────────────────┐
│ ✅ Live                          │
│                                  │
│ https://mio-sito.onrender.com    │
│ (Questo è il tuo URL!)           │
└──────────────────────────────────┘
```

Clicca sul link per visitare la tua app!

---

## Parte 2️⃣: Deployare PostgreSQL su Render

### Step 1: Creare un Database PostgreSQL

1. Nel **Dashboard di Render**
2. Clicca **"New +"**
3. Seleziona **"PostgreSQL"**

```
┌────────────────────────────────┐
│ Crea un nuovo servizio         │
├────────────────────────────────┤
│ • Web Service                  │
│ • Static Site                  │
│ • PostgreSQL         ← Questo! │
│ • Redis                        │
│ • Worker                       │
└────────────────────────────────┘
```

### Step 2: Configura il Database

Compila il form:

```
┌──────────────────────────────────────────┐
│ CREATE NEW POSTGRESQL DATABASE           │
├──────────────────────────────────────────┤
│ Name: mio-database                       │
│ (Nome univoco per il tuo database)       │
├──────────────────────────────────────────┤
│ Database: postgres                       │
│ (Nome default, puoi cambiarla)           │
├──────────────────────────────────────────┤
│ User: postgres                           │
│ (Username default)                       │
├──────────────────────────────────────────┤
│ Region: Frankfurt (EU)                   │
│ (Scegli la più vicina a te)              │
├──────────────────────────────────────────┤
│ Plan: Free                               │
│ (0.25 GB storage, RAM limitato)          │
└──────────────────────────────────────────┘
```

### Step 3: Crea il Database

Clicca **"Create Database"**

Render inizierà a creare il database:

```
┌───────────────────────────────┐
│ Setting up PostgreSQL...      │
│ [███████░░░░░░░░░░] 70%      │
└───────────────────────────────┘
```

Questo potrebbe impiegare 5-10 minuti.

### Step 4: Ottieni le Credenziali

Una volta completato, vedrai la pagina del database:

```
┌──────────────────────────────────────────────┐
│ Status: ✅ Available                         │
├──────────────────────────────────────────────┤
│ Connections                                  │
├──────────────────────────────────────────────┤
│ Host: mio-database.render.com                │
│ Database: postgres                           │
│ User: postgres                               │
│ Password: ••••••••                           │
│ Port: 5432                                   │
│                                              │
│ Internal Database URL:                       │
│ postgres://...@mio-database.render.com:5432  │
│                                              │
│ External Database URL:                       │
│ postgresql://user:pass@host:5432/database    │
└──────────────────────────────────────────────┘
```

📌 **Copia l'Internal Database URL!**

### Step 5: Collegare il Database all'App

#### 5.1 Aggiorna il Code della Web App

```javascript
// server.js
const express = require('express');
const { Pool } = require('pg');

const app = express();
app.use(express.json());

// Connessione PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false // Necessario per Render
  }
});

// Test connessione database
app.get('/api/health', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({
      message: 'API e Database OK!',
      timestamp: result.rows[0].now
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint di esempio: ottieni utenti
app.get('/api/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint di esempio: crea utente
app.post('/api/users', async (req, res) => {
  const { name, email } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server in esecuzione su porta ${PORT}`);
});
```

#### 5.2 Installa il Modulo PostgreSQL

```bash
npm install pg
```

#### 5.3 Crea le Tabelle nel Database

Prima di fare il deploy, crea le tabelle. Usa **pgAdmin** o **psql**:

```bash
# Con psql (da terminale)
psql -h mio-database.render.com -U postgres -d postgres -c "
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT NOW()
);
"
```

Oppure usa **DBeaver** (app desktop per gestire database):
1. Scarica DBeaver
2. Connettiti con le credenziali di Render
3. Esegui il comando SQL

#### 5.4 Aggiorna Render con il DATABASE_URL

1. Vai nel Dashboard di Render
2. Apri la tua **Web Service** (mio-sito)
3. Clicca **"Environment"** nel menu laterale
4. Clicca **"Add Environment Variable"**
5. Aggiungi:
   - **Key**: `DATABASE_URL`
   - **Value**: (Copia l'Internal Database URL dal database PostgreSQL)

```
DATABASE_URL = postgres://postgres:PASSWORD@mio-database.render.com:5432/postgres
```

### Step 6: Deploy Automatico

1. Fai un commit del tuo codice aggiornato:
```bash
git add .
git commit -m "Aggiungi connessione a PostgreSQL"
git push origin main
```

2. Render **si accorgerà automaticamente** del cambio
3. Inizierà il deploy (puoi vederlo nei log)

```
┌────────────────────────────┐
│ Build Logs                 │
├────────────────────────────┤
│ Starting build process...  │
│ Installing npm packages... │
│ ✅ Dependencies installed  │
│ ✅ Build successful        │
│ ✅ Server started on 3000  │
└────────────────────────────┘
```

### Step 7: Testa la Connessione

```bash
# Dalla tua app Render
curl https://mio-sito.onrender.com/api/health

# Risposta:
# {
#   "message": "API e Database OK!",
#   "timestamp": "2024-01-09T10:30:45.123Z"
# }
```

---

## 🐛 Troubleshooting Comune

### ❌ App si sospende dopo 15 minuti

**Problema:** La versione gratuita sospende l'app dopo inattività.

**Soluzione:**
- Passa a un piano pagato ($7/mese)
- O usa un "keep-alive" service che fa ping ogni 15 minuti

**Keep-alive con UptimeRobot (Gratuito):**
```
1. Vai su uptimerobot.com
2. Crea un monitor HTTP per la tua app
3. Imposta intervallo 5 minuti
4. La tua app non si sospenderà mai
```

### ❌ Errore "DATABASE_URL not found"

**Problema:** La variabile di ambiente non è settata.

**Soluzione:**
```javascript
// server.js
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://localhost/postgres',
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});
```

### ❌ Connessione al database fallisce

**Problema:** SSL o credenziali sbagliate.

**Soluzione:**
```javascript
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false // 🔑 Essenziale per Render
  }
});
```

### ❌ Build fallisce: "npm ERR!"

**Problema:** Mancano dipendenze in package.json.

**Soluzione:**
```bash
# Assicurati di aver aggiunto le dipendenze
npm install pg express

# Salva in package.json automaticamente (le nuove versioni lo fanno)
git add package.json package-lock.json
git commit -m "Update dependencies"
git push origin main
```

### ❌ Port già in uso

**Problema:** La porta 3000 è già occupata localmente.

**Soluzione:**
```bash
# Cambia porta localmente
PORT=4000 npm start

# O usa .env
echo "PORT=4000" >> .env
npm start
```

---

## 📋 Checklist Finale

Prima di dire che il deployment è completo:

### Per la Web App
- ✅ Repository GitHub creato e public
- ✅ package.json con `"start"` script
- ✅ server.js o file principale configurato
- ✅ Variabili di ambiente nel .env locale
- ✅ App funziona con `npm start`
- ✅ Connessa a Render
- ✅ Deploy completato senza errori
- ✅ URL funzionante (https://nome.onrender.com)

### Per il Database PostgreSQL
- ✅ Database creato su Render
- ✅ Credenziali salvate
- ✅ Tabelle create
- ✅ DATABASE_URL aggiunto alle variabili di Render
- ✅ Connessione SSL configurata nel codice
- ✅ Dati di test inseriti (opzionale)
- ✅ Endpoint API testato e funzionante

---

## 🎓 Prossimi Passi

Dopo il deployment:

1. **Monitora l'app**: Controlla i log in Render per errori
2. **Aggiungi CORS corretto**: Specifica il tuo dominio frontend
3. **Proteggi il database**: Crea user separati (non usare postgres)
4. **Aggiungi backup**: Backup automatici del database
5. **Scalare se necessario**: Passa a piano pagato se l'app cresce

---

## 📚 Risorse Utili

- 🔗 [Documentazione Render](https://render.com/docs)
- 🔗 [Guida PostgreSQL su Render](https://render.com/docs/databases)
- 🔗 [Express.js Guide](https://expressjs.com)
- 🔗 [node-postgres docs](https://node-postgres.com)
- 🔗 [DBeaver (GUI database)](https://dbeaver.io)
- 🔗 [UptimeRobot (Keep-alive gratuito)](https://uptimerobot.com)
