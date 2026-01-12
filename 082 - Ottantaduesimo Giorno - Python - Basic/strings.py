first_name = "Rodrigo"
last_name = "Villanueva"

new_account = last_name[:5]
temp_password = last_name[2:6]


first_name = "Julie"
last_name = "Blevins"

def account_generator (first_name, last_name):
  return first_name[:3] + last_name[:3]

new_account = account_generator(first_name, last_name)


first_name = "Reiko"
last_name = "Matsuki"

password_generator = lambda x, y: x[-3:] + y[-3:]

temp_password = password_generator(first_name, last_name)
print(temp_password)



company_motto = "Copeland's Corporate Company helps you capably cope with the constant cacophony of daily life"

second_to_last = company_motto[-2]
final_word = company_motto[-4:]


first_name = "Bob"
last_name = "Daily"

first_name[0] = "R"
#ERRORE
fixed_first_name = "R" + first_name[1:]


password = "theycallme\"crazy\"91"