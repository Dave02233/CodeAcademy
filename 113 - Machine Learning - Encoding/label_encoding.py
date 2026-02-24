import pandas as pd
cars = pd.read_csv('cars.csv')

print(cars['make'].head())
# convert 'make' feature to category type
cars['make'] = cars['make'].astype('category')

# save new version of category codes
cars['make'] = cars['make'].cat.codes

# print to see transformation
print(cars['make'].head())
