import codecademylib3
import pandas as pd

orders = pd.read_csv('shoefly.csv')

orders['shoe_source'] = orders.apply(lambda row:
  'vegan' 
  if row.shoe_material != 'leather'
  else 'animal',
  axis=1
)

orders['salutation'] = orders.apply(lambda row:
  'Dear Mr. ' + row.last_name
  if row.gender == 'male'
  else 'Dear Ms. ' + row.last_name,
  axis=1
)

print(orders.head())


