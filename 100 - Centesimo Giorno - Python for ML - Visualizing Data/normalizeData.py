import pandas as pd

movies = pd.read_csv('movies.csv')

# Save the proportions to genre_props
genre_props = movies['genre'].value_counts(normalize=True)
print(genre_props)