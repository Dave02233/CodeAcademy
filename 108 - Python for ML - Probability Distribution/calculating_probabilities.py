import numpy as np
import matplotlib.pyplot as plt
from scipy import stats

## Setting up our parameters
std_dev = 20
samp_size = 25

standard_error = std_dev / (samp_size**.5)
# remember that **.5 is raising to the power of one half, or taking the square root

x = 30
mean = 36

cod_cdf = stats.norm.cdf(x,mean,standard_error)
print(cod_cdf)

# Nota: Uso la CDF (cumulative distribution function) perché voglio la
# probabilità che la media campionaria sia minore o uguale a `x` (cioè
# P(sample mean <= 30)). La funzione `stats.norm.cdf(x, mean, standard_error)`
# restituisce esattamente questa probabilità per una normale con media
# `mean` e deviazione standard `standard_error`.
#
# Come ho calcolato `standard_error`: lo standard error della media è
# sigma / sqrt(n). Qui `std_dev` è la deviazione standard della popolazione
# (20) e `samp_size` è la dimensione del campione (25), quindi
# `standard_error = 20 / sqrt(25) = 4`. Questo valore misura la variabilità
# attesa delle medie di campione di dimensione 25.
