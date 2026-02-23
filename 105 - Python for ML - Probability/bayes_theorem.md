# Bayes' Theorem

## Il Problema

Un paziente riceve un **test positivo** per la faringite. La domanda è:

**Qual è la probabilità che il paziente abbia DAVVERO la faringite?**

Nota: Il test NON è perfetto! Può dare falsi positivi.

## La Formula (in parole semplici)

$$P(\text{Malattia}|\text{Test +}) = \frac{P(\text{Test +}|\text{Malattia}) \times P(\text{Malattia})}{P(\text{Test +})}$$

Dove:
- **P(Malattia|Test +)** = quello che vogliamo trovare
- **P(Test +|Malattia)** = probabilità di test positivo SE hai la malattia (sensibilità)
- **P(Malattia)** = probabilità di avere la malattia PRIMA del test (prevalenza)
- **P(Test +)** = probabilità di ottenere un test positivo (da qualsiasi motivo)

## Esempio: Test di Faringite - Spiegazione Passo per Passo

### Passo 1: I Fatti (dalla popolazione)

**Nella popolazione generale:**
- 20% ha la faringite (ST)
- 80% NON ha la faringite (NO ST)

**Quando fai il test:**
- Se HAI la malattia: test positivo 85% delle volte (accurato)
- Se NON HAI la malattia: test positivo solo 2% delle volte (falso positivo!)

**In numeri:**
- P(Test +|ST) = 0.85
- P(Test +|NO ST) = 0.02
- P(ST) = 0.20
- P(NO ST) = 0.80

### Passo 2: Calcola quanti test positivi ci sono in una popolazione di 1000 persone

Immagina 1000 persone:

**Le 200 persone che HANNO la malattia (20%):**
- 200 × 0.85 = **170 test positivi** (veri positivi) ✓
- 200 × 0.15 = 30 test negativi (falsi negativi)

**Gli 800 che NON hanno la malattia (80%):**
- 800 × 0.02 = **16 test positivi** (falsi positivi) ✗
- 800 × 0.98 = 784 test negativi (veri negativi)

**Totale test positivi**: 170 + 16 = **186**

### Passo 3: Applica Bayes

Se tu ricevi un test positivo, sei uno di questi 186 positivi.

Quanti di questi 186 hanno DAVVERO la malattia?
- 170 su 186!

$$P(\text{ST}|\text{Test +}) = \frac{170}{186} = 0.914 = \boxed{91.4\%}$$

### Usando la formula ufficiale:

$$P(\text{ST}|\text{Test +}) = \frac{P(\text{Test +}|\text{ST}) \times P(\text{ST})}{P(\text{Test +})}$$

$$P(\text{ST}|\text{Test +}) = \frac{0.85 \times 0.20}{0.186} = \frac{0.17}{0.186} = 0.914$$

Dove:
- Numeratore: 0.17 = frazione di persone con malattia E test positivo
- Denominatore: 0.186 = frazione totale con test positivo

## Intuizione - Perché è così potente?

**Prima del test**: "Hai una probabilità del 20% di avere la malattia" (come chiunque nella popolazione)

**Dopo il test positivo**: "Ora hai il 91.4% di probabilità!" (5 volte più alta!)

**Il test ti ha fornito nuova informazione**, e Bayes aggiorna automaticamente la tua stima.

---

## Riassunto Visivo

```
1000 persone nella popolazione
  │
  ├─ 200 CON malattia
  │   ├─ Test + : 170 persone (veri positivi)
  │   └─ Test - : 30 persone
  │
  └─ 800 SENZA malattia
      ├─ Test + : 16 persone (FALSI POSITIVI!) ⚠️
      └─ Test - : 784 persone

RISULTATO: Tra i 186 test positivi
  ✓ 170 hanno davvero la malattia
  ✗ 16 sono falsi allarmi

Probabilità reale = 170 ÷ 186 = 91.4%
```

---

## Perché questa è fondamentale?

1. **Diagnosi medica**: Capire se un test positivo significa davvero che sei malato
2. **Spam detection**: Se un'email è marcata come spam, quale probabilità è corretta?
3. **Machine Learning**: Aggiornare le probabilità basandosi su nuovi dati
4. **AI**: Foundation dell'inferenza statistica moderna
