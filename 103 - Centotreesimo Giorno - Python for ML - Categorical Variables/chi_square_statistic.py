import pandas as pd
import numpy as np
from scipy.stats import chi2_contingency

npi = pd.read_csv("npi_sample.csv")

special_authority_freq = pd.crosstab(npi.special, npi.authority)

# calculate the chi squared statistic and save it as chi2, then print it:
chi2, p, dof, expected = chi2_contingency(special_authority_freq)
print(chi2)

# Vista la tabella 2x2 un Chi2 più alto di 4 suggerisce un associazione tra le variabili
