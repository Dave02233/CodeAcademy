import pandas as pd
import numpy as np
import matplotlib.pyplot as plt 
import codecademylib3_seaborn 

coffee = pd.read_csv('starbucks_customers.csv')

ages = coffee['age']

min_age = min(ages)
max_age = max(ages)

print(max_age - min_age)

mean_age = ages.mean()
print(mean_age)

centered_ages = ages - mean_age

plt.hist(centered_ages)
plt.xlabel('Disance from mean')
plt.ylabel('Count')
plt.show()