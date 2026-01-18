names = ["Mohamed", "Sara", "Xia", "Paul", "Valentina", "Jide", "Aaron", "Emily", "Nikita", "Paul"]
insurance_costs = [13262.0, 4816.0, 6839.0, 5054.0, 14724.0, 5360.0, 7640.0, 6072.0, 2750.0, 12064.0]

# Add your code here
names.append("Priscilla")
insurance_costs.append(8320.0)

medical_records = list(zip(names, insurance_costs))

print(medical_records)

num_medical_records = len(medical_records)

print(f"There are {num_medical_records} medical records.")

first_medical_record = medical_records[0]

print(f"Here is the first medical record: {first_medical_record}")

sorted_medical_record = sorted(medical_records, key=lambda x:x[1])
print(f"Here are the medical records sorted by insurance cost:\n{sorted_medical_record}")

cheapest_three = sorted_medical_record[:3]

print(f"Here are the three cheapest insurance cost in our medical records:\n{cheapest_three}")

priciest_three = sorted_medical_record[-3:]
print(f"Here are the three most expensive insurance costs in our medical records:\n{priciest_three}")

paul_count = names.count("Paul")
print(f"There are {paul_count} individuals with the name Paul in our medical records.")













