# Add your code here
medical_costs = {}

medical_costs['Marina'] = 6607.0
medical_costs['Vinay'] = 3225.0

medical_costs.update({'Connie': 8886.0, 'Isaac': 16444.0, 'Valentina': 6420.0})

print(medical_costs)

medical_costs['Vinay'] = 3325.0

print(medical_costs)

total_cost = sum(medical_costs.values())

average_cost = total_cost / len(medical_costs)

print(f'Average Insurance Cost: {average_cost}')

names = list(medical_costs.keys())
ages = [27, 24, 43, 35, 52]

zipped_ages = list(zip(names, ages))

names_to_ages = {key: value for key, value in zipped_ages}
print(names_to_ages)

marina_age = names_to_ages.get('Marina', None)
print(marina_age)

medical_records = {}

medical_records['Marina'] = {"Age": 27, "Sex": "Female", "BMI": 31.1, "Children": 2, "Smoker": "Non-smoker", "Insurance_cost": 6607.0}

class medical_data:
  def __init__(self, age, sex, bmi, children, smoker, insurance_cost):
    self.age = age
    self.sex = sex
    self.bmi = bmi
    self.children = children
    self.smoker = smoker
    self.insurance_cost = insurance_cost
  def getObj(self):
    return {
      'Age': self.age,
      'Sex': self.sex,
      'BMI': self.bmi,
      'Children': self.children,
      'Smoker': self.smoker,
      'Insurance_cost': self.insurance_cost
    }
medical_records['Vinay'] = medical_data(24, 'Male', 26.9, 8, 'Non-smoker', 3225.0).getObj()
medical_records['Connie'] = medical_data(43, 'Female', 25.3, 3, 'Non-smoker', 8886.0).getObj()
medical_records['Isaac'] = medical_data(35, 'Male', 28.6, 4, 'Smoker', 16444.0).getObj()
medical_records['Valentina'] = medical_data(52, 'Female', 18.7, 1, 'Non-smoker', 6420.0).getObj()

print(medical_records)

print(f"Connie's insurance cost is {medical_records['Connie']['Insurance_cost']}")

medical_records.pop('Vinay')

for name in medical_records:
  print(f"{name} is a {medical_records[name]['Age']} year old {medical_records[name]['Sex']} {medical_records[name]['Smoker']} with a BMI of {medical_records[name]['BMI']} and insurance cost of {medical_records[name]['Insurance_cost']}")


def update_medical_record(name, medical_data_updated, medical_data):
  medical_data[name] = medical_data_updated
update_medical_record('Valentina', medical_data(50, 'Female', 18, 2, 'Smoker', 6800.0).getObj(), medical_records)


