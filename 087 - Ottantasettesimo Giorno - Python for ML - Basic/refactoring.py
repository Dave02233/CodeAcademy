# Create calculate_insurance_cost() function below:
class person:
  def __init__(self, name, age, sex, bmi, num_of_children, smoker):
    self.name = name
    self.age = age
    self.sex = sex
    self.bmi = bmi
    self.num_of_children = num_of_children
    self.smoker = smoker
  def __repr__(self):
    return f"The estimated insurance cost for {self.name} is {250*self.age - 128*self.sex + 370*self.bmi + 425*self.num_of_children + 24000*self.smoker - 12500} dollars"
  def calculate_insurance_cost(self):
    return 250*self.age - 128*self.sex + 370*self.bmi + 425*self.num_of_children + 24000*self.smoker - 12500

Maria = person("Maria", 28, 0, 26.2, 3, 0)
print(Maria)

Omar = person("Omar", 35, 1, 22.2, 0, 1)
print(Omar)
