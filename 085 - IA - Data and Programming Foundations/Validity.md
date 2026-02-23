La **Validity** chiede: "I miei dati misurano DAVVERO quello che voglio misurare?"

## Esempio Alberi (dal testo)

**Vuoi sapere**: Quanti anni hanno gli alberi?  
**Misure realmente**: Larghezza del tronco

**Problema**: Larghezza ≠ Età!  
C'è una correlazione, ma non è la stessa cosa → **Validity bassa**

## Domanda Chiave

**"Questa colonna misura ESATTAMENTE quello che mi serve?"**

## Differenza con Accuracy

| Accuracy                | Validity                                |
| ----------------------- | --------------------------------------- |
| "Altezza misurata male" | "Larghezza invece di età"               |
| Dati sbagliati          | Dati corretti MA SBAGLIATI per lo scopo |

## 3 Esempi Classici di PROBLEMI

### 1. Proxy Sbagliati

Larghezza → Età (correlati ma diversi)  
"Like su FB" → "Felicità"  
"Tempo su sito" → "Apprendimento"

### 2. Scala Temporale Sbagliata

Dati vecchi 20 anni → crescita ANNUALE  
Misurazioni mensili → trend settimanali

### 3. Definizioni Diverse

Dataset A: "Vendite" = fatturato netto  
Dataset B: "Vendite" = fatturato lordo  
→ NON puoi sommare!

## Come SCOPRIRLO

**Domanda magica**: "Questa variabile misura ESATTAMENTE quello che voglio?"

**Checklist rapida:**

- Il nome della colonna dice la verità?
- La unità di misura è corretta?
- Il periodo temporale va bene?
- È un proxy o la cosa vera?

## Esempio Pratico Dataset

**SCOPO**: Prevedere crescita annuale alberi

**❌ SBAGLIATO (low validity):**
larghezza_tronco_2025
altezza_2005

**✅ CORRETTO (high validity):**
altezza_2024
altezza_2025
crescita_annuale = altezza_2025 - altezza_2024

## Soluzioni Pratiche

| Problema            | Soluzione                                 |
| ------------------- | ----------------------------------------- |
| Proxy               | Trova la variabile diretta o crea formula |
| Scala tempo         | Aggrega/disaggrega correttamente          |
| Definizioni diverse | Normalizza o usa stesso dataset           |
| Unità sbagliate     | Converti tutto uguale                     |

## Riassunto 1 Frase

**Validity = "Misuro la cosa GIUSTA?"**

✅ Altezza per studiare altezza → Valid  
❌ Larghezza per studiare età → Non valid
