import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import codecademylib3
from scipy.stats import pearsonr

np.set_printoptions(suppress=True, precision=1)

penguins = pd.read_csv("penguins.csv")

print(penguins.head())

plt.scatter(x=penguins.flipper_length_mm, y=penguins.body_mass_g)
plt.xlabel("flipper length")
plt.ylabel("body mass")
plt.show()
plt.close()
