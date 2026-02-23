# 🐍 Appunti: Introduzione a Pandas e NumPy

## 📑 Sommario
1.  **Setup e Installazione**: Come preparare l'ambiente.
2.  **NumPy**: Il motore di calcolo numerico.
3.  **Pandas**: Strumenti per la manipolazione dati (Series e DataFrames).
4.  **Confronto Chiave**: Liste Python vs NumPy vs Pandas.

---

## 1. Setup e Installazione

Pandas è costruito sopra NumPy, quindi NumPy è una dipendenza essenziale.

### Installazione
Se non si utilizza Anaconda (dove sono preinstallati), usare il terminale:

    # Tramite Conda
    conda install numpy
    conda install pandas

    # Tramite PIP
    pip install numpy
    pip install pandas

### Importazione Standard
Convenzioni universali per importare le librerie negli script o Jupyter Notebook:

    import numpy as np
    import pandas as pd

---

## 2. NumPy (Numerical Python)

Libreria open-source per operazioni numeriche efficienti su grandi quantità di dati.

### Oggetto Core: `ndarray`
*   **Definizione**: Array n-dimensionale (ndarray). Può essere un vettore (1D) o una matrice (multi-dimensionale).
*   **Vincolo**: Contiene elementi di un **unico tipo di dato**.
*   **Creazione**:
    
    list1 = [1, 2, 3, 4]
    array1 = np.array(list1) 
    # Output: [1 2 3 4]

### Vantaggi rispetto alle Liste Python
1.  **Efficienza**: Accesso agli elementi più rapido.
2.  **Operazioni Vettoriali (Broadcasting)**: È possibile eseguire operazioni matematiche su tutti i valori contemporaneamente senza usare cicli `for`.

    **Esempio Pratico (Negozio di giocattoli)**:
    Scontare tutti i prezzi di 2€:
    
    # Con NumPy (Veloce e pulito)
    toyPrices = np.array([5, 8, 3, 6])
    print(toyPrices - 2) 
    # Output: [3 6 1 4]

    # Con Liste Python (Lento e verboso)
    # Richiede un ciclo for manuale per aggiornare ogni elemento.

### Funzionalità Principali
*   Slicing e reshaping (cambio forma).
*   Splitting e combining (unione array).
*   Operazioni statistiche (min, max, mean).

---

## 3. Pandas

Libreria costruita sopra NumPy, progettata per essere lo strumento più flessibile per la manipolazione e l'analisi dati (simile a Excel o SQL ma programmabile).

### A. Pandas Series
*   **Cos'è**: Simile a un array NumPy 1D, ma con **indici etichettati**.
*   **Differenza chiave con NumPy**: In NumPy gli indici sono solo 0, 1, 2... In una Series puoi usare stringhe (es. nomi) come indici per accedere ai dati.
*   **Creazione**:
    
    ages = np.array([13, 25, 19])
    
    # Con indici custom
    series1 = pd.Series(ages, index=['Emma', 'Swetha', 'Serajh'])
    
    # Output visuale:
    # Emma    | 13
    # Swetha  | 25
    # Serajh  | 19
    # dtype: int64

### B. Pandas DataFrames
*   **Cos'è**: Una struttura tabellare (come un foglio di calcolo).
*   **Struttura**:
    *   Righe e Colonne hanno indici.
    *   Ogni **colonna** è essenzialmente una **Series**.
    *   Colonne diverse possono contenere tipi di dati diversi (es. una colonna Stringa, una Int), ma all'interno della stessa colonna il tipo deve essere uniforme.
*   **Funzionalità SQL-like**: Supporta join, merge, filter by, group by.
*   **Creazione**: Da CSV, SQL, Dizionari o Liste di Liste.

    dataf = pd.DataFrame([
        ['John Smith', '123 Main St', 34],
        ['Jane Doe', '456 Maple Ave', 28]
    ], columns=['name', 'address', 'age'])

### Manipolazione Indici
È possibile cambiare l'indice numerico di default (0, 1, 2...) con i valori di una colonna esistente per facilitare la ricerca:

    dataf.set_index('name')
    # Ora 'name' è l'indice della riga, non più una colonna dati semplice.

---

## 4. Sintesi delle Differenze

| Caratteristica | Lista Python | NumPy Array (`ndarray`) | Pandas Series | Pandas DataFrame |
| :--- | :--- | :--- | :--- | :--- |
| **Dimensioni** | 1D (nidificabile) | N-Dimensioni | 1D | 2D (Tabellare) |
| **Tipi Dati** | Misti | Singolo Tipo (Omogeneo) | Singolo Tipo | Misti (per colonna) |
| **Indici** | Solo interi (0,1...) | Solo interi (0,1...) | Etichette Custom | Etichette Custom (Row/Col) |
| **Performance**| Lenta sui loop | Altissima (Vettorizzata) | Alta (basata su NP) | Alta |
| **Uso Tipico** | General purpose | Calcolo Matematico | Dati associativi | Dati strutturati/DB |

