# Relazioni tra Variabili Numeriche

L'obiettivo è capire come due numeri si influenzano a vicenda (non solo categorica vs numerica, ma **numerica vs numerica**).

## 1. Visualizzazione: Scatter Plot (Grafico a Dispersione)

Il primo passo è visualizzare i dati su un piano cartesiano.

- **Asse X:** Prima variabile (es. Anni di esperienza).
- **Asse Y:** Seconda variabile (es. Reddito del musicista).
- **Cosa cercare:** Un pattern nella "nuvola" di punti.
  - _Esempio:_ Se i punti vanno dal basso-sinistra all'alto-destra, significa che all'aumentare dell'esperienza aumenta il reddito.

## 2. Misurazione: Il Coefficiente di Correlazione

Per non andare "a occhio", si usa un numero preciso che descrive la relazione lineare.
**Range:** Da -1 a +1.

Questo numero ci dice due cose fondamentali:

### A. Direzione (Il Segno)

- **Positiva (+):** Le variabili si muovono insieme.
  - `X sale` -> `Y sale` (es. Esperienza e Stipendio).
- **Negativa (-):** Le variabili si muovono in opposto.
  - `X sale` -> `Y scende` (es. Prezzo della benzina e Km percorsi con 10€).

### B. Forza (Il Valore)

Indica quanto i punti sono vicini a formare una linea perfetta.

- **Vicino a +1 o -1:** Relazione forte. È facile prevedere Y sapendo X.
- **Vicino a 0:** Relazione debole o inesistente. I punti sono sparsi a caso (rumore).

---

### Esempio Pratico (Musicisti)

- **Dato:** Coefficiente di **0.74**.
- **Analisi:**
  1. È **positivo**: Più esperienza porta a più guadagni.
  2. È **moderatamente forte**: C'è un trend chiaro, ma non è una linea perfetta (ci sono eccezioni o variabilità).
