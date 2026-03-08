````markdown
# Feature Selection — Riepilogo

## Cos'è e perché farlo
Feature selection = selezionare un sottoinsieme di feature rilevanti prima di addestrare il modello.

Obiettivi:
- Eliminare feature ridondanti/irrilevanti che aggiungono rumore
- Migliorare accuracy e velocità del modello
- Rendere il modello più interpretabile

---

## 1. Filter Methods
Filtrano le feature **prima** del training basandosi su criteri statistici, senza coinvolgere nessun modello.

**Pro:**
- Computazionalmente economici
- Funzionano con qualsiasi modello

**Contro:**
- Difficile catturare relazioni multivariate (una feature debole da sola può essere utile in combinazione)
- Non ottimizzati per un modello specifico

**Esempi:** Variance threshold, Correlation, Mutual Information

---

## 2. Wrapper Methods
Usano un modello per **valutare le performance** di ogni sottoinsieme di feature tramite un algoritmo di ricerca.

**Pro:**
- Trovano il set ottimale per un problema specifico
- Tengono conto delle relazioni multivariate

**Contro:**
- Computazionalmente costosi (il modello viene ri-addestrato per ogni sottoinsieme)

**Esempi:** Forward/Backward/Bidirectional Sequential Selection, Recursive Feature Elimination (RFE)

---

## 3. Embedded Methods
La feature selection avviene **durante** il training del modello, non prima né dopo.

**Pro:**
- Ottimizzano le feature per il modello specifico
- Meno costosi dei wrapper perché selection e training avvengono insieme

**Esempi:** Regularization (Lasso/Ridge), Tree-based Feature Importance

---

## Confronto rapido

| Metodo | Quando avviene | Costo computazionale | Multivariate |
|---|---|---|---|
| Filter | Prima del training | Basso | No |
| Wrapper | Iterativo con il modello | Alto | Sì |
| Embedded | Durante il training | Medio | Sì |
````