# Cosa sono i server?

Un **server** è un computer o un programma che fornisce servizi ad altri computer e programmi, chiamati **client**, attraverso una rete.  
I server fanno parte dell’**architettura client-server**, in cui un client richiede qualcosa e il server risponde alla richiesta.  

Un esempio comune di server è il **web server**, dove il client (il browser) richiede una pagina web e il server la fornisce al browser.  

In questo articolo vedremo:
- cosa sono i server e i client
- come funzionano i server
- come si connettono a Internet
- esempi di sistemi operativi per server
- i diversi tipi di server

---

## Cos’è un client?

Un **client** è una macchina o un programma che dipende da un server per ottenere una risorsa o un servizio.  
Il client invia una richiesta al server per avere la risorsa o il servizio richiesto.  
La posizione fisica non ha importanza: client e server possono trovarsi in qualsiasi parte del mondo, purché siano collegati alla stessa rete (come Internet).

---

## Come funzionano i server

I server possono:
- condividere dati tra uno o più client
- condividere risorse (servizi o programmi) tra più client
- distribuire il carico di lavoro tra macchine collegate

Il funzionamento tipico è **a richiesta e risposta**.  
Ad esempio, in un web server:
1. L’utente inserisce un URL nel browser.
2. Se l’URL è valido, il server risponde inviando la pagina richiesta.
3. Il browser stabilisce una connessione, invia la richiesta e riceve i dati.

---

## Come i server si connettono a Internet

I client usano un **URL** per connettersi a un server su Internet.  
L’URL ha 4 componenti principali:

1. **Schema di connessione** – es. `https` (“Hypertext Transfer Protocol Secure”), il protocollo con cui browser e web server comunicano.
2. **Sottodominio** – es. `www`, che specifica un particolare server o risorsa.
3. **Nome di dominio** – es. `codecademy`, che identifica l’organizzazione o il sito.
4. **Dominio di primo livello (TLD)** – es. `.com`, che indica la tipologia di organizzazione.

**Esempio:** `https://www.codecademy.com`
- `https` → schema  
- `www` → sottodominio  
- `codecademy` → nome di dominio  
- `com` → TLD

**Passaggi di connessione:**
1. Il browser comunica con il provider di servizi Internet (ISP).
2. L’ISP interroga il **DNS** (Domain Name Server) per ottenere l’indirizzo IP del server.
3. Il DNS converte il nome di dominio in un indirizzo IP.
4. Con l’IP ottenuto, il browser si connette al server.
5. Il browser invia la richiesta dei file.
6. Il server risponde inviando i dati (es. HTML) della pagina richiesta.

---

## Sistemi operativi per server

Il sistema operativo usato dipende dalle esigenze del server. I più comuni sono:

### Windows Server
- Fornito da Microsoft  
- Supporta multitasking, interfaccia grafica, gestione della memoria virtuale  
- Permette la condivisione di file e l’esecuzione di contenuti multimediali  

### UNIX
- Multiutente, molto diffuso in ambienti client-server  
- Utilizzato da molti siti web per fornire servizi su Internet  

### Linux
- Open source, multiutente, multiprocesso  
- Ottime prestazioni in tempo reale, costi ridotti  
- Spesso scelto per motivi di sicurezza

---

## Tipi di server

Esistono diversi tipi di server in base all’uso:

1. **File server** – Memorizza file per più utenti, permettendo un accesso rapido e centralizzato.  
2. **Database server** – Gestisce database, consentendo di leggere o salvare dati.  
3. **Web server** – Fornisce pagine web ai browser dei client.  
4. **Mail server** – Gestisce e consegna email, come un “ufficio postale” digitale.  
5. **Application server** – Fornisce un ambiente software completo per l’esecuzione di applicazioni senza necessità di installazione lato client.  
6. **Proxy server** – Funziona da intermediario tra il client e Internet, inoltrando richieste e risposte.

---

## Conclusione

I server sono computer specializzati che forniscono servizi e risorse su una rete.  
Esistono diversi tipi di server, ciascuno con un compito specifico, e il loro funzionamento è alla base di gran parte delle tecnologie che usiamo ogni giorno.

