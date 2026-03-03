# Decision Tree (Albero Decisionale)

Un **Decision Tree** è un modello di *machine learning supervisionato* utilizzato per compiti di **classificazione** o **regressione**. Si chiama “albero” perché la sua struttura si dirama come un albero, partendo da una **radice (root)** e suddividendosi in **rami (branches)** fino ad arrivare alle **foglie (leaves)**.

## Come viene creato

1. **Dati di addestramento:**  
   Il modello parte da un insieme di dati etichettati (*training set*), in cui ogni esempio presenta uno o più attributi (feature) e una categoria target o etichetta.  
   Tu decidi **quali feature includere** (es. `voto_medio`, `ore_studio`, `sonno`, ecc.), ma **non dici a mano quale feature usare in ogni nodo**.

2. **Scelta del primo split (e successive):**  
   Il processo inizia con tutti i dati alla radice. L’algoritmo valuta **tutte le feature disponibili** e sceglie la **miglior feature** per suddividere i dati in sottoinsiemi più omogenei rispetto all’etichetta, usando una metrica come:
   - **Impurità di Gini** (Gini impurity), oppure  
   - **Information Gain / Entropia**.  
   
   Esempio: nel dataset di studenti, la prima suddivisione potrebbe essere basata su `voto_medio ≥ 9?`.  
   Dopodiché, ogni sottoinsieme viene trattato come un nuovo “mini‑dataset”:  
   - per ogni sottoinsieme, l’algoritmo **riesamina tutte le feature** (anche quelle già usate, se non limitate),  
   - sceglie la feature che **migliora di più** l’omogeneità delle etichette in quel sottoinsieme.  
   
   In pratica:
   - **Tu scegli le feature globali** (es. quali colonne includere nel modello),  
   - **Il modello sceglie da solo quale feature usare in ogni nodo**, a ogni livello.

3. **Ripetizione del processo fino a “quasi tutta la stessa classe”:**  
   Il processo continua finché:
   - i dati in un nodo appartengono **quasi tutti alla stessa classe** (es. 90% “A”, 10% “non‑A”),  
   - l’**impurità** (Gini o entropia) è molto bassa, quindi lo split non darebbe più un miglioramento significativo.  
   
   Quando un nodo è già “abbastanza puro”, l’algoritmo **non lo splitta più** e lo trasforma in **foglia**, assegnando la classe più frequente tra i dati di addestramento presenti in quel nodo.

4. **Foglie e classificazione:**  
   Ogni foglia rappresenta una decisione finale.  
   Quando un nuovo dato attraversa l’albero, segue le regole definite dai nodi (es. “`voto_medio ≥ 9?` → sì / no”) fino a giungere a una foglia, dove assume la classificazione più frequente nei dati di addestramento di quella foglia.

5. Profondità massima e numero minimo di campioni  
   Il processo si ferma anche se:
   - si raggiunge una **profondità massima** (massimo numero di livelli dell’albero), oppure  
   - il numero di campioni in un nodo scende sotto una **soglia minima** (divieto di split o foglie troppo piccole).  
   Questi criteri evitano che l’albero diventi troppo profondo e “impari a memoria” i dati, riducendo il **rischio di overfitting**.

## Esempio intuitivo

Immagina di voler predire se uno studente prenderà un **A**:
- **Nodo 1:** “`voto_medio ≥ 9?`”  
  - **Sì →** probabilmente prenderà un A.  
  - **No → Nodo 2:** “`ore_studio_settimanali ≥ 10?`”  
    - **Sì →** potrebbe prendere un A.  
    - **No →** probabilmente non prenderà un A.

## Obiettivo

La fase di “apprendimento” consiste nel trovare **la sequenza di split ottimale** — ovvero le feature e i punti di taglio — che permettano di classificare i dati nel modo più accurato e generalizzabile possibile.
