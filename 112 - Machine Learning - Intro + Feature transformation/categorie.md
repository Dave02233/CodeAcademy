### Categorie del Machine Learning

Il Machine Learning si divide principalmente in due grandi rami: l'**Apprendimento Supervisionato (Supervised Learning)** e l'**Apprendimento Non Supervisionato (Unsupervised Learning)**.

#### Apprendimento Supervisionato

Nell'apprendimento supervisionato, forniamo al sistema dei dati che sono già "etichettati" (labeled). Questo significa che, durante la fase di addestramento, diamo al programma sia i dati di input sia l'output atteso. L'obiettivo è che il sistema impari a prevedere l'output partendo dai nuovi dati in ingresso.

*   **Esempio (Rilevamento Frodi):** Un algoritmo riceve un elenco di transazioni con carta di credito. Per ciascuna di esse, il sistema sa già quali sono state fraudolente e quali no (etichette). Imparando da questi esempi, il programma sarà in grado di prevedere se una *nuova* transazione è legittima o un tentativo di frode.

I problemi di apprendimento supervisionato si suddividono ulteriormente in due sottocategorie:

##### 1. Regressione

Nei problemi di regressione, l'obiettivo è prevedere un valore in output che sia **continuo** (un numero).

*   **Esempi:**
    *   Qual è il prezzo di una casa a New York?
    *   Quale sarà il valore di una specifica criptovaluta domani?
*   **Caso d'uso (Settore Immobiliare):** Un'agenzia costruisce un modello di *regressione lineare* per stimare il prezzo d'affitto degli appartamenti a New York. Il modello utilizza due variabili di input: la metratura (mq) dell'appartamento e il numero di furti avvenuti nel quartiere durante l'ultimo anno. Il risultato della previsione sarà un numero (es. € 2.500/mese).

##### 2. Classificazione

Nei problemi di classificazione, l'obiettivo è prevedere un valore in output che appartenga a un numero **discreto** di categorie o classi.

*   **Esempi:**
    *   Questa immagine raffigura un essere umano o un cyborg? (Umano / Cyborg)
    *   Questa email è spam o no? (Spam / Non Spam)
    *   Il motore è guasto o funzionante? (Guasto / Funzionante)

---

#### Apprendimento Non Supervisionato

Nell'apprendimento non supervisionato, i dati forniti al sistema **non hanno etichette**. L'algoritmo non sa cosa sta guardando e non c'è un "risultato corretto" da prevedere. L'obiettivo dell'algoritmo è esplorare i dati grezzi per trovare autonomamente schemi nascosti, relazioni o strutture al loro interno.

La tecnica principale utilizzata è il **Clustering** (raggruppamento).

##### Clustering

Il clustering serve a dividere i dati in gruppi (cluster) in modo che gli elementi all'interno dello stesso gruppo siano simili tra loro e diversi da quelli degli altri gruppi.

*   **Esempi:**
    *   Segmentazione della clientela: Raggruppare i clienti di un e-commerce in base alle loro abitudini di acquisto per creare campagne marketing mirate, senza sapere a priori quali siano queste categorie.
    *   Raggruppare articoli di giornale simili per argomento, senza che nessuno li abbia prima etichettati come "Sport", "Politica" o "Economia".
*   **Caso d'uso (Automazione Industriale):** Analizzando i log di rete e il traffico OPC UA di un impianto, un algoritmo di clustering potrebbe identificare anomalie nel comportamento dei sensori o raggruppare macchinari che mostrano profili di usura simili, anche senza avere uno storico dei guasti passati.
