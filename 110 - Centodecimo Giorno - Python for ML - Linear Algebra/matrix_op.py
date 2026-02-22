import numpy as np

# Given
# 2 x 3 matrix
A = np.array([[2,3,-4], [-2, 1, -3]])
# 2 x 3 matrix
B = np.array([[1,-1,4], [3,-3,3]])
# 3 x 2 matrix
C = np.array([[1, 2], [3, 4], [5, 6]])

# Calculate D = 4A - 2B
D = 4 * A - 2 * B
print(f'D =\n {D}')
# Calculate E = AC
 
E = A @ C
print(f'E =\n {E}')

# Calculate F = CA
F = C @ A
print(f'F =\n {F}')


import numpy as np

# Given
A = np.array([[1,-1,1], [0,1,0], [-1,2,1]])
B = np.array([[0.5,1.5,-0.5], [0,1,0], [0.5,-0.5,0.5]])

AB = A @ B
print(AB)

BA = B @ A
print(BA)

# Transpose, inverte righe e colonne
print(A.T)
print(B.T)