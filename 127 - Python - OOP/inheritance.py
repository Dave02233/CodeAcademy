class Employee():
  new_id = 1
  def __init__(self):
    self.id = Employee.new_id
    Employee.new_id += 1

  def say_id(self):
    print("My id is {}.".format(self.id))

# Write your code below


e1 = Employee()
e2 = Employee()

class Admin(Employee):
  pass

e3 = Admin()
e3.say_id()