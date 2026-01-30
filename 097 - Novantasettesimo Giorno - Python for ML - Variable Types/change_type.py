import codecademylib3

# Import pandas with alias
import pandas as pd

# Import dataset as a Pandas dataframe
movies = pd.read_csv("netflix_movies.csv")

# View the first five rows of the dataframe
print(movies.head())

# Print the data types of dataframe 
print(movies.dtypes)

# Add the variables you plan to change to this list
change = ['title', 'country', 'rating', 'duration']

# Change the title variable to a "string"
movies.title.astype('string')
# Change any other variables
movies.country.astype('string')
movies.rating.astype('string')
movies.duration.astype('string')
# Print the data types again
print(movies.dtypes)

