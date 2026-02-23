# Dipendenza e Indipendenza nella Statistica

## 📝 Notazione Matematica e Simboli

Prima di iniziare, ecco i simboli matematici usati nel documento:

| Simbolo | Significato | Esempio |
|---------|------------|---------|
| **$A \cap B$** | **Intersezione** - Entrambi gli eventi si verificano (AND) | Testa E numero 6 |
| **$A \mid B$** (o A\|B) | **Probabilità Condizionata** - Probabilità di $A$ sapendo che $B$ è vero | Probabilità di testa se so che il dado è 6 |
| **$P(A)$** | **Probabilità** di evento $A$ | $P(\text{Testa}) = 0.5$ |
| **$\cdot$** | **Moltiplicazione** | $P(A) \cdot P(B)$ |
| **$\neq$** | **Non uguale a** | $P(A \cap B) \neq P(A)$ |
| **$=$** | **Uguale a** | $P(A) = 0.5$ |

### A|B - Probabilità Condizionata

$P(A|B)$ si legge: **"Probabilità di A dato B"** oppure **"Probabilità di A condizionata a B"**

Significa: *Quale è la probabilità che accada A sapendo già che B è accaduto?*

**Esempio pratico:**
- $P(\text{Pioggia})$ = probabilità piova (senza ulteriori informazioni)
- $P(\text{Pioggia} \| \text{Cielo nuvoloso})$ = probabilità piova sapendo che il cielo è nuvoloso (è più alta!)

---

## Indipendenza Statistica

Due eventi $A$ e $B$ si dicono **statisticamente indipendenti** quando il verificarsi di uno di essi non influenza la probabilità che si verifichi l'altro.

### Definizione Matematica

Due eventi $A$ e $B$ sono **indipendenti** se:

$$P(A \cap B) = P(A) \cdot P(B)$$

In altre parole, la probabilità che si verifichino entrambi gli eventi è il prodotto delle loro probabilità individuali.

### Proprietà Equivalenti

Se $A$ e $B$ sono indipendenti, allora:

- $P(A|B) = P(A)$ (la probabilità di $A$ dato $B$ è uguale a $P(A)$)
- $P(B|A) = P(B)$ (la probabilità di $B$ dato $A$ è uguale a $P(B)$)

### Esempio

Lanciare una moneta e lanciare un dado sono eventi **indipendenti**:
- Che esca testa o croce dalla moneta non influenza il risultato del dado
- $P(\text{Testa}) = 0.5$
- $P(\text{6 sul dado}) = \frac{1}{6}$
- $P(\text{Testa e 6}) = 0.5 \times \frac{1}{6} = \frac{1}{12}$

---

## Dipendenza Statistica

Due eventi $A$ e $B$ si dicono **statisticamente dipendenti** quando il verificarsi di uno di essi **influenza** la probabilità che si verifichi l'altro.

### Definizione Matematica

Due eventi $A$ e $B$ sono **dipendenti** quando:

$$P(A \cap B) \neq P(A) \cdot P(B)$$

In questo caso, la probabilità congiunta non è il semplice prodotto delle probabilità marginali.

### Proprietà Equivalenti

Se $A$ e $B$ sono dipendenti, allora almeno una delle seguenti condizioni è vera:

- $P(A|B) \neq P(A)$
- $P(B|A) \neq P(B)$

### Esempio

Estrarre due carte da un mazzo senza reinserimento sono eventi **dipendenti**:
- La prima estrazione modifica il numero di carte rimaste nel mazzo
- $P(\text{Asso alla 1ª estrazione}) = \frac{4}{52}$
- $P(\text{Asso alla 2ª | Asso alla 1ª}) = \frac{3}{51} \neq \frac{4}{52}$

La probabilità cambia perché il mazzo è stato modificato dalla prima estrazione.

---

## Probabilità Condizionata

La probabilità condizionata è fondamentale per capire la dipendenza:

$$P(A|B) = \frac{P(A \cap B)}{P(B)}$$

Se $P(A|B) = P(A)$, allora $A$ e $B$ sono **indipendenti**.

---

## Tabella Comparativa

| Proprietà | Indipendenti | Dipendenti |
|-----------|------------|-----------|
| **Formula** | $P(A \cap B) = P(A) \cdot P(B)$ | $P(A \cap B) \neq P(A) \cdot P(B)$ |
| **Condizionata** | $P(A\|B) = P(A)$ | $P(A\|B) \neq P(A)$ |
| **Effetto** | Un evento non influenza l'altro | Un evento influenza l'altro |
| **Esempio** | Moneta e dado | Estrarre carte senza reinserimento |

---

## Casi Pratici in Machine Learning

### Indipendenza: Vantaggi
- Semplifica i calcoli probabilistici
- Usata nel **Naive Bayes** che assume indipendenza tra le feature
- Riduce la complessità computazionale

### Dipendenza: Sfide
- Richiede calcoli più complessi (probabilità condizionate)
- Necessita di più dati per stimare le relazioni
- Importante considerarla nella selezione delle feature

---

## Indipendenza Condizionata

Due variabili possono essere **dipendenti**, ma diventare **indipendenti** dato un terzo evento $C$.

### Formula

$$P(A \cap B | C) = P(A|C) \cdot P(B|C)$$

### Esempio

- Età e stipendio sono generalmente **dipendenti**
- Ma se fissiamo il "settore industriale" ($C$), possono diventare condizionatamente **indipendenti** (lo stipendio dipende più dal settore che dall'età)

---

## Riepilogo

✅ **Indipendenti**: Verificarsi dell'uno NON influenza l'altro  
❌ **Dipendenti**: Verificarsi dell'uno INFLUENZA l'altro  
🔗 **Indipendenza Condizionata**: Sono indipendenti dato un terzo evento
