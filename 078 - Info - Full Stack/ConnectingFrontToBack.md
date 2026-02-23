# Cosa sono il Front-End e il Back-End?

## Introduzione

A questo punto del tuo percorso, dovresti già avere familiarità con il funzionamento del **front-end** e del **back-end** di un'applicazione web quando operano individualmente. Per iniziare a costruire app più sofisticate, avrai bisogno di collegare il client e il server in modo che possano comunicare, creando quella che viene chiamata un'applicazione **full-stack**. In questa lezione, approfondiremo come il front-end e il back-end delle app comunicano tra loro e i diversi modi per distribuire un'applicazione web.

## La Distinzione tra Front-End e Back-End

Analizziamo rapidamente la distinzione tra questi due lati di un'applicazione.

### Front-End

Il **front-end** si riferisce alle caratteristiche visive di un'applicazione che un utente può vedere e con cui può interagire direttamente. Come minimo, gli sviluppatori front-end dovrebbero essere competenti in HTML, CSS e JavaScript. Gli sviluppatori front-end moderni saranno anche familiari con uno o più framework che aiutano nello styling e nella costruzione di layout front-end. **React**, **Angular** e **Vue** sono framework popolari per strutturare le interfacce utente, mentre **Bootstrap** e **Material UI** sono due librerie ben note che facilitano la progettazione di interfacce utente responsive.

### Back-End

Il **back-end** di un'app riguarda tutto ciò che gli utenti non possono vedere, ma che consente al sito web di funzionare, archiviare e recuperare dati. Gli sviluppatori utilizzano spesso framework come **Express** per costruire il back-end delle app web.

## Un'Analogia Utile: La Casa

Quando si contrastano il front-end e il back-end di un sito web, l'analogia di una casa si rivela particolarmente utile. Possiamo pensare al **front-end** come all'interno di una casa: la planimetria, la carta da parati, i mobili, la decorazione e l'illuminazione. D'altra parte, il **back-end** è tutto ciò che non vediamo dietro le pareti di una casa che la rende uno spazio funzionale e confortevole: l'impianto elettrico, il gas, l'impianto idraulico, internet e l'isolamento. Consulta il grafico sulla destra per un riferimento visivo.

## La Comunicazione tra Front-End e Back-End

Nelle applicazioni web, il **front-end** e il **back-end** comunicano attraverso un ciclo di **richiesta/risposta HTTP**. Per un ripasso su come il client e il server comunicano tramite HTTP, consulta la lezione "Setting up a Server with HTTP". Qui ci concentreremo sulle informazioni che vengono scambiate tra client e server.

### La Richiesta HTTP

Una richiesta HTTP dal client al server può essere suddivisa in:

- Una **linea iniziale** che include un **metodo HTTP**, il percorso della risorsa richiesta e il numero della versione HTTP.
- **Header** che forniscono al server informazioni aggiuntive sul mittente e sulla richiesta.
- Un **body**, se necessario. Generalmente, le richieste POST e PUT includeranno un body per inviare dati.

### La Risposta HTTP

Una volta che il server ha ricevuto la richiesta fatta dal front-end, costruisce una risposta da inviare al client. Una risposta HTTP può essere suddivisa in almeno due parti:

- Una **linea di stato** che indica se la richiesta è stata completata con successo.
- Una **serie di header** per fornire più contesto sulla risposta.

Spesso una risposta dal server contiene un body, che include i dati richiesti dal client. Generalmente, il server invierà indietro i seguenti tipi di dati:

- Documenti HTML
- Risorse statiche, come fogli di stile, file JavaScript e immagini
- Dati formattati
