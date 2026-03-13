# K-Means Clustering

## Cos'è
K-Means è un algoritmo di **clustering** che divide i dati in **k gruppi**.  
L'idea è semplice: punti simili finiscono nello stesso cluster, punti diversi in cluster diversi.

- **K** = numero di cluster da trovare
- **Means** = media dei punti del cluster, cioè il **centroide**

---

## Come funziona
L'algoritmo lavora in modo iterativo:

1. Sceglie **k centroidi iniziali** in modo casuale
2. Assegna ogni punto al **centroide più vicino**
3. Ricalcola i centroidi come media dei punti assegnati
4. Ripete finché i cluster non cambiano più

Quando i punti smettono di spostarsi e i centroidi si stabilizzano, si parla di **convergenza**.

---

## Training e inferenza
- **Training**: fase in cui K-Means costruisce i cluster
- **Inferenza**: fase in cui un nuovo punto viene assegnato al cluster più vicino

Quindi sì, anche K-Means può fare inferenza dopo l'addestramento.

---

## Esempi
### Clienti
Con feature come età e spesa media, K-Means può trovare gruppi come:
- clienti giovani
- clienti abituali
- clienti premium

### Industria
Con dati di sensori, può separare stati come:
- funzionamento normale
- carico elevato
- comportamento anomalo

---

## Limiti
- Devi scegliere prima il valore di **k**
- I risultati possono cambiare se i centroidi iniziali cambiano
- Funziona meglio con cluster abbastanza compatti e ben separati

---

## Idea chiave
K-Means cerca di organizzare i dati in gruppi minimizzando la distanza tra ogni punto e il centro del proprio cluster.
