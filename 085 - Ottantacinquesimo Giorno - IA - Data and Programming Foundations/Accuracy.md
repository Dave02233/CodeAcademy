L'**Accuracy** è semplicemente: "I dati dicono la verità sul mondo reale?"

## Esempio Alberi (dal testo)

Tu misuri gli alberi **dal suolo** → 10 metri  
Io misuro gli **alberi dalla base del tronco** → 9.8 metri

**Problema**: Abbiamo dati DIVERSI ma parliamo della stessa cosa!  
→ **Accuracy bassa** perché non sappiamo l'altezza VERA

## Domanda Chiave

**"I miei numeri sono GIUSTI?"**

Non è "missing data", è "dati SBAGLIATI":

- Altezze misurate male
- Categorie sbagliate
- Duplicati
- Errori di trascrizione

## 3 Modi per SCOPRIRE Problemi

### 1. Buon Senso

Se ho "altezze negative" → errore!  
Se ho "età 999 anni" → errore!  
Se tutti i prezzi sono 0€ → errore!

### 2. Guarda le Distribuzioni

✅ Normali: 160-190cm  
❌ Strane: 50% sono 0cm

### 3. Pensa a Come Hai Raccolto i Dati

❌ Manuale: errori di battitura  
❌ API: limiti di rate  
❌ Sensori: malfunzionamenti

## Soluzioni Pratiche

| Problema                | Soluzione                                |
| ----------------------- | ---------------------------------------- |
| **Misurazioni diverse** | Decidi UNA regola (es. sempre dal suolo) |
| **Outlier assurdi**     | Rimuovi o correggi con buon senso        |
| **Duplicati**           | De-duplica dataset                       |
| **Unità sbagliate**     | Converti tutto (km→metri, $→€)           |

## Esempio Pratico Dataset

**Prima:**  
età: [25, -5, 999, 30, 28]  
prezzo: [€100, $50, 0, €120, €90]

**Dopo:**  
età: [25, 25, 65, 30, 28] ← -5→25, 999→65 (media)  
prezzo: [100, 45, 0, 120, 90] ← $50→€45, tutto in €

## Riassunto 1 Frase

**Accuracy = "I miei dati rispecchiano la REALTA'?"**

Se misuri tutti gli alberi nello stesso modo → ✅ Accurate  
Se misuri alcuni dal suolo, altri dalla luna → ❌ Non accurate
