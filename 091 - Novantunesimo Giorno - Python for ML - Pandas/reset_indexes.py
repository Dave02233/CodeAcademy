import codecademylib3
import pandas as pd

df = pd.DataFrame([
  ['January', 100, 100, 23, 100],
  ['February', 51, 45, 145, 45],
  ['March', 81, 96, 65, 96],
  ['April', 80, 80, 54, 180],
  ['May', 51, 54, 54, 154],
  ['June', 112, 109, 79, 129]],
  columns=['month', 'clinic_east',
           'clinic_north', 'clinic_south',
           'clinic_west']
)

df2 = df.loc[[1, 3, 5]]
# Indici non consecutivi

df3 = df2.reset_index(inplace=True, drop=True) 
print(df2)
# è stata creata una nuova colonna index con i vecchi indici, quindi usiamo drop=True, usiamo inplace=True per modificare df2 e non df3
