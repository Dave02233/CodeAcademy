from collections import namedtuple

# Checkpoint 1 code goes here.
country = namedtuple('country', ['name', 'capital', 'continent'])
# Checkpoint 2 code goes here.
france = country('France', 'Paris', 'Europe')
japan = country('Japan', 'Tokyo', 'Asia')
senegal = country('Senegal', 'Dakar', 'Africa')
# Checkpoint 3 code goes here.
countries = (france, japan, senegal)