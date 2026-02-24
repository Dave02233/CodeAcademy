import codecademylib3_seaborn
import matplotlib.pyplot as plt
from data import bs, bs_000000001, bs_01

# iterations = range(1400)
iterations = range(1400)

plt.plot(iterations, bs)
plt.xlabel("Iterations")
plt.ylabel("b value")
plt.show()
plt.clf()

#

#    Inizia con 0.01 (sicuro per la maggior parte dei casi)
#    Monitora la loss: dovrebbe diminuire stabilmente
#    Se troppo lento → aumenta a 0.05-0.1
#    Se oscilla → riduci a 0.001-0.005
