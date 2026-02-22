import numpy as np
# Represent the following system in NumPy matrix/vector form, then solve for x, y, and z

# Given
'''
4x + z = 2
-y + 2z - 3x = 0
.5y - x - 1.5z = -4
'''

A = np.array([[4, 0, 1], [-3, -1, 2], [-1, .5, -1.5]])
b = np.array([2, 0, -4])

x, y, z = np.linalg.solve(A, b)
print((x,y,z))

# Calcolo rapido della matrice inversa
A_inv = np.linalg.inv(A)
#print(A,'\n', A_inv)

# in Ax=b
x = A_inv @ b
print(x)

# Stesso risultato, utile per calcolare con molte b diverse, in caso contrario meglio usare .solve()