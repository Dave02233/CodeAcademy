import numpy as np

A = np.array([3, -1, 2])
B = np.array([0, -1, 1])

dot = np.dot(A, B)
prodotto_fra_moduli = np.linalg.norm(A) * np.linalg.norm(B)

cos = dot / prodotto_fra_moduli
ang_rad = np.arccos(cos)
print(np.degrees(ang_rad))
