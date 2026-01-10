suitcase = ["shirt", "shirt", "pants", "pants", "pajamas", "books"]

beginning = suitcase[0:2]
middle = suitcase[2:4]
# Come nel range l'ultimo elemento non è incluso
# Your code below: 
print(beginning)

suitcase = ["shirt", "shirt", "pants", "pants", "pajamas", "books"]

# Your code below: 
last_two_elements = suitcase[-2:]
print(last_two_elements)
#['pajamas', 'books']

slice_off_last_three = suitcase[:-3]
print(slice_off_last_three)
#['shirt', 'shirt', 'pants']

print(suitcase[4:])
#['pajamas', 'books']
print(suitcase[:2])
#['shirt', 'shirt']

votes = ["Jake", "Jake", "Laurie", "Laurie", "Laurie", "Jake", "Jake", "Jake", "Laurie", "Cassie", "Cassie", "Jake", "Jake", "Cassie", "Laurie", "Cassie", "Jake", "Jake", "Cassie", "Laurie"]

# Your code below: 
jake_votes = votes.count("Jake")
print(jake_votes)
