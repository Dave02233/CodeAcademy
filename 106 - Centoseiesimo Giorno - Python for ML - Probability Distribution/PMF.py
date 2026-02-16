import scipy.stats as stats

# QUANDO USARE: Quando hai un esperimento con n prove indipendenti,
# ciascuna con probabilità p di successo, e vuoi calcolare la probabilità
# di ottenere ESATTAMENTE x successi

# ESEMPI PRATICI:
# - Lanci di moneta: probabilità di ottenere esattamente 3 teste in 10 lanci
# - Test a crocette: probabilità di indovinare esattamente 7 risposte su 20
# - Controllo qualità: probabilità che esattamente 5 pezzi su 100 siano difettosi

# value of interest (numero di successi che vogliamo ottenere)
# change this
x = 3

# sample size (numero totale di prove/lanci/tentativi)
# change this
n = 10

# calculate probability
# stats.binom.pmf(x, n, p) calcola P(X = x)
# dove: x = successi desiderati
#       n = numero di prove
#       p = probabilità di successo in ogni prova (qui 0.5 = moneta equa)
prob_1 = stats.binom.pmf(x, n, 0.5)
print(prob_1)  # Probabilità di ottenere ESATTAMENTE 3 teste in 10 lanci


## Question 2
# Calcola la probabilità di ottenere ESATTAMENTE 7 successi in 20 prove
# con probabilità 0.5 per ogni prova
# Esempio: lanciare 20 monete e ottenere esattamente 7 teste
prob_2 = stats.binom.pmf(7, 20, 0.5)
print(prob_2)

# PERCHÉ USARE stats.binom.pmf() INVECE DI CALCOLARE A MANO:
# - Calcola automaticamente il coefficiente binomiale C(n,x)
# - Applica la formula: C(n,x) * p^x * (1-p)^(n-x)
# - Evita errori di calcolo con numeri grandi
# - Molto più veloce e leggibile del calcolo manuale

# DIFFERENZA TRA PMF e CDF:
# - pmf(x): probabilità di ottenere ESATTAMENTE x successi
# - cdf(x): probabilità di ottenere AL MASSIMO x successi (somma da 0 a x)
