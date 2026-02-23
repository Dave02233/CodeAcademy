import codecademylib3
import pandas as pd

df = pd.read_csv('imdb.csv')

# Rename columns here
df.columns = ['ID', 'Title', 'Category', 'Year Released', 'Rating']
print(df)


import codecademylib3
import pandas as pd

df = pd.read_csv('imdb.csv')

# Rename columns here
df.rename(columns = {
  'name': 'movie_title',
},
inplace = True)
print(df)
