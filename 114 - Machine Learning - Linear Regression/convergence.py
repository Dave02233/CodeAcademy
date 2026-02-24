import codecademylib3_seaborn
import matplotlib.pyplot as plt
from data import bs

iterations = range(1400)

plt.plot(iterations, bs)
plt.xlabel("Iterations")
plt.ylabel("b value")
plt.show()

convergence_b = 47
num_iterations = 800

# Punto nel grafico in cui i parametri hanno smesso di cambiare (venivano cambiati col calcolo del gradiente)