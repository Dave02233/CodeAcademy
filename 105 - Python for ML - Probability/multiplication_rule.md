# Multiplication Rule

## Definizione
La **regola moltiplicativa** calcola la probabilità che due eventi A e B si verifichino **simultaneamente** (entrambi).

Notazione: **P(A and B)** o P(A ∩ B)

## Formula Generale
$$P(A \text{ and } B) = P(A) \cdot P(B|A)$$

Usa la probabilità condizionata di B dato che A è accaduto.

## Eventi Dipendenti (senza rimessa)

**Esempio**: Sacchetto con 5 marmi (2 blu, 3 rossi). Estraiamo 2 marmi **senza rimessa**.

Probabilità di estrarre **blu primo AND blu secondo**:

$$P(\text{Blu 1°} \cap \text{Blu 2°}) = P(\text{Blu 1°}) \cdot P(\text{Blu 2°|Blu 1°})$$

$$P(\text{Blu 1°} \cap \text{Blu 2°}) = \frac{2}{5} \cdot \frac{1}{4} = \frac{2}{20} = \frac{1}{10}$$

Dopo il primo marmo blu: rimangono 4 marmi (1 blu, 3 rossi)

### Tree Diagram (Diagramma ad albero)
Proprietà:
- Ogni ramo = sequenza di eventi
- Somma probabilità rami terminali = 1
- **Moltiplicare lungo i rami** per calcolare probabilità di ogni percorso

## Eventi Indipendenti (con rimessa)

Se gli eventi sono **indipendenti**: $P(B|A) = P(B)$

La formula si semplifica:
$$P(A \text{ and } B) = P(A) \cdot P(B)$$

**Esempio**: Lanciamo una moneta 2 volte
- P(Evento A) = Croce al 1° lancio = 0.5
- P(Evento B) = Croce al 2° lancio = 0.5
- P(A and B) = 0.5 · 0.5 = **0.25**

## Riassunto

| **Tipo** | **Formula** | **Condizione** |
|---|---|---|
| **Dipendenti** | P(A ∩ B) = P(A) · P(B\|A) | P(B\|A) ≠ P(B) |
| **Indipendenti** | P(A ∩ B) = P(A) · P(B) | P(B\|A) = P(B) |
