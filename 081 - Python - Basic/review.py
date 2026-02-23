#Write your function here
def reversed_list (lst1, lst2):
  for i in range(len(lst1) - 1):
    if lst1[i] != lst2[len(lst2) - 1 - i]:
      return False
  return True

#Uncomment the lines below when your function is done
print(reversed_list([1, 2, 3], [3, 2, 1]))
print(reversed_list([1, 5, 3], [3, 2, 1]))

# Write your tenth_power function here:
tenth_power = lambda x:x**10
# Uncomment these function calls to test your tenth_power function:
print(tenth_power(1))
# 1 to the 10th power is 1
print(tenth_power(0))
# 0 to the 10th power is 0
print(tenth_power(2))
# 2 to the 10th power is 1024
#
#

import math
# Write your square_root function here:
square_root = lambda num:math.sqrt(num)
# Uncomment these function calls to test your square_root function:
print(square_root(16))
# should print 4
print(square_root(100))
# should print 10
#
#

# Write your first_three_multiples function here
def first_three_multiples (num):
  calc = 0
  for i in range(1, 4):
    calc = num * i
    print(calc)
  return calc

# Uncomment these function calls to test your first_three_multiples function:
first_three_multiples(10)
# should print 10, 20, 30, and return 30
first_three_multiples(0)
# should print 0, 0, 0, and return 0
