# Matrice Inversa: a cosa serve davvero (semplice)

**Problema**: hai un sistema $Ax = b$ e vuoi $x = ?$  
**Soluzione elegante**: $x = A^{-1} b$ dove $A^{-1}$ è la **matrice inversa** di $A$.  

È come dividere per una matrice!

---

## Cos'è la matrice inversa

Due matrici $A$ e $B$ sono **inverse** se:
$$
AB = BA = I
$$
dove $I$ è la **matrice identità** (1 sulla diagonale, 0 altrove):

$$
I =
\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}
$$

**Proprietà**: $A^{-1}$ esiste solo se $A$ è **invertibile** (determinante ≠ 0).

---

## Perché è utile (applicazioni reali)

### 1. Risoluzione di sistemi lineari
$$
Ax = b \quad \Rightarrow \quad x = A^{-1} b
$$

**Esempio (circuito)**:
$$
\begin{bmatrix}
R_1 & R_2 \\
R_3 & R_4
\end{bmatrix}
\begin{bmatrix}
I_1 \\
I_2
\end{bmatrix}
=
\begin{bmatrix}
V_1 \\
V_2
\end{bmatrix}
$$

Allora $I = A^{-1} V$ → le correnti si calcolano con un prodotto di matrici.

### 2. Trasformazioni geometriche (robotica / grafica)
Rotazione di angolo $\theta$:
$$
R(\theta) = \begin{bmatrix}
\cos\theta & -\sin\theta \\
\sin\theta & \cos\theta
\end{bmatrix}
$$
Si ha $R(\theta)^{-1} = R(-\theta)$ (inverte la rotazione).

### 3. Machine Learning (regressione)
$$
w = (X^T X)^{-1} X^T y
$$
I parametri del modello si ottengono usando l'inversa della matrice di covarianza.

### 4. Controllo processi (automazione)
Stati futuri: $A^k x_0$.  
Per riportare a uno stato target si usa $A^{-k} x_{\text{target}}$.

---

## Come si calcola (Gauss-Jordan)

Per trovare $A^{-1}$ si usa la **matrice aumentata** $[A\mid I]$ e si riduce la parte sinistra fino a ottenere $I$.

Esempio: $A = \begin{bmatrix}2 & 1 \\
1 & 3\end{bmatrix}$.

Passi (notazione compatta):

$$
[A\mid I] = \left[\begin{array}{cc|cc}
2 & 1 & 1 & 0 \\
1 & 3 & 0 & 1
\end{array}\right]
$$

1) Dividi R1 per 2:
$$
\left[\begin{array}{cc|cc}
1 & 0.5 & 0.5 & 0 \\
1 & 3   & 0   & 1
\end{array}\right]
$$

2) R2 ← R2 - R1:
$$
\left[\begin{array}{cc|cc}
1 & 0.5 & 0.5  & 0 \\
0 & 2.5 & -0.5 & 1
\end{array}\right]
$$

3) Dividi R2 per 2.5:
$$
\left[\begin{array}{cc|cc}
1 & 0.5 & 0.5  & 0 \\
0 & 1   & -0.2 & 0.4
\end{array}\right]
$$

4) R1 ← R1 - 0.5 R2:
$$
\left[\begin{array}{cc|cc}
1 & 0 & 0.7  & -0.2 \\
0 & 1 & -0.2 & 0.4
\end{array}\right]
$$

Da qui ricavi:
$$
A^{-1} = \begin{bmatrix}0.7 & -0.2 \\
-0.2 & 0.4\end{bmatrix}
$$

---

## Vantaggi vs Gauss-Jordan diretto

| Metodo | Pro | Contro |
|--------|-----|--------|
| Gauss-Jordan su $[A\mid b]$ | risolve 1 sistema | devi rifare il procedimento per ogni $b$ |
| Matrice inversa | risolve tutti i $b$ con 1 calcolo di $A^{-1}$ | più lavoro iniziale |

Ideale quando risolvi lo stesso $A$ per molti $b$ diversi (es. stesso circuito, tensioni variabili).

---

## Sintesi pratica

1. **Automazione/robotica**: undo trasformazioni, cinematica inversa
2. **ML/Regressione**: formula chiusa per parametri ottimali
3. **Controllo**: stabilizzazione sistemi dinamici
4. **Grafica 3D**: matrici view/projection inverse
5. **Fisica**: equilibri forze, ottica (lenti)

**Regola d'oro**: $A^{-1}$ = "dividi per matrice" = undo di una trasformazione lineare.

È il "ctrl+Z" del mondo matriciale!
