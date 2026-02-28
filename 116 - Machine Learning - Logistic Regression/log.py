import numpy as np
from exam import hours_studied, calculated_coefficients, intercept

# Calculate odds_of_rain
odds_of_rain = 0.4 / 0.6
# p / 1 - p
print(f'odds_of_rain: {odds_of_rain}')

# Calculate log_odds_of_rain
log_odds_of_rain = np.log(odds_of_rain)
print(f'log_odds_of_rain: {log_odds_of_rain}')

# Calculate odds_on_time
odds_on_time = 0.9 / 0.1
print(f'odds_on_time: {odds_on_time}')

# Calculate log_odds_on_time
log_odds_on_time = np.log(odds_on_time)
print(f'log_odds_on_time: {log_odds_on_time}')
