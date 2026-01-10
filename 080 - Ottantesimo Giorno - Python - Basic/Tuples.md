Le tuple in Python sono strutture dati immutabili che raggruppano elementi ordinati, definite con parentesi tonde. Per Obsidian, usa questo codice Markdown completo racchiuso in un singolo blocco code: copia tutto e incollalo direttamente in una nota nuova.

text
# Le Tuple in Python

Le tuple sono strutture dati immutabili simili alle liste, ma una volta create non possono essere modificate. Servono per raggruppare elementi eterogenei in modo ordinato e sono definite con parentesi tonde o solo virgole.[web:1][web:2]

## Creazione delle Tuple

Le tuple si creano con parentesi tonde e virgole tra gli elementi, anche senza parentesi esplicite.

tupla1 = (2, 4, 9, 15, 23)
tupla2 = 7, 8, 9 # Senza parentesi
tupla_vuota = ()
tupla_singola = (42,) # Nota la virgola per distinguere da un intero

print(type(tupla1)) # <class 'tuple'>
print(tupla1) # (2, 4, 9, 15, 23)

text

Per una tupla singola serve la virgola finale, altrimenti Python interpreta come valore semplice.[web:4]

## Caratteristiche Principali

Le tuple sono immutabili: non supportano append, remove o modifiche agli elementi.

tupla = (1, 2, 3)
tupla = 10 # Errore! TypeError: 'tuple' object does not support item assignment

text

- Indici: Accesso come liste: tupla[0] restituisce 1.[web:1]
- Slicing: tupla[1:3] dà (2, 3).
- Lunghezza: len(tupla) restituisce 3.[web:4]
- Immutabilità: Più veloci e usano meno memoria delle liste.[web:7]

## Operazioni Comuni

| Operazione | Esempio | Risultato |
|------------|---------|-----------|
| Concatenazione | (1,2) + (3,4) | (1, 2, 3, 4) [web:13] |
| Ripetizione | (1,2) * 3 | (1, 2, 1, 2, 1, 2) |
| in | 3 in (1,2,3) | True |
| index() | (1,2,2).index(2) | 1 (prima occorrenza) [web:13] |
| count() | (1,2,2).count(2) | 2 [web:13] |

## Unpacking delle Tuple

Le tuple permettono l'unpacking per assegnare valori a variabili.

persona = ("Mario", "Rossi", 30)
nome, cognome, eta = persona
print(nome) # Mario
print(eta) # 30

text

Utile per scambiare variabili: a, b = b, a.[web:3]

## Differenze con Liste

| Tupla | Lista |
|-------|-------|
| Immutabile | Mutabile |
| () o tuple() | [] o list() |
| Più veloce, meno memoria | Metodi come append() |
| Chiavi dict valide | Non hashable |

Le tuple sono ideali per dati costanti come coordinate o chiavi di dizionario.[web:7][web:9 ]
