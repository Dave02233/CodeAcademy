import pandas as pd

# 1. Creiamo un dataset fittizio
data = {
    'ID_Ordine': [101, 102, 103, 104, 105],
    
    # VARIABILE NOMINALE: Descrive qualcosa (non c'è ordine intrinseco)
    # Non puoi dire che "PayPal" è maggiore di "Carta di Credito"
    'Metodo_Pagamento': ['Carta di Credito', 'PayPal', 'Bonifico', 'PayPal', 'Carta di Credito'],
    
    # VARIABILE ORDINALE: Ha una classifica intrinseca
    # Qui c'è un ordine logico: Basso < Medio < Alto
    'Soddisfazione_Cliente': ['Basso', 'Alto', 'Medio', 'Alto', 'Basso'],
    
    # VARIABILE BINARIA: Solo due opzioni possibili
    # Sì/No, Vero/Falso, 1/0
    'Reso_Effettuato': ['No', 'No', 'Si', 'No', 'Si']
}

df = pd.DataFrame(data)

print("--- DATASET ORIGINALE ---")
print(df)
print("\n" + "="*40 + "\n")

# ---------------------------------------------------------
# ANALISI 1: Variabile Nominale (Metodo_Pagamento)
# ---------------------------------------------------------
# L'unica operazione sensata qui è contare le frequenze o raggruppare.
# Non ha senso ordinare alfabeticamente per "valore".
print("1. VARIABILE NOMINALE (Metodo_Pagamento)")
print(df['Metodo_Pagamento'].value_counts())
print("\n" + "-"*40 + "\n")

# ---------------------------------------------------------
# ANALISI 2: Variabile Binaria (Reso_Effettuato)
# ---------------------------------------------------------
# Spesso nei modelli ML convertiamo le binarie in 0 e 1.
# Questo le rende immediatamente utilizzabili per calcoli matematici.
print("2. VARIABILE BINARIA (Reso_Effettuato)")
print("Convertiamo 'Si' in 1 e 'No' in 0...")

df['Reso_Binario'] = df['Reso_Effettuato'].map({'Si': 1, 'No': 0})
print(df[['Reso_Effettuato', 'Reso_Binario']])
print("\n" + "-"*40 + "\n")

# ---------------------------------------------------------
# ANALISI 3: Variabile Ordinale (Soddisfazione_Cliente)
# ---------------------------------------------------------
# Qui sta il trucco! Python inizialmente le vede come stringhe.
# Se le ordiniamo ora, userebbe l'ordine alfabetico (Alto viene prima di Basso), che è SBAGLIATO.

print("3. VARIABILE ORDINALE (Soddisfazione_Cliente)")

# Definiamo l'ordine logico
ordine_soddisfazione = ['Basso', 'Medio', 'Alto']

# Convertiamo la colonna in un tipo speciale "Category" con ordine
df['Soddisfazione_Cliente'] = pd.Categorical(
    df['Soddisfazione_Cliente'], 
    categories=ordine_soddisfazione, 
    ordered=True
)

print("Ora ordiniamo il dataset per soddisfazione (dal peggiore al migliore):")
# Ora Python sa che Basso < Medio < Alto
df_sorted = df.sort_values('Soddisfazione_Cliente')
print(df_sorted[['ID_Ordine', 'Soddisfazione_Cliente']])

print("\nVerifica logica: 'Medio' è maggiore di 'Basso'?")
print(df['Soddisfazione_Cliente'].iloc[2] > df['Soddisfazione_Cliente'].iloc[0]) 
# Restituisce True perché 'Medio' (index 2) > 'Basso' (index 0)

