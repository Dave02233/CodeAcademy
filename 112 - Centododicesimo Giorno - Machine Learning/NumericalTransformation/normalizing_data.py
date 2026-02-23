import pandas as pd
import numpy as np

coffee = pd.read_csv('starbucks_customers.csv')
ages = coffee['age']

## add code below
## set up your variables
mean_age = ages.mean()

std_dev_age = ages.std()
## standardize ages
ages_standardized = (ages - mean_age) / std_dev_age

## print the results 
print(ages_standardized.mean())
print(ages_standardized.std())

