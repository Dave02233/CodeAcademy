# TUTTI i Tipi di Variabili - Guida COMPLETA (Versione Definitiva)

Le variabili si dividono in **2 grandi gruppi**: CATEGORICHE e NUMERICHE.

## 1. CATEGORICHE (TESTO/ETICHETTE)

### ORDINAL CATEGORICAL

**Hanno un ORDINE naturale** - puoi dire "maggiore/minore"

**Esempi**:

- Stelle hotel: 1⭐ < 2⭐ < 3⭐ < 5⭐
- Livello istruzione: Elementari < Medie < Laurea
- Voti: Scarso < Sufficiente < Ottimo
- Taglie: S < M < L < XL

**Caratteristica**: 3⭐ È MEGLIO di 2⭐

### NOMINAL CATEGORICAL

**NESSUN ordine** - solo categorie diverse

**Esempi**:

- Colori: Rosso, Blu, Verde
- Sesso: Maschio, Femmina
- Marche auto: Fiat, Toyota, BMW
- Città: Milano, Roma, Napoli

**Caratteristica**: Milano ≠ Roma (solo diverse)

## 2. NUMERICHE (NUMERI VERTI)

### DISCRETE (Interi)

**Puoi contare esattamente**

**Esempi**:

- Numero figli: 0, 1, 2, 3
- Gol segnati: 0, 1, 2
- Età anni: 25, 30, 45

**Caratteristica**: Non puoi avere 1.5 figli!

### CONTINUE (Decimali)

**Misurazioni precise**

**Esempi**:

- Altezza: 1.75m, 1.82m
- Peso: 72.5kg
- Prezzo: 19.99€
- Temperatura: 36.7°C

## Tabella COMPLETA

| Tipo     | Ordine? | Numeri? | Esempi           | Grafico   |
| -------- | ------- | ------- | ---------------- | --------- |
| NOMINAL  | ❌ NO   | ❌ No   | Colori, Città    | Bar chart |
| ORDINAL  | ✅ SÌ   | ❌ No   | Stelle ★, Taglie | Bar chart |
| DISCRETA | ✅ SÌ   | ✅ SÌ   | Figli, Gol       | Histogram |
| CONTINUA | ✅ SÌ   | ✅ SÌ   | Altezza, Peso    | Histogram |

## Esempio Dataset REALE

nome: "Mario", "Luigi" ← NOMINAL
stelle_hotel: 3, 5 ← ORDINAL
numero_figli: 2, 0 ← DISCRETA  
altezza: 1.75, 1.62 ← CONTINUA

## Machine Learning - CHE CODING USARE

| Tipo     | Encoding/Grafico             |
| -------- | ---------------------------- |
| Nominal  | OneHotEncoder() / Bar chart  |
| Ordinal  | OrdinalEncoder() / Bar chart |
| Discreta | **Nessuno** / Histogram      |
| Continua | **Nessuno** / Histogram      |

## REGOLA SUPER FACILE

**È un NUMERO che puoi fare MATEMATICA?** → **NUMERICA**  
**È un NOME/ETICHETTA?** → **CATEGORICA**

"Rosso" → CATEGORICA NOMINAL
25 → NUMERICA DISCRETA  
1.75 → NUMERICA CONTINUA
⭐⭐⭐ → CATEGORICA ORDINAL

## Riassunto 1 Frase

**CATEGORICHE** = nomi (Nominal/Ordinal)  
**NUMERICHE** = numeri (Discreta/Continua)
