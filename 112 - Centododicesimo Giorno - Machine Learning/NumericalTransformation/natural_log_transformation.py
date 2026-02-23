import pandas as pd 
import numpy as np
import matplotlib.pyplot as plt
import codecademylib3_seaborn 

## add code below
## read in csv file
cars = pd.read_csv('cars.csv')

## set you price variable
prices = cars['sellingprice']

## plot a histogram of prices
plt.hist(prices, bins=150)
plt.show()
plt.clf()
## log transform prices
log_prices = np.log(prices)

## plot a histogram of log_prices
plt.hist(log_prices, bins=150)
plt.show()

# Serve ad eliminare i right-skewed, non funziona se dati < 0 oppure left-skewed, aiuta ad eliminare outliers