import codecademylib3

# Import pandas with alias
import pandas as pd

# Import dataset as a Pandas dataframe
movies = pd.read_csv("netflix_movies.csv")

# View the first five rows of the dataframe
print(movies.head())

# Print the data types
print(movies.dtypes)

# Fill in the missing cast_count values with 0
movies['cast_count'].fillna(0, inplace = True)

# Change the type of the cast_count column
movies.cast_count.astype('int64')

# Check the data types of the columns again. 
print(movies.dtypes)
