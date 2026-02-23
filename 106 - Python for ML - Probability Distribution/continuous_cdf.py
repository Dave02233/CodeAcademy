import scipy.stats as stats

prob = stats.norm.cdf(175, 167.64, 8)
print(prob)


import scipy.stats as stats

## Checkpoint 1
temp_prob_1 = stats.norm.cdf(25, 20, 3) - stats.norm.cdf(18, 20, 3)
print(temp_prob_1)

## Checkpoint 2
temp_prob_2 = 1 - stats.norm.cdf(24, 20, 3)
print(temp_prob_2)
print("=" * 10)
