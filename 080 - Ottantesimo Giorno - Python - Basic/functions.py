# Your code below:

# Checkpoints 1, 2, & 3
def generate_trip_instructions(location):
  print("Looks like you are planning a trip to visit " + location)
  print("You can use the public subway system to get to " + location)

# Checkpoints 4 & 5
#generate_trip_instructions("Central Park")
generate_trip_instructions("Grand Central Station")


current_budget = 3500.75

def print_remaining_budget(budget):
  print("Your remaining budget is: $" + str(budget))

print_remaining_budget(current_budget)

# Write your code below: 
def deduct_expense(budget, expense):
  return budget - expense

shirt_expense = 9

new_budget_after_shirt = deduct_expense( current_budget, shirt_expense )

print_remaining_budget(new_budget_after_shirt)
