import codecademylib3_seaborn
import matplotlib.pyplot as plt
import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

streeteasy = pd.read_csv("https://raw.githubusercontent.com/sonnynomnom/Codecademy-Machine-Learning-Fundamentals/master/StreetEasy/manhattan.csv")

df = pd.DataFrame(streeteasy)

# Input code here:
plt.scatter(df[['size_sqft']], df[['rent']], alpha=0.4)
plt.show()
plt.close()

plt.scatter(df[['min_to_subway']], df[['rent']], alpha=0.4)
plt.show()
plt.close()

plt.scatter(df[['bathrooms']], df[['rent']], alpha=0.4)
plt.show()
plt.close()

plt.scatter(df[['building_age_yrs']], df[['rent']], alpha=0.4)
plt.show()
plt.close()