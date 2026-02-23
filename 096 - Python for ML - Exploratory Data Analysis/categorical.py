import codecademylib3

# Import pandas with alias
import pandas as pd

# Import dataset as a Pandas dataframe
movies = pd.read_csv("netflix_movies.csv")

# View the first five rows of the dataframe
print(movies.head())

# Print the unique values in the country column
print(movies.country.unique())

# Set the correct value for country_variable_type
country_variable_type = 'nominal'
