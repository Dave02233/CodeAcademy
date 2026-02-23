import scipy.stats as stats

## Checkpoint 1
# calculate prob_more_than_20
prob_more_than_20 = 1 - stats.poisson.cdf(20, 15)

# print prob_more_than_20
print(prob_more_than_20)

## Checkpoint 
# calculate prob_17_to_21
prob_17_to_21 = stats.poisson.cdf(21, 15) - stats.poisson.cdf(16, 15)

# print prob_17_to_21
print(prob_17_to_21)