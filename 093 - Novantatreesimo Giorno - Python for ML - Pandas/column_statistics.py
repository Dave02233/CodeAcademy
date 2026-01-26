import codecademylib3
import pandas as pd

orders = pd.read_csv('orders.csv')

print(orders.head(10))

most_expensive = orders.price.max()
print(most_expensive)

num_colors = orders.shoe_color.nunique()
print(num_colors)