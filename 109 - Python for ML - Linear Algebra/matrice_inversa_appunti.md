# 📐 Matrice Inversa — Appunti Facili

> **In una frase:** la matrice inversa è l'*opposto* di una matrice, nel senso che moltiplicandole insieme ottieni la matrice identità (l'equivalente del numero 1 per le matrici).

---

## 🤔 Ma cos'è una matrice, prima di tutto?

Una **matrice** è semplicemente una griglia di numeri organizzata in righe e colonne. Tipo:

$$A = \begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix}$$

Ogni numero ha una sua posizione. Puoi usarla per rappresentare trasformazioni, sistemi di equazioni, relazioni tra variabili... insomma, è un *contenitore matematico* molto potente.

---

## 🔁 Cos'è la matrice inversa?

Pensa al numero **5**. Il suo inverso è **1/5**, perché:

$$5 \times \frac{1}{5} = 1$$

Il numero 1 è il "neutro" della moltiplicazione — non cambia nulla.

Con le matrici funziona allo stesso modo:

$$A \times A^{-1} = I$$

Dove:
- $A^{-1}$ è la **matrice inversa** di $A$
- $I$ è la **matrice identità** (la "1" delle matrici), cioè:

$$I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$$

> 💡 **Riflessione:** non tutte le matrici hanno un'inversa. Come $0$ non ha inverso tra i numeri (non puoi dividere per zero), alcune matrici — dette **singolari** — non sono invertibili.

---

## 📌 Condizione di esistenza: il determinante

Una matrice è invertibile **solo se il suo determinante è diverso da zero**.

Per una matrice 2×2:

$$A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$$

Il determinante è:

$$\det(A) = ad - bc$$

Se $\det(A) \neq 0$ → la matrice **è invertibile**.  
Se $\det(A) = 0$ → la matrice **non è invertibile** (è singolare).

---

## 🧮 Come si calcola? (Caso 2×2)

Per una matrice 2×2, la formula è abbastanza diretta:

$$A^{-1} = \frac{1}{\det(A)} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$$

### Esempio concreto

$$A = \begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix}$$

**Step 1:** calcola il determinante:

$$\det(A) = (2 \times 3) - (1 \times 5) = 6 - 5 = 1$$

**Step 2:** applica la formula:

$$A^{-1} = \frac{1}{1} \begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix} = \begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}$$

**Verifica:**

$$A \times A^{-1} = \begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix} \times \begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I \checkmark$$

---

## 📐 Come si calcola? (Caso 3×3 e oltre)

Per matrici più grandi si usano due metodi principali:

### Metodo dei complementi algebrici (cofattori)

1. Calcola il **determinante** di $A$
2. Calcola la **matrice dei cofattori** $C$ (ogni elemento è un determinante 2×2 estratto dalla matrice)
3. Calcola la **trasposta** dei cofattori: $\text{adj}(A) = C^T$ (chiamata *matrice aggiunta* o *aggiunto classico*)
4. Dividi per il determinante:

$$A^{-1} = \frac{1}{\det(A)} \cdot \text{adj}(A)$$

### Metodo di Gauss-Jordan (più pratico per matrici grandi)

Si parte dalla matrice $A$ affiancata alla matrice identità:

$$[A \mid I]$$

Con operazioni di riga la si trasforma fino ad ottenere:

$$[I \mid A^{-1}]$$

Sul lato destro compare automaticamente la matrice inversa. Questo metodo è quello che usano i computer (numpy, scipy, ecc.).

---

## 🌍 A cosa serve nella vita reale?

### 1. Risolvere sistemi di equazioni lineari

Hai un sistema tipo:

$$\begin{cases} 2x + y = 5 \\ 5x + 3y = 13 \end{cases}$$

In forma matriciale diventa: $A \mathbf{x} = \mathbf{b}$

La soluzione è:

$$\mathbf{x} = A^{-1} \mathbf{b}$$

Basta moltiplicare la matrice inversa per il vettore dei termini noti!

---

### 2. Computer grafica e trasformazioni di immagini

Ogni volta che ruoti, zoomi o trasformi un'immagine (Photoshop, videogiochi, 3D), viene usata una matrice di trasformazione. La matrice inversa **annulla la trasformazione** — porta l'immagine allo stato originale.

> 💡 Esempio: se matrix $M$ ruota un oggetto 3D di 45°, allora $M^{-1}$ lo riporta indietro di 45°.

---

### 3. Sistemi di controllo industriale (ti interessa direttamente! 🏭)

Nei sistemi di controllo (come quelli Siemens G120X o nei PLC), si modellano processi fisici con equazioni matriciali. L'inversa serve per:
- Calcolare i parametri di un sistema a partire dalle uscite misurate
- Costruire controllori che "invertono" il comportamento del sistema per seguire il setpoint
- Risolvere sistemi di equazioni nei modelli stato-spazio

---

### 4. Ottimizzazione di portafogli finanziari

In finanza quantitativa, la **matrice di covarianza** degli asset viene invertita per trovare i pesi ottimali del portafoglio (metodo di Markowitz). Più bassa è la correlazione tra asset, più stabile è l'inversa.

---

### 5. Critografia e cifratura messaggi

Un messaggio può essere codificato moltiplicandolo per una matrice chiave. Per decifrarlo, si usa la sua inversa. Se non conosci la matrice (e il suo inverso), non puoi leggere il messaggio.

---

## ⚠️ Quando NON esiste l'inversa?

La matrice **non** è invertibile se:
- Il determinante è **zero**
- Le righe (o colonne) sono **linearmente dipendenti** (cioè una riga è multiplo di un'altra — informazione ridondante)
- La matrice **non è quadrata** (le righe devono essere uguali alle colonne)

In questi casi si parla di **matrice singolare** e si usano alternative come la pseudo-inversa (usata in machine learning e nei minimi quadrati).

---

## 🐍 Codice Python — Esempio pratico con NumPy

```python
import numpy as np

A = np.array([[2, 1],
              [5, 3]])

A_inv = np.linalg.inv(A)
I = A @ A_inv  # verifica: deve essere la matrice identità

print("Matrice A:")
print(A)
print("\nMatrice inversa A^-1:")
print(A_inv)
print("\nVerifica A @ A^-1 (deve essere I):")
print(np.round(I))
```

---

## 📝 Riepilogo visivo

| Concetto | Numeri normali | Matrici |
|---|---|---|
| Elemento neutro | $1$ | $I$ (matrice identità) |
| Inverso di $x$ | $\frac{1}{x}$ | $A^{-1}$ |
| Prodotto con l'inverso | $x \cdot \frac{1}{x} = 1$ | $A \cdot A^{-1} = I$ |
| Quando non esiste | $x = 0$ | $\det(A) = 0$ |

---

*Appunti generati con Python — Davide Cannistraro, 2026*
