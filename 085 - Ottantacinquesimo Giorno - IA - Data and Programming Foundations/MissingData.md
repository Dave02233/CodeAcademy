# Gestione Dati Mancanti - Versione SENZA Codice

## 1. Capire il Problema

**3 tipi di buchi:**

- **Casuali**: Nessun pattern - puoi eliminarli senza problemi
- **Prevedibili**: Dipendono da altre colonne - usa imputazione intelligente
- **Complicati**: Dipendono dal valore mancante - studio caso per caso

**PRIMA SEMPRE**: Conta quanti buchi hai per colonna e guarda se c'è un pattern.

## 2. Soluzioni Semplici (95% dei casi)

**A) ELIMINA** - se hai meno del 5% di buchi

- Rimuovi le righe con buchi
- Oppure rimuovi colonne con troppi buchi (>60%)

**B) RIEMPI con numeri facili**

- Numeri → usa la MEDIANA (meglio della media con outlier)
- Testo/categorie → usa la MODA (valore più comune) o "Sconosciuto"

## 3. Soluzioni Intelligenti

**KNN (K-Nearest Neighbors)**:

- Trova 5 righe simili alla tua
- Usa la loro media per riempire il buco
- Funziona benissimo!

**Forward Fill** (solo serie temporali):

- Copia il valore dalla riga precedente
- Perfetto per prezzi azionari, temperature, etc.

## 4. Workflow Pratico (5 passi)

1. **Conta i buchi** per colonna
2. **Elimina colonne** con >60% buchi
3. **Numeri → mediana**
4. **Testo → "missing"**
5. **Controlla** che non hai più buchi

## 5. Tabella Decisionale Veloce

| % Buchi | Cosa Fare                |
| ------- | ------------------------ |
| 0-5%    | Elimina righe            |
| 5-20%   | Mediana/Moda             |
| 20-50%  | KNN                      |
| >50%    | Elimina colonna o indaga |

## 6. TRUCCO POTENTE

Crea una **nuova colonna** che dice "c'era un buco qui" (0/1)

- Il modello impara ANCHE dal fatto che mancava un dato
- Esempio: `età_missing` + `età` (riempita)

## 7. ERRORI da EVITARE

❌ **NON** riempire tutto con la media - uccide la varianza  
❌ **NON** ignorare i pattern dei buchi  
✅ **SEMPRE** studiare prima dove sono i buchi

**Risultato**: Dataset pulito, modello che funziona, zero bias!
