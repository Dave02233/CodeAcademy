import scipy.stats as stats
import numpy as np

## Checkpoint 1
expected_bonus = 75000*0.08
print(expected_bonus)


## Checkpoint 2
num_goals = stats.poisson.rvs(4, size = 100)

## Checkpoint 3
print(np.var(num_goals))

## Checkpoint 4
num_goals_2 = num_goals*2
print(np.var(num_goals_2))