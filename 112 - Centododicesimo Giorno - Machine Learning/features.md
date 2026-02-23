## Feature Engineering — Appunti rapidi

### Cos’è una feature
- Una **feature** è una proprietà misurabile del dataset usata come input del modello (variabile predittiva).
- Esempio: per prevedere le precipitazioni potresti usare temperatura, umidità, mese, altitudine, ecc.

### Cos’è la feature engineering
- Insieme di tecniche per:
- capire quali feature usare,
- trasformarle in una forma adatta al modello,
- ridurre problemi come troppe feature, feature ridondanti/correlate, feature poco informative, feature non nel formato giusto.
- Spesso i problemi emergono quando il modello “va male” e inizi la diagnostica.

### Perché serve (obiettivi / attributi di un buon modello)
- Performance: predire bene l’output (su dati noti e con prospettiva sui non visti).
- Runtime: tempi/risorse computazionali accettabili in training e in produzione.
- Interpretabilità: capire quali fattori guidano l’output (insight, non solo accuracy).
- Generalizzabilità: funzionare bene su dati nuovi/streaming e non “overfittare”.
- La feature engineering è come una “cassetta degli attrezzi” per migliorare uno o più di questi aspetti.

### Dove sta nel workflow ML
- Non è un passo unico e lineare: può avvenire prima, durante e dopo la modellazione.
- Tipicamente si intreccia con EDA (exploratory data analysis) e diagnosi del modello.

## 3 grandi famiglie di tecniche

### 1) Feature Transformation (prima del modello)
- Scopo: rendere le feature più adatte all’algoritmo; spesso migliora performance, runtime e interpretabilità.
- Tecniche tipiche:
- Scaling (standardizzazione/normalizzazione)
- Binning (discretizzazione)
- Trasformazioni logaritmiche
- Hashing
- One-hot encoding (codifica categoriche)

### 2) Dimensionality Reduction / Feature Extraction (spesso è un algoritmo ML)
- Idea: ridurre il numero di feature (alta dimensionalità) creando nuove feature “compresse”.
- Benefici: runtime più veloce, spesso performance migliore.
- Esempio: ridurre un problema da ~100 feature a <10 feature trasformate.
- Metodi: PCA, LDA, ecc.
- Trade-off: le nuove feature sono oggetti matematici, quindi spesso meno interpretabili.

### 3) Feature Selection (scegliere un sottoinsieme di feature originali)
- Mantiene le feature “così come sono” ⇒ alta interpretabilità.
- Tre categorie:

#### i) Filter methods (agnostici al modello)
- Filtrano feature con criteri statistici, utili come sanity check iniziale.
- Esempi:
- Correlazioni (Pearson, Spearman, …)
- \(\chi^2\)
- ANOVA
- Mutual Information

#### ii) Wrapper methods (ricerca “greedy” con training ripetuto)
- Provano subset diversi: scelgo feature → alleno → valuto → cambio subset → ripeto.
- Necessario un criterio di stop (n° feature o metrica).
- Esempi: Forward Selection, Backward Elimination, Sequential Floating.

#### iii) Embedded methods (durante il training del modello)
- La selezione/importanza emerge mentre il modello si adatta ai dati.
- Esempi:
- Regolarizzazione (Lasso, Ridge) per migliorare generalizzazione
- Importanza delle feature nei modelli ad albero (feature importance)

## Mini-mappa mentale
- Trasformo feature ⇒ le rendo “digeribili” al modello.
- Riduco dimensionalità ⇒ creo poche feature nuove ma meno interpretabili.
- Seleziono feature ⇒ tengo solo le originali migliori (più interpretabile).
