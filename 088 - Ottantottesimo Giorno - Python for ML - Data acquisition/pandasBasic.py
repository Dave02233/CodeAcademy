import pandas

#Crea un DataFrame pandas
commute_df = pandas.read_csv('commute_data.csv')

print(commute_df.head())

#Cambia i nomi delle colonne
commute_df.columns = ['name', 'header_1', 'header_2', 'header_3', 'header_4']

print(commute_df.head())
