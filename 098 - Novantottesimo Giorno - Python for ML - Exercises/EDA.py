import pandas as pd
heart = pd.read_csv('processed.cleveland.data.csv')
print(heart.head())

heart.heart_disease.value_counts()

print(heart.info())

print(heart.ca.unique())
#array(['0.0', '3.0', '2.0', '1.0', '?'], dtype=object)

import numpy as np 
hear.ca.replace('?', np.NaN, inplace=True)

print(heart.info())
