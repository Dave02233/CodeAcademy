# Matrici: cosa sono, a cosa servono e che me ne faccio?

Una matrice è una **griglia di numeri** organizzata in righe e colonne.  
È come una tabella di Excel, ma solo con numeri. È l'evoluzione naturale dei vettori (che sono matrici "schiacciate" in una riga o colonna).

---

## Cos'è una matrice (con esempi reali)

$$
\begin{bmatrix}
3 & 1 & 6 \\
2 & 1 & 5 \\
6 & 2 & 1
\end{bmatrix}
$$

Questa è una matrice **3×3** (3 righe, 3 colonne). Ogni numero ha una **posizione** precisa: riga 1, colonna 2 è il `1`.

### Esempi pratici di matrici

**1. Trasformazioni grafiche (videogiochi, grafica 3D)**

$$
\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}
$$

Matrice identità: applicata a un vettore non lo cambia.

**2. Sistema di equazioni (ingegneria, economia)**

$$
\begin{bmatrix}
2 & 1 \\
1 & 3
\end{bmatrix}
\begin{bmatrix}
x \\
 y
\end{bmatrix}
=
\begin{bmatrix}
5 \\
8
\end{bmatrix}
$$

**3. Database numerico**

$$
\begin{bmatrix}
10 & 20 & 30
\end{bmatrix} \quad \text{(vendite lunedì)}
$$

Ogni **riga** può rappresentare un'osservazione, ogni **colonna** una variabile.

---

## Operazioni fondamentali con le matrici

### 1. Somma di matrici (stessa dimensione)

Si sommano **elemento per elemento** (stessa riga, stessa colonna):

$$
\begin{bmatrix}
1 & 6 & 3 \\
2 & 1 & 6
\end{bmatrix}
+
\begin{bmatrix}
2 & 1 & 5 \\
6 & 2 & 1
\end{bmatrix}
=
\begin{bmatrix}
3 & 7 & 8 \\
8 & 3 & 7
\end{bmatrix}
$$

**Quando si usa**: combinare dati di giorni/ore diversi, sommare contributi paralleli.

### 2. Moltiplicazione per scalare

Moltiplicare ogni elemento di una matrice per uno scalare:

$$
2 \cdot
\begin{bmatrix}
3 & 5 \\
-2 & 1
\end{bmatrix}
=
\begin{bmatrix}
6 & 10 \\
-4 & 2
\end{bmatrix}
$$

**Quando si usa**: raddoppiare i dati, scalare previsioni, cambiare unità.

### 3. Moltiplicazione tra matrici

Per calcolare $C = A \times B$ serve che il numero di colonne di $A$ sia uguale al numero di righe di $B$. Ogni elemento di $C$ è il prodotto scalare tra una riga di $A$ e una colonna di $B$.

Esempio:

$$
A =
\begin{bmatrix}
1 & 3 \\
6 & 2
\end{bmatrix}, \quad
B =
\begin{bmatrix}
2 & 5 \\
1 & 6
\end{bmatrix}
$$

$$
A \times B =
\begin{bmatrix}
1\cdot2 + 3\cdot1 & 1\cdot5 + 3\cdot6 \\
6\cdot2 + 2\cdot1 & 6\cdot5 + 2\cdot6
\end{bmatrix}
=
\begin{bmatrix}
5 & 23 \\
14 & 42
\end{bmatrix}
$$

**Proprietà importanti**:
- NON è commutativa: $A\times B \neq B\times A$ in generale.
- È associativa: $A(BC) = (AB)C$.

---

## Applicazioni pratiche

### Videogiochi e grafica 3D
Rotazioni e trasformazioni si fanno con matrici. Esempio di rotazione di 90°:

$$
R_{90^\circ} =
\begin{bmatrix}
0 & 1 \\
-1 & 0
\end{bmatrix}
$$

### Machine Learning
I pesi di un layer sono una matrice: $W \cdot X$ produce l'output del neurone.

$$
W = \begin{bmatrix} peso_1 & peso_2 & peso_3 \end{bmatrix}, \quad W \cdot X = \text{output}
$$

### Robotica e automazione
Trasformazioni omogenee 3D (rotazioni + traslazioni) si rappresentano con matrici 4×4:

$$
T =
\begin{bmatrix}
1 & 0 & 0 & t_x \\
0 & 1 & 0 & t_y \\
0 & 0 & 1 & t_z \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

### Elaborazione immagini
Filtri convoluzionali sono piccole matrici applicate sull'immagine, es. filtro bordo:

$$
\text{Filtro bordi} =
\begin{bmatrix}
0 & -1 & 0 \\
-1 & 5 & -1 \\
0 & -1 & 0
\end{bmatrix}
$$

---

## Sintesi: perché le matrici sono utili

- Permettono trasformazioni lineari (rotazioni, scalature, traslazioni).  
- Sono il formato standard per dati numerici in ML, grafica, robotica.  
- Se devi trasformare dati tabellari in modo lineare, userai matrici.

Le matrici sono il linguaggio della linearità: comprenderle apre molte porte in ingegneria, dati e simulazioni.
