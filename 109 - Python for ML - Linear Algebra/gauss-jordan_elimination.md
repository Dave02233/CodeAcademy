# Gauss-Jordan: come risolvere equazioni con le matrici (semplificato)

**Problema reale**: hai un **sistema di equazioni** e vuoi trovare i valori delle incognite.  
**Esempio concreto** (ingegneria: trovare correnti in un circuito elettrico):

$$
\begin{cases}
2x + y = 8 \\
 x + 3y = 10
\end{cases}
$$

Vuoi trovare x e y.

---

## Il trucco: Matrice Aumentata

Invece di scrivere le equazioni, le mettiamo in una **matrice aumentata**:

$$
\begin{bmatrix}
2 & 1 & | & 8 \\
1 & 3 & | & 10
\end{bmatrix}
$$

**Sinistra**: coefficienti (2,1 per prima equazione)  
**Barra**: =  
**Destra**: risultati (8,10)

---

## Obiettivo: forma "scalini"

Vogliamo trasformare questa matrice in:

$$
\begin{bmatrix}
1 & 0 & | & a \\
0 & 1 & | & b
\end{bmatrix}
$$

Dove **a** e **b** sono i valori di x e y!  
Tipo: "x = 2, y = 4". Facile da leggere.

---

## Come ci arrivi? Operazioni permesse (solo 3!)

Puoi fare **solo** queste operazioni sulle righe, senza cambiare il sistema:

1. **Scambiare due righe**
2. **Moltiplicare una riga per un numero** (≠ 0)
3. **Sommare un multiplo di una riga ad un'altra riga**

---

## Esempio PASSO-PASSO

**Partenza**:
$$
\begin{bmatrix}
2 & 1 & | & 8 \\
1 & 3 & | & 10
\end{bmatrix}
$$

### Passo 1: Primo pivot = 1
Divido riga 1 per 2:
$$
\begin{bmatrix}
1 & 0.5 & | & 4 \\
1 & 3 & | & 10
\end{bmatrix}
$$

### Passo 2: Elimino sotto il pivot
Riga2 = Riga2 - 1×Riga1:
$$
\begin{bmatrix}
1 & 0.5 & | & 4 \\
0 & 2.5 & | & 6
\end{bmatrix}
$$

### Passo 3: Secondo pivot = 1
Divido riga 2 per 2.5:
$$
\begin{bmatrix}
1 & 0.5 & | & 4 \\
0 & 1 & | & 2.4
\end{bmatrix}
$$

### Passo 4: Elimino sopra il secondo pivot
Riga1 = Riga1 - 0.5×Riga2:
$$
\begin{bmatrix}
1 & 0 & | & 2.8 \\
0 & 1 & | & 2.4
\end{bmatrix}
$$

**Soluzione**: x = 2.8, y = 2.4 ✅

---

## A cosa serve nella vita reale?

### 1. **Circuiti elettrici** ⚡
```
[ R1  R2 ] [ I1 ] = [ V1 ]
[ R3  R4 ] [ I2 ]   [ V2 ]
```
Trovi le correnti I1, I2 sapendo tensioni e resistenze.

### 2. **Controllo robot** 🤖
```
[ m1  0  ] [ x1 ]   [ F1 ]
[ 0   m2 ] [ x2 ] = [ F2 ]
```
Trovi accelerazioni sapendo masse e forze.

### 3. **Bilanci chimici** 🧪
Coefficienti di reazione → quantità reagenti/prodotti.

### 4. **Economia** 💰
```
[ p1  p2 ] [ q1 ] = [ C1 ]  ← costi fissi
[ p3  p4 ] [ q2 ]   [ C2 ]
```

### 5. **Machine Learning** 🤖
**Minimi quadrati**: trovi parametri migliori per il tuo modello:
```
X w = y    →    w = (X^T X)^{-1} X^T y
```
Gauss-Jordan risolve questo sistema gigante!

---

## Quando NON funziona (importante!)

Se arrivi a:
$$
\begin{bmatrix}
1 & 2 & | & 5 \\
0 & 0 & | & 2
\end{bmatrix}
$$

Significa **0 = 2** → **IMPOSSIBILE**!  
Il sistema non ha soluzione.

Oppure:
$$
\begin{bmatrix}
1 & 2 & | & 5 \\
0 & 0 & | & 0
\end{bmatrix}
$$

**Soluzioni infinite** (puoi scegliere liberamente una variabile).

---

## Che te ne fai? Sintesi

**Gauss-Jordan = "risolutore universale di sistemi lineari"**

1. **Ingegneria**: circuiti, strutture, controllo processi
2. **Robotica**: cinematica, traiettorie
3. **Data Science/ML**: regressione lineare, ottimizzazione
4. **Fisica**: equilibri di forze, circuiti RC
5. **Economia**: modelli input-output

**Bottom line**: hai **N equazioni con N incognite** → matrice aumentata → Gauss-Jordan → **soluzione numerica precisa**.

È il metodo che sta **sotto il cofano** di tutti i solver numerici moderni (NumPy, MATLAB, ecc.).
