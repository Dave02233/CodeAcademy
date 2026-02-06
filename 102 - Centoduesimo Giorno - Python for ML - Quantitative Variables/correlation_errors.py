import pandas as pd
import matplotlib.pyplot as plt
import codecademylib3
from scipy.stats import pearsonr

sleep = pd.read_csv("sleep_performance.csv")

# create your scatter plot here:
plt.scatter(x=sleep.hours_sleep, y=sleep.performance)
plt.show()

# calculate the correlation for `hours_sleep` and `performance`:
corr_sleep_performance, p = pearsonr(sleep.hours_sleep, sleep.performance)
print(corr_sleep_performance, p)

# Con dati su scatter con m=0 oppure ellissi, quindi comportamento non lineare, la correlazione lineare (pearsonr) sarà bassa
