"""
ESERCIZIO GUIDATO: TEOREMA DI BAYES
====================================

Scenario: Test diagnostico per una malattia rara
------------------------------------------------
Immagina di avere un test per una malattia che colpisce l'1% della popolazione.
Il test ha:
- Sensibilità (True Positive Rate): 95% - rileva correttamente il 95% dei malati
- Specificità: 90% - è negativo nel 90% dei sani (False Positive Rate: 10%)

DOMANDA: Se il tuo test è POSITIVO, qual è la probabilità che tu sia realmente malato?

Il Teorema di Bayes ci dice:
P(Malato|Test+) = [P(Test+|Malato) × P(Malato)] / P(Test+)

dove P(Test+) = P(Test+|Malato) × P(Malato) + P(Test+|Sano) × P(Sano)
"""

# ============================================================================
# STEP 1: DEFINISCI LE PROBABILITÀ INIZIALI (PRIOR)
# ============================================================================
# TODO: Completa i valori mancanti

# Probabilità a priori di essere malato (prevalenza nella popolazione)
P_malato = 0.01  # 1% della popolazione

# Probabilità a priori di essere sano
P_sano = 1.0 -  P_malato # TODO: Calcola questo valore (usa P_malato)

print("=" * 70)
print("STEP 1: Probabilità a priori")
print("=" * 70)
print(f"P(Malato) = {P_malato}")
print(f"P(Sano) = {P_sano}")
print()


# ============================================================================
# STEP 2: DEFINISCI LE VEROSIMIGLIANZE (LIKELIHOOD)
# ============================================================================
# TODO: Completa i valori

# Probabilità di test positivo SE sei malato (sensibilità)
P_test_pos_dato_malato = 0.95  # 95%

# Probabilità di test positivo SE sei sano (false positive)
P_test_pos_dato_sano = 0.1  # TODO: Calcola questo (specificità = 90%)

print("=" * 70)
print("STEP 2: Verosimiglianze (Likelihood)")
print("=" * 70)
print(f"P(Test+|Malato) = {P_test_pos_dato_malato}")
print(f"P(Test+|Sano) = {P_test_pos_dato_sano}")
print()


# ============================================================================
# STEP 3: CALCOLA LA PROBABILITÀ TOTALE DI TEST POSITIVO
# ============================================================================
# TODO: Implementa la formula

# P(Test+) = P(Test+|Malato) × P(Malato) + P(Test+|Sano) × P(Sano)
P_test_pos = P_test_pos_dato_malato * P_malato + P_test_pos_dato_sano * P_sano  # TODO: Calcola usando le variabili degli step precedenti

print("=" * 70)
print("STEP 3: Probabilità totale di test positivo")
print("=" * 70)
print(f"P(Test+) = {P_test_pos}")
print()


# ============================================================================
# STEP 4: APPLICA IL TEOREMA DI BAYES
# ============================================================================
# TODO: Calcola la probabilità finale

# P(Malato|Test+) = [P(Test+|Malato) × P(Malato)] / P(Test+)
P_malato_dato_test_pos = P_test_pos_dato_malato * P_malato / P_test_pos  # TODO: Applica la formula di Bayes

print("=" * 70)
print("STEP 4: Teorema di Bayes - Probabilità a posteriori")
print("=" * 70)
print(f"P(Malato|Test+) = {P_malato_dato_test_pos}")
if P_malato_dato_test_pos:
    print(f"In percentuale: {P_malato_dato_test_pos * 100:.2f}%")
print()


# ============================================================================
# STEP 5: VISUALIZZAZIONE CON SIMULAZIONE
# ============================================================================
# TODO: Completa la simulazione

print("=" * 70)
print("STEP 5: Verifica con simulazione su 10,000 persone")
print("=" * 70)

popolazione_totale = 10000

# Calcola quante persone sono malate e quante sane
n_malati = P_malato *  popolazione_totale # TODO: Calcola (usa P_malato e popolazione_totale)
n_sani = P_sano * popolazione_totale    # TODO: Calcola

print(f"Popolazione totale: {popolazione_totale}")
print(f"Malati: {n_malati}")
print(f"Sani: {n_sani}")
print()

# Tra i malati, quanti hanno test positivo?
malati_test_pos = n_malati * P_test_pos_dato_malato  # TODO: Calcola (usa n_malati e sensibilità)

# Tra i sani, quanti hanno test positivo (falsi positivi)?
sani_test_pos = n_sani * P_test_pos_dato_sano  # TODO: Calcola (usa n_sani e false positive rate)

print(f"Malati con test positivo: {malati_test_pos}")
print(f"Sani con test positivo (falsi positivi): {sani_test_pos}")
print()

# Totale persone con test positivo
totale_test_pos = malati_test_pos + sani_test_pos  # TODO: Somma i due valori sopra

# Di tutte le persone con test positivo, quante sono realmente malate?
prob_malato_se_test_pos_simulazione = malati_test_pos / totale_test_pos # TODO: Calcola la percentuale

print(f"Totale test positivi: {totale_test_pos}")
print(f"Probabilità di essere malato con test positivo: {prob_malato_se_test_pos_simulazione}")
print()


# ============================================================================
# STEP 6: CONFRONTO E CONCLUSIONI
# ============================================================================
print("=" * 70)
print("STEP 6: Confronto risultati")
print("=" * 70)
print("Risultato del Teorema di Bayes vs Simulazione:")
print(f"Bayes: {P_malato_dato_test_pos}")
print(f"Simulazione: {prob_malato_se_test_pos_simulazione}")
print()
print("CONCLUSIONE:")
print("Anche con un test accurato (95% sensibilità, 90% specificità),")
print("se la malattia è rara, un test positivo NON significa che sei")
print("probabilmente malato! Questo è il paradosso del test raro.")
print("=" * 70)


# ============================================================================
# ESERCIZIO BONUS: Modifica i parametri
# ============================================================================
print("\n" + "=" * 70)
print("ESERCIZIO BONUS")
print("=" * 70)
print("Prova a modificare questi parametri e osserva come cambiano i risultati:")
print("1. Aumenta P_malato a 0.10 (malattia più comune)")
print("2. Aumenta la specificità a 99% (P_test_pos_dato_sano = 0.01)")
print("3. Che succede se P_malato = 0.50?")
print("=" * 70)