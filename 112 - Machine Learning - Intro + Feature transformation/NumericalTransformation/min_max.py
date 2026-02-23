import pandas as pd
import numpy as np

coffee = pd.read_csv('starbucks_customers.csv')

## add code below
## get spent feature
spent = coffee['spent']

#find the max spent
max_spent = max(spent)

#find the min spent
min_spent = min(spent)

#find the difference
spent_range = max_spent - min_spent

#normalize your spent feature
spent_normalized = (spent - min_spent) / spent_range

#print your results
print(spent_normalized)