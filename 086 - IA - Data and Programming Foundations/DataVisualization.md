# Data Visualization: Dalla Relazione al Grafico

## Concetto Chiave

La scelta del grafico non è estetica ma funzionale: dipende dalla **relazione** specifica nei dati che si vuole evidenziare. Diversi grafici rispondono a diverse domande sullo stesso dataset.

## 1. Analisi Temporale (Change over Time)

Visualizzare come un valore cambia in un intervallo di tempo definito.

- **Obiettivo:** Mostrare trend, picchi o cali storici (es. vendite annuali).
- **Grafici Consigliati:**
  - **Line Chart:** Ideale per dati continui e molti punti temporali.
  - **Bar Chart (Verticale):** Meglio per confrontare valori discreti in pochi periodi specifici.
  - **Area Chart:** Utile per evidenziare il volume cumulativo nel tempo.
  - **Candlestick (Trading):** Specifico per dati finanziari (Open, High, Low, Close).

## 2. Parte del Tutto (Part-to-Whole)

Confrontare una porzione rispetto al totale (percentuali).

- **Obiettivo:** Mostrare la composizione di un dataset (es. % preferenze utente).
- **Grafici Consigliati:**
  - **Pie Chart:** Classico, ma sconsigliato se ci sono molte categorie o differenze minime.
  - **Donut Chart:** Variante della torta, visivamente più leggera.
  - **Waffle Chart:** Griglia di quadrati (es. 10x10), ottima per leggibilità precisa delle percentuali.
  - **Stacked Bar Chart:** Utile per mostrare la composizione di più categorie contemporaneamente.

## 3. Distribuzione (Distribution)

Analizzare la frequenza e la dispersione dei valori in una variabile.

- **Obiettivo:** Capire dove si concentrano i dati e identificare outlier (es. fasce di taglie scarpe).
- **Grafici Consigliati:**
  - **Istogramma:** Lo standard per vedere la forma della distribuzione (gaussiana, asimmetrica, ecc.).
  - **Box Plot (Box & Whisker):** Eccellente per sintesi statistica (mediana, quartili) e outlier.
  - **Violin Plot:** Combina box plot e densità di probabilità.

## 4. Correlazione (Correlation)

Confronto diretto tra due o più variabili per identificare relazioni.

- **Obiettivo:** Capire se all'aumentare di X, Y aumenta o diminuisce (es. temperatura vs vendite gelati).
- **Grafici Consigliati:**
  - **Scatterplot:** Il migliore per vedere cluster o trend lineari tra due variabili numeriche.
  - **Bubble Chart:** Uno scatterplot con una terza dimensione data dalla dimensione del punto.
  - **Heatmap:** Ottima per matrici di correlazione o dati densi cross-tabulari.

## 5. Ranking e Confronto (Nominal Comparison)

Confrontare valori tra categorie non ordinate.

- **Obiettivo:** Vedere chi è "primo", "ultimo" o confrontare grandezze (es. vendite per reparto).
- **Grafici Consigliati:**
  - **Bar Chart (Orizzontale):** Migliore del verticale se le etichette delle categorie sono lunghe.
  - **Lollipop Chart:** Variante del bar chart, più pulita visivamente per molti item.

## 6. Deviazione (Deviation)

Visualizzare quanto un valore si discosta da una linea di base o media.

- **Obiettivo:** Evidenziare surplus/deficit o profit/loss.
- **Grafici Consigliati:**
  - **Diverging Bar Chart:** Barre che partono da un asse centrale (positivo vs negativo).
  - **Bullet Graph:** Alternativa ai dashboard gauges per confrontare una misura con un target.

## 7. Classificazione per Dimensionalità dei Dati

Oltre al tipo di relazione, i grafici si scelgono in base al numero di variabili coinvolte.

### Analisi Univariata (1 Variabile)

Analizza una singola variabile isolata per descriverne le caratteristiche (frequenza, tendenza centrale, dispersione). Non cerca relazioni, ma descrive lo stato.

- **Domanda:** "Qual è la distribuzione dei voti?", "Qual è la media delle vendite?"
- **Grafici:** Istogramma, Box Plot, Pie Chart, Bar Chart (semplice conteggio).

### Analisi Bivariata (2 Variabili)

Mette in relazione due variabili per identificare dipendenze o correlazioni. È la base della maggior parte delle analisi "causa-effetto".

- **Domanda:** "La spesa pubblicitaria (X) influenza le vendite (Y)?", "Come cambia il fatturato nel tempo?"
- **Grafici:** Scatterplot (X vs Y), Line Chart (Tempo vs Valore), Bar Chart raggruppato.

### Analisi Multivariata (3+ Variabili)

Gestisce tre o più variabili contemporaneamente per vedere come interagiscono. Essenziale quando una relazione semplice (bivariata) è influenzata da fattori esterni.

- **Domanda:** "Come variano le vendite (Y) in base alla spesa (X) e alla dimensione del negozio (Z)?"
- **Grafici:**
  - **Bubble Chart:** Scatterplot dove la dimensione del punto è la 3ª variabile.
  - **Heatmap:** Matrice dove il colore rappresenta la 3ª variabile (Z) rispetto agli assi X e Y.
  - **Stacked Bar Chart:** Categoria (X), Valore (Y) e Sottogruppo (Z).
  - **3D Scatterplot:** (Da usare con cautela, spesso difficile da leggere).
