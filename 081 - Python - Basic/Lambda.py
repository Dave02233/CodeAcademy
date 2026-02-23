# Lambda function to add two numbers 

add = lambda a, b: a + b 

print(add(3, 5))  # Output: 8 

  

# Lambda function to print a name 

greeting = lambda name: f"Hello, {name}!" 

print(greeting("Alice"))  # Output: Hello, Alice! 


numbers = [1, 2, 3, 4, 5] 

squared = list(map(lambda x: x ** 2, numbers)) 

print(squared)  # Output: [1, 4, 9, 16, 25] 


numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

even_numbers = list(filter(lambda x: x % 2 == 0, numbers)) 

print(even_numbers)  # Output: [2, 4, 6, 8, 10]


students = [('Alice', 'A', 15), ('Bob', 'B', 12), ('Charlie', 'A', 20)] 

sorted_students = sorted(students, key=lambda x: x[2]) 

print(sorted_students) 

# Output: [('Bob', 'B', 12), ('Alice', 'A', 15), ('Charlie', 'A', 20)] 

