# Distribuzioni di Probabilità - Guida Pratica

## Variabili Casuali

- **Discrete**: valori contabili (dadi, monete, pezzi difettosi)
- **Continue**: valori infiniti in un range (altezza, peso, temperatura)

---

## PMF - Probability Mass Function

**Quando**: Variabili discrete, vuoi probabilità ESATTA di un valore

**Formula**: `stats.binom.pmf(k, n, p)`

**Esempio**:
```python
# Probabilità di ESATTAMENTE 2 pezzi difettosi su 10 (difetto 10%)
stats.binom.pmf(2, 10, 0.1)  # = 0.1937 (19.37%)
```

---

## CDF - Cumulative Distribution Function

**Quando**: Vuoi "al massimo X" o "almeno X" o un range

**Formula**: 
- Discrete: `stats.binom.cdf(k, n, p)`
- Continue: `stats.norm.cdf(x, mean, std)`

**Esempi**:
```python
# AL MASSIMO 3 teste in 10 lanci
stats.binom.cdf(3, 10, 0.5)

# Range: tra 3 e 7 successi
stats.binom.cdf(7, 10, 0.5) - stats.binom.cdf(2, 10, 0.5)

# Donna alta MENO di 158cm (media=167.64, std=8)
stats.norm.cdf(158, 167.64, 8)  # = 0.1141 (11.41%)
```

---

## Distribuzione Binomiale

**Quando usarla**:
- n prove indipendenti
- Solo 2 risultati possibili (successo/fallimento)
- Probabilità p costante

**Parametri**: 
- `n` = numero prove
- `p` = probabilità successo
- `k` = successi desiderati

**Esempi reali**:
```python
# 1000 email, 5% click → prob di 60 click esatti
stats.binom.pmf(60, 1000, 0.05)

# 20 pazienti, 30% effetti collaterali → max 5 pazienti
stats.binom.cdf(5, 20, 0.3)

# 100 pezzi, 2% difetti → tra 1 e 4 difettosi
stats.binom.cdf(4, 100, 0.02) - stats.binom.cdf(0, 100, 0.02)
```

**Formula**:
$$P(X = k) = \binom{n}{k} \cdot p^k \cdot (1-p)^{n-k}$$

**Perché "binomiale"?**: Solo 2 possibili risultati (bi = due)

---

## Distribuzione Normale

**Quando usarla**: Variabili continue simmetriche attorno a una media (altezza, peso, errori di misura)

**Parametri**: 
- `μ` (mu) = media
- `σ` (sigma) = deviazione standard

**Notazione**: Normal(μ, σ)

**Esempi reali**:
```python
# Temperatura media 22°C, std 3°C → prob tra 20°C e 25°C
stats.norm.cdf(25, 22, 3) - stats.norm.cdf(20, 22, 3)

# Server con tempo medio 150ms, std 20ms → prob < 120ms
stats.norm.cdf(120, 150, 20)

# Peso medio 500g, std 5g → prob > 510g
1 - stats.norm.cdf(510, 500, 5)
```

---

## Quick Reference

| Situazione | Usa |
|---|---|
| Esattamente k successi (discrete) | `pmf(k, n, p)` |
| Al massimo k successi (discrete) | `cdf(k, n, p)` |
| Range [a, b] (discrete) | `cdf(b) - cdf(a-1)` |
| Al massimo x (continue) | `norm.cdf(x, μ, σ)` |
| Range [a, b] (continue) | `norm.cdf(b) - norm.cdf(a)` |
| Almeno x | `1 - cdf(x-1)` |

---

## PMF vs CDF

**PMF**: Probabilità di UN valore esatto → `P(X = 3)`

**CDF**: Probabilità cumulativa fino a un valore → `P(X ≤ 3)`

**Relazione**: `CDF(k) = sum(PMF(0) + PMF(1) + ... + PMF(k))`

---

## PDF (Probability Density Function)

**Solo per variabili continue**

**Caratteristica chiave**: `P(X = x) = 0` per qualsiasi punto singolo

**Perché?**: Area sotto un punto ha larghezza zero

**Come calcolare probabilità**: Usa CDF per calcolare area tra due punti

---

## Quando NON moltiplicare le probabilità

❌ **Sbagliato**: "3 teste in 5 lanci" → `0.5 × 0.5 × 0.5`

✅ **Corretto**: Usa binomiale → `stats.binom.pmf(3, 5, 0.5)` = 0.3125

**Motivo**: Ci sono 10 modi diversi di ottenere 3 teste (coefficiente binomiale)

**Moltiplica solo se**: Vuoi una sequenza SPECIFICA (es. T-T-T-C-C)
