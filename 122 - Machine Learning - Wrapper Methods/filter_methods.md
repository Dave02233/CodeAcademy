# Filter Methods — Riepilogo

## Cos'è
Metodi di feature selection che operano **prima** del training, basandosi su criteri statistici senza coinvolgere nessun modello. Veloci e flessibili per qualsiasi algoritmo ML.

---

## 1. Variance Threshold
Rimuove feature con varianza bassa o nulla — se una feature ha sempre lo stesso valore, non contribuisce informazione predittiva.

- Funziona solo su feature **numeriche**
- Soglia configurabile tramite il parametro `threshold`
- Classe sklearn: `VarianceThreshold`
- Esempio: `grade_level` aveva tutti valori = 8 → eliminata

---

## 2. Correlazione di Pearson
Misura la relazione **lineare** tra due variabili continue. Coefficiente tra -1 e 1.

**Due utilizzi:**

**Feature vs Feature** — se due feature sono altamente correlate (|coeff| > 0.7), sono ridondanti: tenerne una sola.

**Feature vs Target** — se una feature ha bassa correlazione col target (tra -0.3 e 0.3), probabilmente non è predittiva.

- Metodo pandas: `df.corr(method='pearson')`
- Alternativa sklearn: `f_regression()` → restituisce F-statistic e p-value
- Esempio: `hours_TV` e `hours_study` correlate negativamente (-0.78) → eliminata `hours_TV` perché meno correlata col target

**Limite:** rileva solo relazioni lineari, non funziona su categoriche.

---

## 3. Mutual Information
Misura la **dipendenza generale** tra due variabili, lineare e non lineare. Valore non negativo — più alto, più predittiva è la feature.

- Funziona anche su feature discrete/categoriche (richiede encoding numerico prima)
- Specificare `discrete_features=[idx]` per feature categoriche codificate
- Target continuo → `mutual_info_regression()`
- Target discreto → `mutual_info_classif()`
- Selezione top-k feature: `SelectKBest(score_func=..., k=3)`
- Esempio: `hours_sleep` aveva correlazione Pearson ≈ 0 ma mutual info > 0 → relazione non lineare esistente; `height_cm` aveva mutual info = 0 → eliminata

---

## Pipeline dell'esempio

| Step | Feature eliminata | Motivo |
|---|---|---|
| Variance Threshold | `grade_level` | Varianza = 0 |
| Correlazione | `hours_TV` | Ridondante con `hours_study` |
| Mutual Information | `height_cm` | Nessuna associazione col target |

**Risultato:** da 6 feature a 3 (`edu_goal`, `hours_study`, `hours_sleep`)

---

## Confronto metodi

| Metodo | Tipo relazione | Funziona su categoriche | Sklearn |
|---|---|---|---|
| Variance Threshold | N/A | No | `VarianceThreshold` |
| Pearson Correlation | Solo lineare | No | `f_regression` |
| Mutual Information | Lineare + non lineare | Sì (con encoding) | `mutual_info_regression/classif` |