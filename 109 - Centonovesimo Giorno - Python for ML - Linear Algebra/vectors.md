# Vettori: cosa sono, a cosa servono e che me ne faccio?

Immagina di dire: “Sto andando a 40 km/h verso Milano lungo l’autostrada”.  
Non basta dire **quanto** vai veloce, serve anche **dove** stai andando: qui entra in gioco il vettore. [web:7][web:10]

---

## Cos'è un vettore 

- Uno **scalare** è una quantità con solo numero:  
  - temperatura: 20 °C  
  - massa: 70 kg  
  - tempo: 5 secondi  
  Qui conta solo “quanto”, non “in che direzione”. [web:7]

- Un **vettore** è una quantità con:
  - **modulo**: quanto è grande (ad es. 40 km/h)  
  - **direzione e verso**: dove va (ad es. verso nord-est) [web:7][web:10]

- Nella pratica:
  - velocità dell’auto (quanto veloce e in che direzione)  
  - forza con cui spingi un mobile (quanto forte e in che direzione lo spingi)  
  - vento (quanto soffia e da dove a dove) [web:7][web:5]

Quando hai una grandezza in cui direzione e verso contano, hai quasi sicuramente un vettore. [web:7][web:10]

---

## Come si scrive un vettore

Un vettore si può scrivere come una lista di numeri tra parentesi quadre:

- Nel piano (2D): `[x, y]`  
  - esempio: `a = [3, -4]` → 2 numeri → vettore **bidimensionale**  

- Nello spazio (3D): `[x, y, z]`  
  - esempio: `v = [-12, 8, -2]` → 3 numeri → vettore **tridimensionale** [web:10]

Il **numero di componenti** è la **dimensione** del vettore (2D, 3D, 4D, …). [web:10]

---

## A cosa servono i vettori nella vita reale

- **GPS e mappe**
  - Il tuo telefono rappresenta la posizione come numeri (latitudine, longitudine, a volte altezza): quello è un vettore.  
  - Lo spostamento da “casa” a “lavoro” è un vettore che va da un punto all’altro. [web:2]

- **Navigazione aereo / barca**
  - L’aereo ha un vettore velocità.  
  - Il vento è un altro vettore.  
  - Il risultato (dove davvero va l’aereo) è la **somma** di questi vettori. [web:2][web:5]

- **Grafica 3D e videogiochi**
  - La posizione di ogni oggetto 3D è un vettore.  
  - La direzione della luce, della telecamera, dei proiettili sono vettori.  
  - Le normali alle superfici (per luci, riflessi, ecc.) sono vettori. [web:2]

- **Robotica e automazione**
  - La posizione e l’orientamento del braccio robotico sono descritti con vettori.  
  - I movimenti che deve fare (spostati di 10 cm in X, 5 in Y, ecc.) sono vettori. [web:2]

- **Ingegneria (ponti, edifici, strutture)**
  - Le forze che agiscono su una trave/pilastro sono vettori, con modulo e direzione.  
  - Si sommano i vettori per capire se la struttura regge o cede. [web:2][web:8]

In pratica: ogni volta che c’è qualcosa che **si muove** o una **forza che agisce in una certa direzione**, stai lavorando con vettori. [web:7][web:10]

---

## Modulo (lunghezza) di un vettore

Il **modulo** è quanto è “lungo” il vettore, cioè la sua grandezza.  
Se il vettore è $v = [v_1, v_2, ..., v_n]$, il modulo si calcola così:

$$
\|\|v\|\| = \sqrt{v_1^2 + v_2^2 + \cdots + v_n^2}
$$

È lo stesso teorema di Pitagora, ma esteso a più dimensioni:  
- elevi al quadrato ogni componente  
- li sommi  
- fai la radice quadrata [web:10][web:9]

### Esempio 3D

Prendi $v = [-12, 8, -2]$:

$$
\|\|v\|\| = \sqrt{(-12)^2 + 8^2 + (-2)^2} = \sqrt{144 + 64 + 4} = \sqrt{212} \approx 14.56
$$

Qui il numero 14,56 può rappresentare, ad esempio, una distanza in metri tra due punti nello spazio. [web:10]

---

## Esempi semplici di modulo

1. $a = [3, -4]$

$$
\|\|a\|\| = \sqrt{3^2 + (-4)^2} = \sqrt{9 + 16} = \sqrt{25} = 5
$$

