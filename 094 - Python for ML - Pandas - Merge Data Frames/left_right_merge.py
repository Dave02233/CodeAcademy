import codecademylib3
import pandas as pd

store_a = pd.read_csv('store_a.csv')
print(store_a)
store_b = pd.read_csv('store_b.csv')
print(store_b)

store_a_b_left = pd.merge(store_a, store_b, how='left')
store_b_a_left = pd.merge(store_b, store_a, how='left')

print(store_a_b_left)
print(store_b_a_left)

