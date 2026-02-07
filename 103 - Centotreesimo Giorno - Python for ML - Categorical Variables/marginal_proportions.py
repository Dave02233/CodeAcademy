import pandas as pd
import numpy as np

npi = pd.read_csv("npi_sample.csv")

# save the table of frequencies as special_authority_freq:
special_authority_freq = pd.crosstab(npi.special, npi.authority)

# save the table of proportions as special_authority_prop:
special_authority_prop = special_authority_freq/len(npi)
print(special_authority_prop)
#
#authority        no       yes
#special                      
#no         0.366676  0.171668
#yes        0.200865  0.260791

# calculate and print authority_marginals
authority_marginals = special_authority_prop.sum(axis=0)
print(authority_marginals)

authority
no     0.567541
yes    0.432459
dtype: float64

# calculate and print special_marginals
special_marginals = special_authority_prop.sum(axis=1)
print(special_marginals)

special
no     0.538344
yes    0.461656
dtype: float64

