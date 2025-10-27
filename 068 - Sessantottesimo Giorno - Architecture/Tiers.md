# 🏗️ Appunti: Architettura a Tre Livelli (Three-Tier Architecture)

## 📚 Introduzione
> Nella progettazione di un'applicazione, una delle prime decisioni riguarda il numero di livelli (tiers) da utilizzare. L'architettura a tre livelli è spesso la scelta più comune perché si adatta a molti casi d'uso.

## 🤔 Cos'è un'applicazione a tre livelli?
> Un livello (tier) serve a separare i diversi processi all'interno di un'applicazione, sia attraverso l'uso di stack tecnologici diversi che dividendo il lavoro tra team separati.

### I tre livelli principali:
1. Livello di presentazione
2. Livello applicativo
3. Livello dati

## 🎨 Livello di Presentazione (Presentation Tier)
> È il livello con cui gli utenti interagiscono direttamente.

### Caratteristiche:
- **Interfaccia utente (UI/GUI)**
- **Tecnologie principali**:
  - HTML
  - JavaScript
  - CSS
- **Funzione**: Presentare e raccogliere informazioni dall'utente

## 💾 Livello Dati (Data Tier)
> È il livello dedicato alla memorizzazione dei dati.

### Caratteristiche:
- **Solo storage, nessuna manipolazione**
- **Comunicazione**: Solo con il livello applicativo
- **Tecnologie tipiche**:
  - SQL
  - MongoDB
  - PostgreSQL

### Analogia 📦
> Pensa al livello dati come a un contenitore: mantiene gli elementi al suo interno finché qualcosa non viene a prenderli.

### Note importanti:
- Non comunica direttamente con il livello di presentazione
- Le query al database sono gestite dal livello applicativo
- Si occupa solo dello storage dei dati

## ⚙️ Livello Applicativo (Application Tier)
> È il cuore dell'applicazione dove avviene la maggior parte dell'elaborazione.

### Funzioni principali:
- Elabora i dati dal livello di presentazione
- Modifica i dati nel livello dati
- Fa da ponte tra gli altri due livelli

### Tecnologie utilizzate:
- Java
- Python
- Perl
- Altri linguaggi di programmazione popolari

### Esempio pratico:
> Quando apri un articolo online, il livello applicativo:
1. Recupera i dati dal livello dati
2. Li elabora nel formato necessario
3. Li invia al livello di presentazione per la visualizzazione

## 🌟 Vantaggi dell'Architettura a Livelli

### 1. Sviluppo facilitato
- Divisione chiara dei compiti
- Team dedicati per ogni livello
- Gestione del progetto più efficiente

### 2. Scalabilità 📈
- Stack tecnologici indipendenti
- Facile aggiornamento dei singoli livelli
- Modifiche localizzate senza impatto sugli altri livelli

## 🔄 Altre Architetture a Livelli

### Architettura a Due Livelli
- Solo presentazione e dati
- Logica limitata
- Operazioni semplici
- Visualizzazione diretta dei dati all'utente

### Architettura N-Tier
- Più di tre livelli
- Maggiore complessità
- Possibile rallentamento delle prestazioni
- Flessibilità nella strutturazione
- Richiede più risorse per la manutenzione

## 💡 Conclusione
> L'architettura a tre livelli rappresenta un ottimo compromesso per la costruzione di progetti:
- Permette applicazioni complesse senza compromettere le prestazioni
- Facilita la gestione del progetto attraverso team specializzati
- Offre una buona scalabilità per la crescita dell'applicazione

### Punti chiave da ricordare:
- Separazione chiara delle responsabilità
- Facilità di manutenzione
- Bilanciamento tra complessità e prestazioni