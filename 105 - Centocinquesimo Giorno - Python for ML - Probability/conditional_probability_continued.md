# Conditional Probability Continued

## Scenario: Test di Faringite (Strep Throat)

Vogliamo calcolare la probabilità di avere una malattia **dato un test positivo**.

## Dati Iniziali

**Prevalenza nella popolazione:**
- P(ST) = 0.20 → 20% ha la faringite
- P(NO ST) = 0.80 → 80% non ha la faringite

## Probabilità Condizionate del Test

**Se hai la malattia (Sensibilità):**
- P(+|ST) = 0.85 → 85% test positivo se malato
- P(-|ST) = 0.15 → 15% test negativo se malato

**Se non hai la malattia (Specificità):**
- P(-|NO ST) = 0.98 → 98% test negativo se sano
- P(+|NO ST) = 0.02 → 2% test positivo se sano

## Calcolo dei Quattro Risultati Possibili

Usiamo la **regola moltiplicativa**: P(A ∩ B) = P(A) · P(B|A)

$$P(\text{ST and +}) = 0.20 \times 0.85 = 0.17$$
$$P(\text{ST and -}) = 0.20 \times 0.15 = 0.03$$
$$P(\text{NO ST and +}) = 0.80 \times 0.02 = 0.016$$
$$P(\text{NO ST and -}) = 0.80 \times 0.98 = 0.784$$

**Verifica**: 0.17 + 0.03 + 0.016 + 0.784 = 1 ✓

## La Domanda Cruciale

Se una persona riceve un **test positivo**, qual è la probabilità che **abbia effettivamente la faringite**?

$$P(\text{ST}|+) = ?$$

**Osservazione**: Tra i test positivi abbiamo:
- 0.17 con malattia
- 0.016 senza malattia (falso positivo)
- **Totale test positivi**: 0.17 + 0.016 = 0.186

Questo problema porta a **Bayes' Theorem** 🎯

## Riassunto Tree Diagram

```
                    ┌─ ST (0.20) ─┬─ + (0.85) → P(ST,+) = 0.17
Popolazione ─┤
                    └─ NO ST (0.80) ─┬─ + (0.02) → P(NO ST,+) = 0.016
                                           └─ - (0.98) → P(NO ST,-) = 0.784
```
