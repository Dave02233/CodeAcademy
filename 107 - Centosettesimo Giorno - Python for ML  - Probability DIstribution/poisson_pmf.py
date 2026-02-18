import scipy.stats as stats

"""
Uso della distribuzione di Poisson:
La distribuzione di Poisson modella il numero di eventi discreti che
si verificano in un intervallo fisso di tempo o spazio quando:
- gli eventi sono rari e discreti,
- gli eventi sono indipendenti,
- la media (λ) degli eventi nell'intervallo è nota e costante.

In questo script si usa Poisson con λ = 15 per calcolare la probabilità
di osservare esattamente 15 eventi e la probabilità di osservare tra
7 e 9 eventi inclusi.
"""

## Checkpoint 1
# calculate prob_15
prob_15 = stats.poisson.pmf(15, 15)

# print prob_15
print(prob_15)


## Checkpoint 
# calculate prob_7_to_9
prob_7_to_9 = stats.poisson.pmf(7, 15) + stats.poisson.pmf(8, 15) + stats.poisson.pmf(9, 15)

# print prob_7_to_9
print(prob_7_to_9)