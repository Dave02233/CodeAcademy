import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler 

coffee = pd.read_csv('starbucks_customers.csv')
ages = coffee['age']

## add code below
scaler = StandardScaler()

#reshape rende una series -> una matrice bidimensionale con x, y di dimensione, puoi mettere massimo un -1 (calcolo automatico di righe oppure di colonne)
ages_reshaped = np.array(ages).reshape(-1, 1)

ages_scaled = scaler.fit_transform(ages_reshaped)

print(ages_scaled.mean())
print(ages_scaled.std())