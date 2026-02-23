# API RESTful

## Cosa è un'API RESTful?

### 📌 Definizione Base

Un'**API RESTful** è un'interfaccia che permette al **front-end** (client) di comunicare con il **back-end** (server) usando i principi **REST** (Representational State Transfer).

È il modo standardizzato e moderno in cui le applicazioni web comunicano tra loro.

**Esempio reale:**
- Quando apri Instagram e scorri i tuoi post, il front-end fa una **richiesta** al server
- Il server risponde con i **dati dei post**
- Il front-end visualizza questi dati

---

## I 6 Principi REST

### 1️⃣ Client-Server Architecture
- **Client** e **Server** sono separati e indipendenti
- Comunicano solo tramite HTTP
- Modificare uno non dovrebbe rompere l'altro

### 2️⃣ Statelessness (Assenza di Stato)
- Ogni richiesta è **indipendente** dalle altre
- Il server **non deve ricordare** le richieste precedenti
- Tutte le informazioni necessarie devono essere nella richiesta

**Esempio:**
```
Richiesta 1: GET /users/123
Richiesta 2: GET /users/456
- Il server non ricorda la richiesta 1 quando elabora la 2
- Ogni richiesta è completa e autonoma
```

### 3️⃣ Uniform Interface
- Interfaccia standardizzata tra client e server
- Regole comuni per tutti gli endpoint

### 4️⃣ Cacheable
- Le risposte devono indicare se possono essere messe in cache
- Migliora le prestazioni

### 5️⃣ Layered System
- Architettura a strati
- Client non sa se è connesso direttamente al server finale

### 6️⃣ Code on Demand (Opzionale)
- Server può inviare codice eseguibile al client
- Es: JavaScript nel browser

---

## Metodi HTTP (CRUD)

Le operazioni su un'API RESTful si basano sui **metodi HTTP**:

### 📌 GET - Leggere Dati
```
GET /users/123
GET /products
```
- **Scopo**: Recuperare dati dal server
- **Non modifica**: Il server rimane invariato
- **Parametri**: Nell'URL (query string)

**Esempio:**
```
GET /users/123              → Prendi l'utente con ID 123
GET /users?role=admin       → Prendi tutti gli utenti con ruolo admin
GET /users/123/posts        → Prendi i post dell'utente 123
```

---

### 📌 POST - Creare Dati
```
POST /users
POST /products
```
- **Scopo**: Creare una nuova risorsa
- **Dati**: Nel body della richiesta (solitamente JSON)
- **Risposta**: Di solito ritorna la risorsa creata con ID

**Esempio:**
```
POST /users
Body: {
  "name": "Marco",
  "email": "marco@example.com"
}
Risposta: {
  "id": 123,
  "name": "Marco",
  "email": "marco@example.com"
}
```

---

### 📌 PUT - Modificare Dati (Completo)
```
PUT /users/123
PUT /products/456
```
- **Scopo**: Modificare **completamente** una risorsa
- **Dati**: Nel body della richiesta
- **Differenza con PATCH**: Deve includere **tutti i campi**

**Esempio:**
```
PUT /users/123
Body: {
  "name": "Marco Aggiornato",
  "email": "nuovo@example.com",
  "age": 30
}
→ L'utente 123 viene completamente sostituito
```

---

### 📌 PATCH - Modificare Dati (Parziale)
```
PATCH /users/123
PATCH /products/456
```
- **Scopo**: Modificare **parzialmente** una risorsa
- **Dati**: Nel body della richiesta
- **Differenza con PUT**: Modifica solo i campi forniti

**Esempio:**
```
PATCH /users/123
Body: {
  "name": "Marco Aggiornato"
}
→ Solo il nome viene modificato, email e age rimangono uguali
```

---

### 📌 DELETE - Eliminare Dati
```
DELETE /users/123
DELETE /products/456
```
- **Scopo**: Eliminare una risorsa
- **Risposta**: Di solito 204 No Content o un messaggio di conferma

---

## Struttura degli URL (Routes)

Le URL di un'API RESTful devono essere **prevedibili e logiche**:

### ✅ BENE (RESTful)
```
GET    /users                 → Prendi tutti gli utenti
POST   /users                 → Crea un nuovo utente
GET    /users/123             → Prendi l'utente 123
PUT    /users/123             → Modifica l'utente 123
DELETE /users/123             → Elimina l'utente 123

GET    /users/123/posts       → Prendi i post dell'utente 123
POST   /users/123/posts       → Crea un post per l'utente 123
GET    /users/123/posts/456   → Prendi il post 456 dell'utente 123
```

### ❌ MALE (Non RESTful)
```
GET /getUsers
GET /getUserById?id=123
POST /createUser
GET /updateUser?id=123
GET /deleteUser?id=123
GET /getUserPosts?userId=123
```

