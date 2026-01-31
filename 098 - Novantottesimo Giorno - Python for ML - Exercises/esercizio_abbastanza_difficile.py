import codecademylib3

# Import pandas with alias
import pandas as pd

# Read in the census dataframe
census = pd.read_csv('census_data.csv', index_col=0)

print(census.head())

print(census.dtypes)

print(census.birth_year.unique())

census.birth_year.replace('missing', 1967, inplace=True)
print(census.birth_year.unique())

census.birth_year = census.birth_year.astype('int32')
print(census.dtypes)

print(census.birth_year.mean())

census.higher_tax = pd.Categorical(census.higher_tax, ['strongly disagree', 'disagree', 'neutral', 'agree', 'strongly agree'], ordered=True)
print(census.higher_tax.unique())

census.higher_tax = census.higher_tax.cat.codes
print(census.higher_tax.median())

categorie = list(census['marital_status'].unique())
mappa = {
  categoria: indice
  for indice, categoria in enumerate(categorie)
}
census['marital_codes'] = census['marital_status'].map(mappa)

census = pd.get_dummies(census, columns=['marital_status'])
print(census.head())

from datetime import datetime
census['age'] = datetime.now().year - census['birth_year']
bins = [i for i in range(20, 101, 5)]
labels = []
for i in range(len(bins) - 1):
  if len(labels) == 0:   
    labels.append(f'{bins[i]}-{bins[i+1]}')
  else:
    labels.append(f'{bins[i] + 1}-{bins[i+1]}')

census['age_group'] = pd.cut(census['age'], bins=bins, labels=labels, right=False)
print(census.head())
