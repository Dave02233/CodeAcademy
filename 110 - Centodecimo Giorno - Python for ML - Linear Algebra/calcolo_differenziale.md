# Appunti Completi - Calcolo Differenziale (Espansi per ML)

## Introduzione
Il **calcolo differenziale** studia i **tassi di variazione** delle funzioni. Misura pendenza istantanea: quanto y cambia per piccolo dx. Fondamentale per:
- Relazioni variabili (es. prezzo vs tempo).
- Analisi cambiamenti (cresce/decresce).
- **ML/Data Science**: Gradient descent, backprop, ottimizzazione predittiva [web:1].

## 1. Limiti
Descrivono \( f(x) \) vicino a \( a \), non esattamente a \( a \).

### Definizione Semplice
\( \lim_{x \to a} f(x) = L \): "Avvicinandosi a \( a \), \( f(x) \approx L \)".

### Esempio
\( \lim_{x \to 2} \frac{x^2 - 4}{x - 2} = \lim_{x \to 2} (x + 2) = 4 \).  
Uso: Asintoti, discontinuità in dati sensori IoT [web:1].

## 2. Derivate
**Derivata** \( f'(x) \): pendenza tangente.

### Definizione
\( f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} \). Tasso medio → istantaneo.

### Regole
| Funzione | Derivata |
|----------|----------|
| \( c \) | 0 |
| \( x^n \) | \( n x^{n-1} \) |
| \( e^x \) | \( e^x \) |
| \( \ln(x) \) | \( 1/x \) |
| \( \sin(x) \) | \( \cos(x) \) |
| \( \cos(x) \) | \( -\sin(x) \) |

**Prodotto**: \( (uv)' = u'v + uv' \).  
**Catena**: \( (f(g(x)))' = f'(g(x)) \cdot g'(x) \).  
**Seconda**: \( f''(x) \): concavità (accelerazione) [web:2].

### Analisi
- \( f'(x) > 0 \): crescente.
- \( f'(x) < 0 \): decrescente.
- \( f'(x) = 0 \): critici (max/min).

## 3. Machine Learning
Derivate = "direzione ripida" per ottimizzare.

### Gradient Descent
Formula: \( \theta := \theta - \alpha \nabla E \) (\( \nabla E \): derivate errore).  
Scende "collina" errore come palla rotola valle.  
Es. Addestra modello predittivo motori: minimizza differenza previsioni vs dati reali PLC [web:1].

### Backpropagation
Catena derivate in neuroni: aggiorna pesi rete.  
Es. Nel tuo progetto ML: \( \frac{\partial L}{\partial w} \) per parametri regressione usura.

### Altre
- Ottimizzazione: massimizza accuracy.
- Predittiva: derivate feature (vibrazioni → guasto) [web:2].

## 4. Riassunto Formule
- Limite: \( \lim_{x \to a} f(x) = L \).
- Derivata: \( f'(x) = \lim_{h \to 0} \frac{f(x+h)-f(x)}{h} \).
- Prodotto: \( (uv)' = u'v + uv' \).
- Catena: \( (f(g(x)))' = f'(g(x)) \cdot g'(x) \).

**Esercizio ML**: Deriva \( E(w) = (y - w x)^2 \): \( E'(w) = -2x(y - w x) \). Zero dà \( w = y/x \) (lineare perf.).
