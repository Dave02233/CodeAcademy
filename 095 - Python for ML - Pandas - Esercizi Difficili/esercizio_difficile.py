import pandas as pd
pd.set_option('display.max_colwidth', -1)

df = pd.read_csv('jeopardy.csv')
print(df.head())
print(list(df.columns))

df.columns=[c.strip() for c in df.columns]

# Trovo il numero di ricorrenze di un array di parole in un df
def find_list_words (words, df):
  filtered = df
  for word in words:
    # Per trovare solo parole intere con il contains indichiamo una parola intera con \b \b che sarebbe un regex e mettiamo r all'inizio della stringa
    filtered = filtered[filtered.Question.str.contains(fr'\b{word}\b', case=False, na=False, regex=True)]
  return filtered

print(find_list_words(['King', 'England'], df)['Question'].head())
print(find_list_words(['king'], df)['Question'].head())

#print(df['Value'].head())
df['float_values'] = df['Value'].apply(lambda x: float(x.replace('$', '').replace(',', '').replace('no value', '0')))

# Calcolo media valori per topic
print(find_list_words(['King'], df).float_values.mean())

# Returno una series di ricorrenze delle risposte
def unique_answers (df):
  return df.Answer.value_counts()

print(unique_answers(find_list_words(['King'], df)))


