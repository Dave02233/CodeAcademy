# Conditional Probability

## Definizione
La **probabilità condizionata** misura la probabilità che un evento si verifichi dato che un altro evento è già accaduto.

- Misura la dipendenza tra due eventi
- In notazione: **P(A|B)** = probabilità di A dato che B è accaduto

## Esempio: Marmi senza rimessa

**Scenario**: Sacchetto con 5 marmi (3 rossi, 2 blu). Estraiamo 2 marmi **senza rimessa**.

- **Primo evento**: Il primo marmo estratto è blu
- **Secondo evento**: Il secondo marmo è rosso, DATO che il primo è blu
- Dopo il primo marmo blu: rimangono 4 marmi (3 rossi, 1 blu)
- **P(Rosso 2° | Blu 1°) = 3/4**

La probabilità del secondo evento **dipende** dal risultato del primo → **eventi dipendenti**

## Con rimessa: Eventi indipendenti

Se estraiamo i marmi **con rimessa**:
- Il primo marmo ritorna nel sacchetto
- La composizione rimane invariata
- La probabilità del secondo marmo **non dipende** dal primo

**Formule per eventi indipendenti:**
$$P(A|B) = P(A)$$
$$P(B|A) = P(B)$$

La condizione non influenza la probabilità.

## Riassunto
| | **Senza rimessa (Dipendenti)** | **Con rimessa (Indipendenti)** |
|---|---|---|
| **Relazione** | P(A\|B) ≠ P(A) | P(A\|B) = P(A) |
| **Probabilità** | Cambia in base all'evento precedente | Rimane costante |
