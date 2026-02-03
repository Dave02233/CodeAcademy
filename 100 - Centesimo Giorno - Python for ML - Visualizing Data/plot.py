import codecademylib3
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

movies = pd.read_csv('movies.csv')

# Create a boxplot for movie budget 
production_budget = sns.boxplot(x='production_budget', data=movies)
plt.show()
plt.close()
# Create a histogram for movie budget
production_budget = sns.histplot(x='production_budget', data=movies)
plt.show()
plt.close()
