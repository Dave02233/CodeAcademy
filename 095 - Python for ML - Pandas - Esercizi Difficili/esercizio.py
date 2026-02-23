import codecademylib3
import pandas as pd

visits = pd.read_csv('visits.csv',
                     parse_dates=[1])
cart = pd.read_csv('cart.csv',
                   parse_dates=[1])
checkout = pd.read_csv('checkout.csv',
                       parse_dates=[1])
purchase = pd.read_csv('purchase.csv',
                       parse_dates=[1])

print(visits.head())
print(cart.head())
print(checkout.head())
print(purchase.head())

visits_cart = pd.merge(
  visits,
  cart,
  how='left'
)

len_visits_cart = len(visits_cart)

len_null_cart_ts = len(visits_cart[visits_cart.cart_time.isnull()])
#print(len_null_cart_ts)

no_shirt_in_cart = float(len_null_cart_ts) / float(len_visits_cart)
#print(no_shirt_in_cart)

cart_checkout = pd.merge(
  cart,
  checkout,
  how='left'
)
#print(cart_checkout)

no_checkout = float(cart_checkout.checkout_time.isnull().sum()) / float(len(cart_checkout))
#print(no_checkout)

all_data = visits.merge(cart.merge(checkout.merge(purchase), how='left'), how='left')
print(all_data)

no_shirt_purchase_df = all_data[(all_data.purchase_time.isnull()) & (all_data.checkout_time.notnull())]

no_shirt_purchase = len(no_shirt_purchase_df) / len(all_data)

step_not_completed_group = max([no_shirt_in_cart, no_checkout, no_shirt_purchase])

print(step_not_completed_group)

all_data['time_to_purchase'] = all_data['purchase_time'] - all_data['visit_time']

print(all_data.head())

print(all_data['time_to_purchase'].mean())





