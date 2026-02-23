# Guida Pratica: Correlazione tra Variabili Categoriche (Chi-Square)

## 1. Il Concetto: Tabella di Contingenza

Quando lavoriamo con variabili **categoriche** (es. _Turno di lavoro_, _Tipo di errore_, _Nome Fornitore_) non possiamo usare la correlazione standard (Pearson) che serve per i numeri. Dobbiamo usare la **frequenza**, cioè contare quante volte le categorie si incrociano.

**Esempio Industriale:** Vogliamo sapere se il _Turno_ influenza il _Tipo di Guasto_.

| Turno (A)   | Guasto Elettrico (B) | Guasto Meccanico (B) |
| :---------- | :------------------: | :------------------: |
| **Mattina** |    20 (Osservati)    |    5 (Osservati)     |
| **Notte**   |    5 (Osservati)     |    15 (Osservati)    |

La **Tabella di Contingenza** (o _Crosstab_) è questa matrice di conteggi.

---

## 2. Il Test Chi-Quadro (Chi-Squared)

Il test risponde alla domanda:

> _"I numeri che vedo (Osservati) sono diversi da quelli che mi aspetterei se le variabili fossero totalmente indipendenti (Attesi)?"_

Il test calcola due valori chiave:

1. **Chi2 Statistic (La Distanza):**
    - Un numero che rappresenta la discrepanza totale.
    - **Alto:** Le variabili sono correlate (quello che vedi è "strano").
    - **Basso (vicino a 0):** Le variabili sono indipendenti (quello che vedi è normale).

2. **P-value (L'Affidabilità):**
    - La probabilità che questa discrepanza sia dovuta solo al caso.

---

## 3. Valutazione (La Regola del 0.05)

Per decidere se la correlazione è reale, guardiamo il **p-value**.

- **P-value < 0.05 (Significativo):**
  - ✅ **C'è correlazione.**
  - Rifiutiamo l'ipotesi nulla. Esiste un legame statistico tra le due variabili (es. il turno di notte _causa_ più guasti specifici).
- **P-value > 0.05 (Non Significativo):**
  - ❌ **Nessuna correlazione.**
  - Le differenze sono casuali. Non hai prove sufficienti per dire che una variabile influenza l'altra.

---

## 4. Implementazione Python

```python
import pandas as pd
from scipy.stats import chi2_contingency

# 1. Dataset Esempio (Log Manutenzione)
data = {
    'Turno': ['Mattina', 'Notte', 'Mattina', 'Notte', 'Pomeriggio', 'Notte'],
    'Guasto': ['Meccanico', 'Software', 'Meccanico', 'Software', 'Elettrico', 'Software']
}
df = pd.DataFrame(data)

# 2. Creazione Tabella di Contingenza (Crosstab)
contingency_table = pd.crosstab(df['Turno'], df['Guasto'])
print("Tabella Osservata:\n", contingency_table)

# 3. Calcolo Chi-Quadro
# chi2: statistica, p: p-value
chi2, p, dof, expected = chi2_contingency(contingency_table)

print(f"P-value: {p:.5f}")

# 4. Interpretazione Automatica
if p < 0.05:
    print("RISULTATO: Correlazione TROVATA. Le variabili sono dipendenti.")
else:
    print("RISULTATO: Nessuna correlazione. I dati sono distribuiti casualmente.")
```
