import pandas as pd
cars = pd.read_csv('cars.csv')

## one hot encode the feature
## label this variable ohe
ohe = pd.get_dummies(cars['body'])

## print the column names
cars = cars.join(ohe)

## check out one of your new columns
## print the 'suv' column
print(cars['suv'])