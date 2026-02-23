I **Representative Samples** sono: "Il mio campione rappresenta TUTTA la popolazione?"

## Esempio Alberi (dal testo)

**Popolazione**: Tutti gli alberi del Nord Atlantico (USA + Canada)  
**Tu hai**: Solo alberi di New York, primavera 2020

**Problema**: Il tuo modello funzionerà SOLO per NY, non per Canada!  
→ **Sample non rappresentativo** = **bias**

## Domanda Chiave

**"I miei dati rispecchiano TUTTI i tipi di alberi?"**

## Differenza con Validity/Accuracy

| Accuracy                  | Validity              | Representative          |
| ------------------------- | --------------------- | ----------------------- |
| Numeri sbagliati          | Misuri cosa sbagliata | Hai solo 1 tipo di dati |
| Altezza = 10m (sbagliato) | Larghezza ≠ Età       | Solo alberi NY          |

## Problema CONVENIENCE SAMPLE

**Cosa è**: Prendi dati facili da ottenere  
**Esempi reali**:

- Solo clienti che usano app (non desktop)
- Solo dati di una città
- Solo dati COVID 2020 (mondo chiuso)

**Risultato**: Modello funziona lì, ma fallisce altrove!

## Come CREARE un Buon Sample

**Obiettivo**: Il tuo sample deve "somigliare" alla popolazione reale

| ❌ CATTIVO Sample | ✅ BUON Sample          |
| ----------------- | ----------------------- |
| Solo NY           | NY + Canada + Maine     |
| Solo querce       | Querce + pini + aceri   |
| Solo 2020         | 2018-2025               |
| Solo ricchi       | Ricchi + poveri + medio |

## 3 Modi per RENDERLO RAPPRESENTATIVO

### 1. **Stratified Sampling**

Dividi popolazione in gruppi, prendi % uguale da ognuno

Popolazione: 60% querce, 30% pini, 10% aceri
Sample: 60% querce, 30% pini, 10% aceri

### 2. **Quota Sampling**

Decidi quote fisse: "20% Nord, 20% Sud, etc."

### 3. **Random Sampling**

Casuale MA da TUTTA la popolazione (difficile)

## Esempio Pratico Dataset

**SCOPO**: Prevedere bellezza alberi Nord Atlantico

**❌ PROBLEMA**:
location: ["New York", "New York", "NY", "NY"...] 100%
specie: ["Quercia", "Quercia", "Quercia"] 95%

**✅ SOLUZIONE**:
location: ["NY", "Canada", "Maine", "Quebec"] 25% ciascuno
specie: ["Quercia", "Pino", "Acer", "Betulla"]

## Checklist Rapida

Prima di usare dataset, chiedi:

- Copre tutte le regioni?
- Tutte le età/etnie/specie/clienti?
- Tutti i periodi temporali?
- È "convenience" o rappresentativo?

## Riassunto 1 Frase

**Representative Sample = "Ho dati di TUTTI i tipi?"**

✅ NY + Canada + Maine → Representative  
❌ Solo NY → Biased, non usabile per Canada!
