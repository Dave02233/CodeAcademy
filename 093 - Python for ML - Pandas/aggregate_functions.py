import codecademylib3
import pandas as pd

orders = pd.read_csv('orders.csv')

pricey_shoes = orders.groupby('shoe_type').price.max()

print(pricey_shoes)

print(type(pricey_shoes))


# Conversione da Series a Data Frame con reset index
import codecademylib3
import pandas as pd

orders = pd.read_csv('orders.csv')
print(orders.groupby('shoe_type').price.max())

pricey_shoes = orders.groupby('shoe_type').price.max().reset_index()
print(pricey_shoes)

print(type(pricey_shoes))