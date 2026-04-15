# Loss function e Lasso

Una loss function serve a misurare quanto il modello sbaglia rispetto ai valori reali, così l'algoritmo può aggiornare i parametri e ridurre l'errore durante l'addestramento [web:1]. In pratica, è la funzione che guida il processo di apprendimento del modello [web:1].

## A cosa serve

Quando alleni un modello, vuoi trovare i parametri che minimizzano l'errore tra previsione e realtà [web:1]. La loss function trasforma questo errore in un valore numerico che l'algoritmo cerca di ridurre passo dopo passo [web:1].

## Cos'è Lasso

Lasso significa *Least Absolute Shrinkage and Selection Operator* ed è una tecnica di regolarizzazione usata soprattutto nella regressione [web:2]. Rispetto a una loss function standard, aggiunge una penalità L1, cioè la somma dei valori assoluti dei coefficienti del modello [web:2][web:5].

In forma intuitiva:

`loss totale = errore del modello + lambda * somma dei valori assoluti dei coefficienti`

Il parametro `lambda` controlla quanto pesa la penalizzazione: se è piccolo, il modello si comporta più vicino a una regressione standard; se è grande, tende a ridurre molto i coefficienti [web:2].

## Come viene utilizzata

Lasso viene usata durante l'addestramento per trovare coefficienti che non solo riducano l'errore, ma mantengano anche il modello più semplice [web:2][web:5]. Questa penalizzazione spinge alcuni coefficienti esattamente a zero, eliminando automaticamente le variabili meno utili [web:5][web:6].

## Feature selection

Sì: Lasso è molto usata per la **feature selection** perché può azzerare le feature poco importanti [web:5][web:6]. Se il coefficiente di una variabile diventa zero, quella variabile può essere considerata esclusa dal modello [web:5].

Questo la rende utile quando:
- hai molte feature;
- alcune sono ridondanti;
- vuoi un modello più interpretabile;
- vuoi ridurre il rumore nei dati [web:3][web:6].

## Overfitting

Lasso non serve solo alla feature selection: viene anche usata per limitare l'overfitting, perché penalizza modelli troppo complessi [web:2][web:5]. Riducendo o annullando coefficienti non necessari, il modello tende a generalizzare meglio sui dati nuovi [web:2][web:5].

## Differenza con Ridge

La differenza principale è questa:
- **Lasso (L1)** può portare alcuni coefficienti esattamente a zero, quindi fa anche selezione automatica delle feature [web:5].
- **Ridge (L2)** riduce i coefficienti, ma in genere non li azzera del tutto [web:3][web:12].

Per questo motivo:
- Lasso è utile quando vuoi anche scegliere le feature più rilevanti [web:5][web:6].
- Ridge è utile quando vuoi tenere tutte le feature ma controllare la complessità del modello [web:3].

## In sintesi

Una loss function misura l'errore del modello e guida l'ottimizzazione [web:1]. Lasso è una loss regolarizzata che aggiunge una penalità L1 per semplificare il modello, ridurre l'overfitting e fare feature selection automatica [web:2][web:5][web:6].