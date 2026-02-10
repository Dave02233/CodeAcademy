# Eventi Mutuamente Esclusivi (Mutually Exclusive Events)

## Definizione

Due eventi si dicono **mutuamente esclusivi** (o **disgiunti**) quando **non possono verificarsi contemporaneamente**. Se si verifica uno dei due eventi, l'altro è impossibile.

### Definizione Matematica

Due eventi $A$ e $B$ sono **mutuamente esclusivi** se:

$$P(A \cap B) = 0$$

L'intersezione tra i due eventi è **vuota** - non esiste alcun risultato che appartiene a entrambi.

---

## Esempi Classici

### 1. Lancio di una Moneta
Una singola moneta lanciata una volta:
- **Evento A**: Esce testa
- **Evento B**: Esce croce

Questi eventi sono **mutuamente esclusivi** perché:
- Non è possibile ottenere sia testa che croce nello stesso lancio
- Se esce testa, croce non può uscire
- $P(\text{Testa} \cap \text{Croce}) = 0$

### 2. Lancio di un Dado - Parità
Un singolo dado lanciato:
- **Evento A**: Numero pari (2, 4, 6)
- **Evento B**: Numero dispari (1, 3, 5)

Questi eventi sono **mutuamente esclusivi** perché:
- Un numero non può essere sia pari che dispari allo stesso tempo
- Non ci sono elementi in comune tra i due insiemi
- $P(\text{Pari} \cap \text{Dispari}) = 0$

---

## Visualizzazione: Diagramma di Venn

### Eventi Mutuamente Esclusivi
```
         A              B
      -------        -------
     |       |      |       |
     |  Testa|      |Croce  |
     |       |      |       |
      -------        -------
      
    (Non si sovrappongono)
```

I due cerchi **non si toccano** perché non hanno alcuna area in comune.

---

## Contrasto: Eventi NON Mutuamente Esclusivi

### Esempio: Lancio di un Dado

- **Evento A**: Numero dispari (1, 3, 5)
- **Evento B**: Numero maggiore di 2 (3, 4, 5, 6)

Questi eventi **NON sono mutuamente esclusivi** perché:
- Hanno un'**intersezione (overlap)**: {3, 5}
- È possibile ottenere un 3 o un 5 che soddisfa **entrambe le condizioni**
- $P(A \cap B) = \frac{2}{6} \neq 0$

### Visualizzazione: Diagramma di Venn

```
           A              B
        -------        -------
       |       |      |       |
       |1      | 3-5  |4      |
       |    ---|---    |---    |
       |    |       |  |6      |
        ---|---     ---
```

I due cerchi **si sovrappongono** nella zona {3, 5}.

---

## Proprietà Importanti

### 1. Probabilità dell'Unione
Se $A$ e $B$ sono mutuamente esclusivi:

$$P(A \cup B) = P(A) + P(B)$$

Se $A$ e $B$ NON sono mutuamente esclusivi:

$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

### 2. Complemento
Un evento e il suo complemento sono **sempre mutuamente esclusivi**:
- $A$ e $\overline{A}$ (non A) non possono accadere insieme
- $P(A \cap \overline{A}) = 0$
- $P(A \cup \overline{A}) = 1$ (uno dei due deve accadere)

---

## Esempi di Calcolo

### Moneta (Mutuamente Esclusivi)
$$P(\text{Testa} \cup \text{Croce}) = P(\text{Testa}) + P(\text{Croce}) = 0.5 + 0.5 = 1$$

### Dado - Numero e Parità (NON Mutuamente Esclusivi)
- A = Numero dispari: $P(A) = \frac{3}{6} = 0.5$
- B = Numero > 2: $P(B) = \frac{4}{6} = 0.667$
- $A \cap B$ = {3, 5}: $P(A \cap B) = \frac{2}{6} = 0.333$

$$P(A \cup B) = 0.5 + 0.667 - 0.333 = 0.833$$

---

## Differenze Chiave

| Proprietà | Mutuamente Esclusivi | Non Mutuamente Esclusivi |
|-----------|------|------|
| **Intersezione** | $A \cap B = \emptyset$ | $A \cap B \neq \emptyset$ |
| **Probabilità Congiunta** | $P(A \cap B) = 0$ | $P(A \cap B) > 0$ |
| **Formula Union** | $P(A \cup B) = P(A) + P(B)$ | $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ |
| **Sovrapposizione** | No | Sì |
| **Esempio** | Testa/Croce | Pari/Numero > 2 |

---

## Riepilogo

✅ **Mutuamente Esclusivi**: Non possono accadere insieme  
❌ **Non Mutuamente Esclusivi**: Possono accadere insieme  
📊 **Venn Diagram**: Cerchi non sovrapposti vs. sovrapposti  
🧮 **P(A ∩ B) = 0**: Questa è la chiave per identificarli
