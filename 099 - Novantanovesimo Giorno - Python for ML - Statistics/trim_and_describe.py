import pandas as pd

movies = pd.read_csv('movies.csv')

print(movies.head())

# Save the mean to mean_budget
mean_budget = movies['production_budget'].mean()

# Save the median to med_budget
med_budget = movies['production_budget'].median()

# Save the mode to mode_budget
mode_budget = movies['production_budget'].mode()

# Save the trimmed mean to trmean_budget
from scipy.stats import trim_mean
trmean_budget = trim_mean(movies['production_budget'], proportiontocut=0.2)
