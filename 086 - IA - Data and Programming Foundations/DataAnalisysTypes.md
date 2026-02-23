# Tipi di Data Analysis (5)

## Descriptive analysis (Analisi descrittiva)

Riassume cosa è successo usando statistiche e aggregazioni (medie, conteggi, percentuali, KPI). Serve a fotografare lo stato dei dati senza spiegare il perché.

## Exploratory analysis (Analisi esplorativa)

Esplora i dati per scoprire pattern, anomalie, relazioni e ipotesi. È iterativa e orientata a “capire cosa c’è dentro” prima di modellare o concludere.

## Inferential analysis (Analisi inferenziale)

Usa un campione per trarre conclusioni su una popolazione (es. stime, intervalli di confidenza, test d’ipotesi). Serve per generalizzare risultati con un grado di incertezza quantificato.

## Causal analysis (Analisi causale)

Cerca di stabilire se X causa Y (non solo se è correlata). Tipicamente richiede disegni sperimentali o quasi-sperimentali (A/B test, difference-in-differences, strumenti) e un controllo serio dei confondenti.

## Predictive analysis (Analisi predittiva)

Stima cosa è probabile accada in futuro (forecasting o classificazione) usando modelli statistici o ML. L’obiettivo principale è l’accuratezza predittiva e la capacità di generalizzare su dati nuovi.

### Inferenziale vs Predittiva: Qual è la differenza?

Anche se entrambe usano la statistica per dire qualcosa che non è direttamente osservabile, il loro **obiettivo** è diverso:

- **Analisi Inferenziale (Inferential):**
  - **Obiettivo:** Capire la **Popolazione** attuale.
  - **Domanda:** "Posso dire che X è vero per _tutti_, guardando solo questo piccolo campione?"
  - **Focus:** **Generalizzazione**. Vuole estendere una verità dal particolare (campione) al generale (popolazione) con un margine di errore calcolato (es. sondaggi elettorali) [web:2][web:26].

- **Analisi Predittiva (Predictive):**
  - **Obiettivo:** Indovinare il **Futuro** (o un dato mancante).
  - **Domanda:** "Dati questi valori di oggi, quale sarà il valore di domani?"
  - **Focus:** **Accuratezza futura**. Usa i dati storici per addestrare un modello che "indovini" il prossimo punto, preoccupandosi meno di _perché_ funziona e più di _quanto_ ci azzecca (es. previsione prezzi azioni, meteo) [web:20][web:23].

**In sintesi:** L'inferenziale guarda "dal piccolo al grande" (spaziale/popolazione), la predittiva guarda "dal passato al futuro" (temporale).
