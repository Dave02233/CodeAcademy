# Welcome to Exploratory Data Analysis (EDA)

> _"L'esplorazione è la curiosità messa in azione."_
>
> — **Don Walsh**, Oceanografo americano e pioniere delle profondità marine (primo uomo a scendere nel Challenger Deep).

L'**Exploratory Data Analysis** (EDA) è proprio questo: essere curiosi riguardo ai propri dati. Significa scoprire cosa c'è dentro, quali pattern si nascondono e quali relazioni esistono tra le variabili.

L'EDA è una fase essenziale del processo di Data Science e costruisce le fondamenta per i tuoi progetti: ciò che impari durante questa fase determinerà quali analisi potrai svolgere e quali modelli potrai costruire. Se fatta bene, ti aiuta a formulare nuove domande e svela aspetti dei dati che altrimenti sarebbero rimasti invisibili.

---

### Cosa imparerai in questa unit

In questo modulo inizierai a costruire competenza con le statistiche descrittive e i tipi di variabili. Al termine del corso sarai in grado di:

- Identificare i diversi tipi di variabili.
- Determinare quali analisi sono appropriate in base al tipo di variabile.
- Riassumere una singola variabile e la relazione tra due variabili.
- Ispezionare e pulire un dataset.

---

### Gli Obiettivi della EDA

A seconda di cosa vuoi fare con i tuoi dati, la EDA può assumere molte forme diverse. Tuttavia, gli obiettivi principali sono generalmente:

1. **Scoprire la struttura dei dati** e determinare come sono codificati.
2. **Ispezionare e "prendere confidenza"** con i dati riassumendoli e visualizzandoli.
3. **Rilevare anomalie**, come outlier o dati mancanti, e decidere come gestirli.
4. **Trovare nuove strade** per l'analisi e ulteriori ricerche.
5. **Preparare il terreno per il machine learning**, inclusi:
    - Verifica delle assunzioni.
    - Selezione delle feature.
    - Scelta del metodo appropriato.

---

### Tecniche di EDA

Proprio come gli obiettivi, anche le tecniche variano. Generalmente, il processo di EDA coinvolge strategie che rientrano in tre categorie principali:

1. Ispezione dei dati (Data Inspection)
2. Riepilogo numerico (Numerical Summarization)
3. Visualizzazione dei dati (Data Visualization)

#### 1. Ispezione dei Dati (Data Inspection)

L'ispezione è il primo passo fondamentale. Può illuminare potenziali problemi o suggerire direzioni di indagine.
Ad esempio, usando la libreria **pandas** in Python, potremmo usare il metodo `.head()` per stampare le prime cinque righe di un dataset:

    print(data.head())

| Student Name | Favorite Class | Age | Hours of Sleep | Hours Spent Studying |
| :----------- | :------------- | :-- | :------------- | :------------------- |
| John         | Math           | 9   | 9              | 1                    |
| Sophie       | Statistics     | 17  | 7.5            | 4                    |
| Alex         | English        | 12  | 8              | 3                    |
| Liam         | Statistics     | 18  | nan            | 4.5                  |
| Colin        | Math           | 18  | 6.5            | 6.5                  |

**Cosa notiamo da questo output?**

- **Variabili quantitative:** Notiamo che `Hours of Sleep` è una variabile quantitativa. Per riassumerla, dovremo assicurarci che sia memorizzata come `int` o `float`.
- **Dati mancanti:** C'è almeno un caso di dato mancante (Liam), che appare memorizzato come `nan` (Not a Number). Il prossimo passo sarà indagare quanto sono diffusi i dati mancanti e decidere come gestirli.

#### 2. Riepilogo Numerico (Numerical Summarization)

Una volta ispezionati i dati, i riepiloghi numerici sono un ottimo modo per condensare le informazioni.

- **Per dati numerici:** Ci danno un senso di scala, dispersione e tendenza centrale (media, mediana).
- **Per dati categorici:** Ci danno informazioni sul numero di categorie e la loro frequenza.

In pandas, possiamo ottenere rapidamente una collezione di statistiche usando il metodo `.describe()`:

    data.describe(include='all')

|            | Student Name | Favorite Class | Age   | Hours of Sleep | Hours Spent Studying |
| :--------- | :----------- | :------------- | :---- | :------------- | :------------------- |
| **count**  | 250          | 250            | 250   | 250            | 250                  |
| **unique** | 177          | 15             | NaN   | NaN            | NaN                  |
| **top**    | Kevin        | Math           | NaN   | NaN            | NaN                  |
| **freq**   | 12           | 23             | NaN   | NaN            | NaN                  |
| **mean**   | NaN          | NaN            | 13.75 | 7.89           | 4.34                 |
| **std**    | NaN          | NaN            | 1.68  | 0.3            | 0.6                  |
| **min**    | NaN          | NaN            | 8     | 4.5            | 0.5                  |
| **25%**    | NaN          | NaN            | 10.3  | 5.6            | 1.47                 |
| **50%**    | NaN          | NaN            | 13.5  | 7.6            | 4.32                 |
| **75%**    | NaN          | NaN            | 17    | 9.7            | 6.5                  |
| **max**    | NaN          | NaN            | 23    | 11             | 10.5                 |

**Analisi della tabella:**
Vediamo che ci sono 177 nomi unici, con "Kevin" che è il più comune (frequenza 12). L'età media degli studenti è di 13,75 anni, con un range che va dagli 8 ai 23 anni.

> **Mini Esempio (Media vs Mediana):**
> Se stai analizzando stipendi o prezzi delle case, la distribuzione è spesso "sbilanciata" con pochi valori altissimi. In quel caso, guardare il 50% (la **mediana**) descrive meglio il "valore tipico" rispetto alla media, che viene trascinata verso l'alto dagli outlier. Diventare fluente nel capire _quando_ usare quale metrica è essenziale.

#### 3. Visualizzazione dei Dati (Data Visualization)

Mentre i riepiloghi numerici condensano l'informazione, i riepiloghi visivi forniscono contesto e dettagli immediati.
Esistono molti tipi di visualizzazioni utili per la EDA:

- **Istogrammi:** Permettono di ispezionare la distribuzione di una feature quantitativa (es. forma della curva, skewness, multimodalità). Un istogramma sulla lunghezza dei nomi degli studenti potrebbe mostrarci che la media è di 5-6 caratteri.
- **Scatterplot (Grafici a dispersione):** Utili per investigare le relazioni tra più feature. Ad esempio, uno scatterplot potrebbe mostrare la relazione tra _Ore di studio_ e _Ore di sonno_, rivelando se esiste una correlazione positiva o negativa.

---

### La EDA come processo ciclico

Sebbene la EDA venga comunemente eseguita all'inizio di un progetto — prima di qualsiasi analisi o creazione di modelli — ti ritroverai spesso a rivisitarla.
È molto comune che emergano nuove domande e problemi _durante_ un'analisi. La EDA è anche uno strumento eccellente per il **tuning dei modelli** predittivi al fine di migliorarne l'accuratezza. È quindi utile pensare alla EDA come a un **ciclo** piuttosto che a un processo lineare nel workflow della data science.

### Conclusione

Sviluppare padronanza con statistiche descrittive e tipi di variabili ti rende più facile rispondere a domande sui dati, decidere quali analisi eseguire e capire quali modelli sono realistici. L'EDA non è solo un passaggio preliminare, ma una mentalità continua di curiosità verso i dati.
