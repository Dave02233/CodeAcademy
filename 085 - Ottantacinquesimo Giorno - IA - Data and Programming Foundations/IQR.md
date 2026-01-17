# Intervallo Interquartile (IQR)

L'**IQR** (Interquartile Range) è una misura statistica che ci dice quanto sono sparpagliati i dati nella "pancia" della distribuzione, ignorando gli estremi.

## 1. Il Concetto Fondamentale: I Quartili

Per capire l'IQR, devi prima dividere i tuoi dati ordinati in 4 parti uguali (25% ciascuna):

1. **Q1 (Primo Quartile):** Il valore sotto il quale cade il 25% dei dati "più bassi".
2. **Q2 (Mediana):** Il valore esatto nel mezzo (50%).
3. **Q3 (Terzo Quartile):** Il valore sotto il quale cade il 75% dei dati (o sopra il quale sta il 25% dei "migliori/più alti").

## 2. La Formula

\[ \text{IQR} = Q3 - Q1 \]

In pratica: stai calcolando la distanza tra l'inizio del "top 25%" e la fine del "bottom 25%".

- **Cosa rappresenta:** La lunghezza dell'intervallo che contiene il **50% centrale** dei tuoi dati.

## 3. Perché usarlo al posto della Deviazione Standard?

La differenza chiave è la **robustezza**.

- **Deviazione Standard:** È "permalosa". Se hai anche solo un valore folle (es. un miliardario in una statistica sui redditi di quartiere), la deviazione schizza alle stelle perché calcola la distanza dalla media.
- **IQR:** È "indifferente". Guarda solo chi sta in mezzo. Se il valore più alto raddoppia, l'IQR non cambia di una virgola, perché Q3 e Q1 restano identici.

## 4. Esempio Pratico: Identificare gli Outlier

L'uso più famoso dell'IQR è nel **Box Plot** per scovare i dati anomali.
Si definiscono "Outlier" i valori che sono troppo lontani dal centro. Quanto lontani?

- **Limite Basso:** \( Q1 - 1.5 \times \text{IQR} \)
- **Limite Alto:** \( Q3 + 1.5 \times \text{IQR} \)

Tutto ciò che sta fuori da questi recinti è considerato un'anomalia statistica.

---

### Riassunto visivo (Box Plot)

Immagina un rettangolo (il box):

- Il lato sinistro è **Q1**.
- Il lato destro è **Q3**.
- La larghezza del rettangolo è l'**IQR**.
- La linea in mezzo al rettangolo è la **Mediana (Q2)**.

# Calcolo Rapido Outlier con IQR

1. **Trova i Confini (Quartili)**
    - **Q1 (25%):** Il numero che chiude il primo quarto dei dati (es. su 100 dati, il 25°).
    - **Q3 (75%):** Il numero che chiude il terzo quarto (es. su 100 dati, il 75°).

2. **Calcola l'IQR (la pancia)**
    - `IQR = Q3 - Q1`

3. **Trova i "Recinti" (Whiskers)**
    - Tutto ciò che è **MINORE DI**: `Q1 - (1.5 * IQR)`
    - Tutto ciò che è **MAGGIORE DI**: `Q3 + (1.5 * IQR)`

👉 **Risultato:** Qualsiasi numero fuori dai recinti è un **OUTLIER** (anomalia).
