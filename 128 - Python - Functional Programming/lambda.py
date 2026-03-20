""" 
def squared(x):
  return x * x

def cubed(x):
  return x*x*x
"""
def odd_or_even(n, even_function, odd_function):
  if n % 2 == 0:
    return even_function(n)
  else: 
    return odd_function(n) 

square = lambda x: x**2
cube = lambda x: x**3

test  = odd_or_even(5, cube, square)

print(test) # Uncomment the print function to see the results of Checkpoint 3.