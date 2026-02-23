
# Converting strings to integers 

str_nums = ['1', '2', '3', '4', '5'] 

int_nums = list(map(int, str_nums)) 

print(int_nums)  # Output: [1, 2, 3, 4, 5] 


# Finding the length of strings 

words = ['apple', 'banana', 'cherry'] 

word_lengths = list(map(len, words)) 

print(word_lengths)  # Output: [5, 6, 6]


numbers = [1, 2, 3, 4, 5] 

doubled = list(map(lambda x: x * 2, numbers)) 

print(doubled)  # Output: [2, 4, 6, 8, 10] 

