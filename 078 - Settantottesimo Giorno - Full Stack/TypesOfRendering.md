# Diversi Tipi di Rendering

## Introduzione al Rendering

Il **rendering** è l'aspetto dello sviluppo web riguardante la traduzione del codice in un sito web visuale e interattivo. Il browser utilizza HTML e CSS per costruire un **render tree**. Possiamo pensare al render tree come a un progetto per la visualizzazione della pagina che l'utente alla fine vede.

## Approcci Diversi al Rendering

Esistono diversi modi per eseguire il rendering di un'app web. Ogni approccio ha vantaggi e svantaggi, e scegliamo un metodo di rendering in base alle nostre priorità: SEO, esperienza utente e prestazioni. In questa lezione, discuteremo il **rendering lato client** e il **rendering lato server**.

### Rendering Lato Client vs Server

Nel **rendering lato client**, il contenuto della pagina viene generato dinamicamente nel browser mentre l'utente naviga nell'app. In alternativa, nel **rendering lato server**, il server genera il contenuto e lo invia al browser, su richiesta. Possiamo anche combinare il rendering lato client e il rendering lato server per utilizzare il **rendering ibrido** per incorporare i vantaggi di entrambi. Nel rendering ibrido, il contenuto statico viene generato sul server, mentre il contenuto dinamico viene generato lato client mentre l'utente naviga nel sito.

## Differenze Dettagliate tra Client-Side e Server-Side Rendering

### 📌 Rendering Lato Client (CSR - Client-Side Rendering)

**Come funziona:**
- Il server invia un file HTML minimalista + file JavaScript al browser
- Il browser **scarica il JavaScript** e lo **esegue nel browser**
- Il JavaScript genera il contenuto della pagina (HTML dinamico) **nel browser dell'utente**
- La pagina viene renderizzata **dopo** che il JavaScript è stato eseguito

**Caratteristiche:**
- ✅ Esperienza interattiva fluida (come un'applicazione desktop)
- ✅ Meno carico sul server
- ✅ Cambio pagina veloce (carica solo i dati necessari)
- ❌ SEO più difficile (i motori di ricerca vedono la pagina vuota prima dell'esecuzione JS)
- ❌ Prima visita più lenta (deve scaricare, parsare ed eseguire JavaScript)
- ❌ Richiede JavaScript abilitato nel browser

**Quando usarlo:**
- App complesse e interattive (Gmail, Trello, Figma)
- Applicazioni single-page (SPA)

---

### 📌 Rendering Lato Server (SSR - Server-Side Rendering)

**Come funziona:**
- L'utente richiede una pagina al server
- Il server **genera l'HTML completo** con i dati già inseriti
- Il server **invia l'HTML finale** al browser
- Il browser riceve HTML completo e lo visualizza **immediatamente**

**Caratteristiche:**
- ✅ SEO ottimo (i motori di ricerca vedono il contenuto completo)
- ✅ Prima visita più veloce (HTML è già pronto)
- ✅ Funziona senza JavaScript
- ❌ Ogni navigazione ricarica la pagina intera
- ❌ Maggior carico sul server
- ❌ Esperienza meno fluida tra le pagine

**Quando usarlo:**
- Siti web tradizionali (blog, news, e-commerce)
- Pagine che devono essere indicizzate dai motori di ricerca
- Contenuto principalmente statico

---

### 📌 Rendering Ibrido (Hybrid Rendering)

**Come funziona:**
- **Server**: Genera il contenuto **statico iniziale** (layout, header, footer)
- **Client**: Genera il contenuto **dinamico** quando l'utente interagisce
- Combina il meglio dei due mondi

**Vantaggi:**
- ✅ Caricamento iniziale veloce (SSR)
- ✅ Interattività fluida dopo il caricamento (CSR)
- ✅ Buon SEO
- ✅ Miglior esperienza utente complessiva

**Quando usarlo:**
- Applicazioni moderne (Next.js, Nuxt.js supportano questo approccio)
- Quando hai sia contenuto statico che dinamico

## Prossimi Passaggi

Entreremo più nel dettaglio sul rendering lato client e sul rendering lato server negli esercizi imminenti.
