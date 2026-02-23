import pandas as pd
import numpy as np
from scipy.stats import chi2_contingency

npi = pd.read_csv("npi_sample.csv")

special_authority_freq = pd.crosstab(npi.special, npi.authority)
print("observed contingency table:")
print(special_authority_freq)

# calculate the expected contingency table if there's no association and save it as expected
chi2, pval, dof, expected = chi2_contingency(special_authority_freq)

# print out the expected frequency table
print("expected contingency table (no association):")
print(np.round(expected))

Se prendi un gruppo di dati “random” dove le variabili non sono collegate, i dati osservati e quelli attesi saranno simili. 
Se invece, in un nuovo set di dati, trovi che i numeri osservati sono molto diversi da quelli attesi, allora c’è una relazione tra le variabili.

Quindi:

    Poche differenze → variabili indipendenti
    Grandi differenze → variabili associate