### 📌 Regole per gli URL
1. **Usa i nomi plurali** per le risorse: `/users` non `/user`
2. **Usa i nomi, non i verbi**: `/users/123` non `/getUser/123`
3. **I verbi sono i metodi HTTP**: GET, POST, PUT, DELETE
4. **Usa gli slash** per le gerarchie: `/users/123/posts/456`
5. **Usa il trattino** per URL lunghi: `/user-profiles` non `/userProfiles`

---

## Come Creare un'API RESTful con Express.js

### Passo 1️⃣: Installare Express
```bash
npm install express
```

### Passo 2️⃣: Creare il Server
```javascript
const express = require('express');
const app = express();

// Middleware per parsare JSON
app.use(express.json());

// Dati finti (normalmente verrebbero da un database)
let users = [
  { id: 1, name: 'Marco', email: 'marco@example.com' },
  { id: 2, name: 'Anna', email: 'anna@example.com' }
];

// Avvia il server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server in esecuzione su http://localhost:${PORT}`);
});
```

### Passo 3️⃣: Implementare gli Endpoint (GET)
```javascript
// Prendi tutti gli utenti
app.get('/users', (req, res) => {
  res.json(users);
});

// Prendi un utente specifico
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: 'Utente non trovato' });
  }
  res.json(user);
});
```

### Passo 4️⃣: Implementare POST (Creare)
```javascript
app.post('/users', (req, res) => {
  // Validazione base
  if (!req.body.name || !req.body.email) {
    return res.status(400).json({ message: 'Nome ed email sono obbligatori' });
  }

  // Crea il nuovo utente
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  };

  users.push(newUser);
  res.status(201).json(newUser);
});
```

### Passo 5️⃣: Implementare PUT (Modificare Completamente)
```javascript
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  
  if (!user) {
    return res.status(404).json({ message: 'Utente non trovato' });
  }

  // Modifica tutti i campi
  user.name = req.body.name;
  user.email = req.body.email;

  res.json(user);
});
```

### Passo 6️⃣: Implementare PATCH (Modificare Parzialmente)
```javascript
app.patch('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  
  if (!user) {
    return res.status(404).json({ message: 'Utente non trovato' });
  }

  // Modifica solo i campi forniti
  if (req.body.name) user.name = req.body.name;
  if (req.body.email) user.email = req.body.email;

  res.json(user);
});
```

### Passo 7️⃣: Implementare DELETE
```javascript
app.delete('/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  
  if (userIndex === -1) {
    return res.status(404).json({ message: 'Utente non trovato' });
  }

  const deletedUser = users.splice(userIndex, 1);
  res.json({ message: 'Utente eliminato', user: deletedUser[0] });
});
```

---

## Status Code HTTP Importanti

| Codice | Significato | Uso |
|--------|-------------|-----|
| **200** | OK | Richiesta andata a buon fine |
| **201** | Created | Risorsa creata con successo (POST) |
| **400** | Bad Request | Errore nella richiesta (dati mancanti) |
| **401** | Unauthorized | Autenticazione richiesta |
| **403** | Forbidden | Non hai i permessi |
| **404** | Not Found | Risorsa non trovata |
| **500** | Server Error | Errore del server |

---

## Testare un'API RESTful

### Opzione 1: Postman
- App per testare le API
- GUI intuitiva
- Salva le richieste

### Opzione 2: Curl (Terminale)
```bash
# GET
curl http://localhost:3000/users

# POST
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Marco","email":"marco@example.com"}'

# PUT
curl -X PUT http://localhost:3000/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Marco Nuovo","email":"nuovo@example.com"}'

# DELETE
curl -X DELETE http://localhost:3000/users/1
```

### Opzione 3: JavaScript Fetch
```javascript
// GET
fetch('http://localhost:3000/users')
  .then(res => res.json())
  .then(data => console.log(data));

// POST
fetch('http://localhost:3000/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Marco', email: 'marco@example.com' })
})
.then(res => res.json())
.then(data => console.log(data));
```

---

## Buone Pratiche

✅ **Usa versioning**: `/api/v1/users` non `/users`
✅ **Documenta bene**: Ogni endpoint deve essere chiaro
✅ **Valida i dati**: Controlla che i dati ricevuti siano corretti
✅ **Usa HTTPS**: Sempre in produzione
✅ **Implementa autenticazione**: JWT, OAuth, ecc.
✅ **Gestisci gli errori**: Risposte coerenti per gli errori
✅ **Usa rate limiting**: Limita le richieste per evitare abusi
✅ **Aggiungi logging**: Traccia tutte le richieste importanti
