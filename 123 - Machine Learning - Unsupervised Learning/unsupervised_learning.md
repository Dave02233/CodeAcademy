# Introduzione all'Apprendimento Non Supervisionato

## Cos'è?
L'apprendimento non supervisionato identifica pattern da dati **non etichettati**, sfruttando le distribuzioni sottostanti delle feature per individuare cluster di similarità.

> A differenza del supervised learning (regressione, classificazione), qui non esiste una variabile target nota.

---

## Applicazioni Principali

- **Clustering**: raggruppare osservazioni simili (es. cluster di focolai di malattie, word cloud semanticamente correlate in NLP)
- **Riduzione della dimensionalità / Feature Extraction**: comprimere dataset ad alta dimensionalità prima di applicare algoritmi supervisionati
- **Etichettatura automatizzata**: categorizzare dati non etichettati, per poi applicare tecniche supervisionate

---

## Tecniche del Modulo

### 1. PCA – Principal Component Analysis
- Utilizzata principalmente per la **riduzione della dimensionalità**
- Permette di classificare immagini e rimuovere rumore
- Utile per pre-processare dati con molti sensori (es. IoT industriale)

### 2. K-Means Clustering
- Utilizzato principalmente per problemi di **clustering**
- Identifica gruppi naturali nei dati senza etichette
- Combinabile con PCA per estrazione di feature avanzata

---

## Obiettivi di Apprendimento

Al termine del modulo sarai in grado di:

1. Eseguire riduzione della dimensionalità usando PCA
2. Classificare immagini usando PCA
3. Trovare cluster nei dati usando K-Means
4. Estrarre feature combinando PCA e K-Means

---

## Note Pratiche (Contesto Industriale / IoT)

In sistemi di manutenzione predittiva, PCA è spesso usato per:
- Ridurre centinaia di segnali di sensori (temperatura, vibrazione, corrente) a poche componenti principali
- Preservare pattern indicativi di degradazione, rimuovendo rumore correlato
- Pre-processare i dati prima di applicare K-Means per identificare stati operativi anomali

---

*Fonte: Codecademy – Machine Learning Engineer Path, modulo "Unsupervised Learning Algorithms I"*
