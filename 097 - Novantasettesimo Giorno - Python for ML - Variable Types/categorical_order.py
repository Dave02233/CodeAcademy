import codecademylib3

# Import pandas with alias
import pandas as pd

# Import dataset as a Pandas Dataframe
movies = pd.read_csv('netflix_movies.csv')

# View the first five rows of the dataframe
print(movies.head())

# Print the unique values of the rating column
print(movies['rating'].unique())

# Change the data type of `rating` to category
movies.rating = pd.Categorical(movies.rating, ['NR', 'G', 'PG', 'PG-13', 'R'], ordered=True)

print(movies.rating.unique())

# Recheck the values of `rating` with .unique()

