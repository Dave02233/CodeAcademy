medical_data = \
"""Marina Allison   ,27   ,   31.1 , 
#7010.0   ;Markus Valdez   ,   30, 
22.4,   #4050.0 ;Connie Ballard ,43 
,   25.3 , #12060.0 ;Darnell Weber   
,   35   , 20.6   , #7500.0;
Sylvie Charles   ,22, 22.1 
,#3022.0   ;   Vinay Padilla,24,   
26.9 ,#4620.0 ;Meredith Santiago, 51   , 
29.3 ,#16330.0;   Andre Mccarty, 
19,22.7 , #2900.0 ; 
Lorena Hodson ,65, 33.1 , #19370.0; 
Isaac Vu ,34, 24.8,   #7045.0"""

# Add your code here
print(medical_data + '\n')
updated_medical_data = medical_data.replace('#', '$')
print(updated_medical_data)
medical_data_split = updated_medical_data.split(';') 
num_records = len(medical_data_split)
print(f'There are {num_records} medical records in the data.')
print(medical_data_split)
medical_records = [i.split(',') for i in medical_data_split]
print(medical_records)
medical_records_clean = []
for i in range(len(medical_records)):
  for d in range(len(medical_records[i])):
    medical_records[i][d] = medical_records[i][d].strip().upper()
print(medical_records)
for record in medical_records:
  print(record[0])
names = [i[0] for i in medical_records]
ages = [i[1] for i in medical_records]
bmis = [i[2] for i in medical_records]
insurance_costs = [i[3] for i in medical_records]
print(names, ages, bmis, insurance_costs)
total_bmi = sum([float(i) for i in bmis])
average_bmi = total_bmi / len(bmis)
print(f'Average BMI: {round(average_bmi, 1)}')
avg_insurance_costs = sum([float(i.replace('$', '')) for i in insurance_costs]) / len(insurance_costs)
print(f'The average insurance cost is ${avg_insurance_costs}')

