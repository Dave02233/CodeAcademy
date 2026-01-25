import pandas as pd

df = pd.read_csv('employees.csv')

# Add columns here
get_last_name = lambda x : x.split(' ')[-1]
df['last_name'] = df.name.apply(get_last_name)
print(df)


import codecademylib3
import pandas as pd

df = pd.read_csv('employees.csv')

total_earned = lambda row: (
  row['hours_worked'] * row['hourly_wage'] 
  if row['hours_worked'] <=40
  else 
  (40 * row['hourly_wage'])
  + (row['hours_worked'] - 40) 
  * (row['hourly_wage'] * 1.5)
)

df['total_earned'] = df.apply(total_earned, axis=1)
#axis: 0 - per colonna, 1 - per riga
