# CORS (Cross-Origin Resource Sharing)

## Cos’è il CORS?
**CORS** (Cross-Origin Resource Sharing) è uno standard di sicurezza dei browser che regola le richieste tra domini diversi.  
Quando una pagina web prova a caricare risorse (immagini, font, script, API) da un server diverso da quello da cui è stata scaricata, entra in gioco il CORS.

---

## Perché serve?
I browser seguono delle **politiche di sicurezza** per proteggere gli utenti da attacchi o codice malevolo.  
La più nota è la **Same-Origin Policy**:

- Una pagina può comunicare solo con risorse che provengono dallo stesso **protocollo**, **host** e **porta**.  
- Esempio:  
  - ✅ `http://example.com/page1.html` → `http://example.com/page2.html`  
  - ❌ `http://example.com/page1.html` → `https://sub.example.com/page.html`

👉 Questa regola è molto sicura ma anche troppo rigida.  
I siti moderni usano risorse distribuite (CDN, API, file multimediali…), quindi è nato **CORS**, che permette al server di dichiarare esplicitamente **quali origini esterne possono accedere**.

---

## Come funziona il CORS
Il meccanismo si basa sugli **HTTP headers** che il server invia al browser.  
Il più importante è:

- **Access-Control-Allow-Origin**  
  - `*` → risorsa accessibile da qualunque dominio  
  - `https://example.com` → solo quel dominio può accedere  

Altri header servono per:
- specificare i metodi HTTP consentiti  
- permettere credenziali (cookie, token)  
- dichiarare intestazioni personalizzate  

---

## Preflight request
Non tutte le richieste sono uguali:

- **Semplici** (es. `GET` di immagini o file CSS) → generalmente accettate  
- **Potenzialmente pericolose** (es. `PUT`, `DELETE`, `PATCH`) → richiedono un controllo extra  

In questi casi, il browser invia una **preflight request** con metodo `OPTIONS` per chiedere al server:

> “Se ti mando questa richiesta, la accetti o no?”

- Se il server risponde con header CORS validi → la richiesta procede  
- Se non autorizzata → la richiesta viene bloccata  

---

## Implementare CORS
Dipende dal backend usato.

### Node.js puro
```js
response.setHeader('Access-Control-Allow-Origin', '*');
```
## Express (con middleware)
```js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // abilita CORS per tutte le route

app.get('/hello/:id', (req, res) => {
  res.json({ msg: 'Hello world, we are CORS-enabled!' });
});

app.listen(80, () => {
  console.log('Server CORS attivo sulla porta 80');
});
```