È esattamente il classico triangolo 3–4–5 del teorema di Pitagora. [web:10]

2. $b = [0, 2, 6]$

$$
\|\|b\|\| = \sqrt{0^2 + 2^2 + 6^2} = \sqrt{0 + 4 + 36} = \sqrt{40} \approx 6.32
$$

3. $c = [2, 6, 0]$

$$
\|\|c\|\| = \sqrt{2^2 + 6^2 + 0^2} = \sqrt{4 + 36 + 0} = \sqrt{40} \approx 6.32
$$

Nota che b e c hanno lo stesso modulo, anche se cambiano le componenti: la “lunghezza” totale nello spazio è la stessa. [web:10]

4. $d = [-12, 13]$

$$
\|\|d\|\| = \sqrt{(-12)^2 + 13^2} = \sqrt{144 + 169} = \sqrt{313} \approx 17.7
$$

---

## Operazioni principali con i vettori

Qui arriviamo a “che ci faccio, concretamente, con un vettore?”.

### 1. Somma di vettori

Due vettori si possono **somma**re, componente per componente:

- Esempio:  
  $u = [1, 2]$, $v = [3, -1]$

  $$
  u + v = [1 + 3,\ 2 + (-1)] = [4, 1]
  $$

Interpretazione pratica:  
- un vettore può essere lo spostamento “dalla fermata del bus a casa”  
- l’altro “da casa al bar”  
La somma è “dalla fermata del bus al bar in un’unica botta”. [web:9][web:13]

In fisica, sommi vettori quando hai più forze o più velocità che agiscono contemporaneamente sullo stesso oggetto (es. motore dell’auto + vento laterale). [web:7][web:5]

---

### 2. Prodotto per uno scalare (allungare o accorciare)

Se moltiplichi un vettore per un numero (scalare), ne cambi la **lunghezza**, non la direzione:

- Esempio:  
  $v = [2, 3]$  
  - $2 \cdot v = [4, 6]$ → stesso verso, il vettore è “il doppio”  
  - $-1 \cdot v = [-2, -3]$ → stessa direzione, verso opposto [web:9]

Interpretazione pratica:  
- hai un vettore velocità che rappresenta 50 km/h  
- “raddoppiare la velocità” è come moltiplicare il vettore per 2  
- “invertire il verso” è come moltiplicare per -1 [web:7][web:9]

---

### 3. Prodotto scalare (quanto vanno “d’accordo” due direzioni)

Il **prodotto scalare** prende due vettori e restituisce un numero (non un vettore). [web:9][web:15]

Per due vettori $a$ e $b$:

$$
a \cdot b = \|\|a\|\| \cdot \|\|b\|\| \cos(\theta)
$$

dove $\theta$ è l’angolo tra loro.  
Significato intuitivo:

- se il risultato è **positivo**, i due vettori puntano più o meno nella stessa direzione  
- se è **zero**, sono **perpendicolari** (non si aiutano né si ostacolano)  
- se è **negativo**, puntano in direzioni opposte [web:9][web:15]

Esempio reale:  
- il **lavoro** che fai spingendo un’auto dipende da quanta della tua forza è nella stessa direzione dello spostamento: questo si calcola proprio con il prodotto scalare. [web:1][web:4]

In informatica, il prodotto scalare è alla base della similarità tra vettori (es. in machine learning: quanto due “profili” o due “documenti” sono simili). [web:9]

---

## Perché ti devono interessare i vettori (sintesi “che me ne faccio?”)

- Ti permettono di **descrivere** in modo pulito tutto ciò che ha direzione: velocità, forze, spostamenti. [web:7][web:10]
- Sono la base di **grafica 3D**, **videogiochi**, **robotica**, **simulazioni fisiche**, **navigazione GPS**, **ingegneria strutturale**. [web:2][web:8]
- In matematica e informatica, i vettori sono la forma “standard” per rappresentare dati: una riga di un database numerico, un input per una rete neurale, un embedding di testo, ecc. [web:3][web:9]

Se capisci bene:
- cosa è un vettore  
- come calcolare il modulo  
- come sommare vettori  
- come scalarli (moltiplicarli per un numero)  
- cosa significa il prodotto scalare  

hai in mano il “mattoncino base” che poi ritroverai ovunque: dalla fisica del liceo fino al machine learning avanzato. [web:9][web:10]
