import numpy as np
from math import sin
import codecademylib3
import matplotlib.pyplot as plt

# Passo di campionamento: più è piccolo, più punti hai e (in genere) migliore è l'approssimazione numerica
dx = 0.1

# Funzione scalare: prende un singolo x e restituisce sin(x)
def f(x):
    return sin(x)

# Costruisci l'asse x: valori da 0 a 20 con passo dx (array/lista di campioni)
sin_x = [x for x in np.arange(0, 20, dx)]

# Valuta la funzione su ogni campione x: ottieni i valori y = sin(x) campionati
sin_y = [f(x) for x in np.arange(0, 20, dx)]

# Stima numericamente la derivata dy/dx dei valori sin_y rispetto a x.
# Passando dx dici a NumPy qual è la distanza tra due campioni consecutivi sull'asse x.
# Internamente usa differenze finite (centrali all'interno, one-sided ai bordi).
sin_deriv = np.gradient(sin_y, dx)  # ~ cos(x) perché d/dx(sin(x)) = cos(x) 

# Disegna sin(x)
plt.plot(sin_x, sin_y)

# Disegna la derivata stimata (dovrebbe assomigliare a cos(x))
plt.plot(sin_x, sin_deriv)

plt.show()
