import numpy as np

A = np.array([-2, -3, 0, 5, 1])

calc = 0
for i in range(A.size):
    calc += A[i] ** 2

calc *= 0.5

print(calc)

