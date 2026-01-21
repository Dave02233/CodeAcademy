# names of hurricanes
names = ['Cuba I', 'San Felipe II Okeechobee', 'Bahamas', 'Cuba II', 'CubaBrownsville', 'Tampico', 'Labor Day', 'New England', 'Carol', 'Janet', 'Carla', 'Hattie', 'Beulah', 'Camille', 'Edith', 'Anita', 'David', 'Allen', 'Gilbert', 'Hugo', 'Andrew', 'Mitch', 'Isabel', 'Ivan', 'Emily', 'Katrina', 'Rita', 'Wilma', 'Dean', 'Felix', 'Matthew', 'Irma', 'Maria', 'Michael']

# months of hurricanes
months = ['October', 'September', 'September', 'November', 'August', 'September', 'September', 'September', 'September', 'September', 'September', 'October', 'September', 'August', 'September', 'September', 'August', 'August', 'September', 'September', 'August', 'October', 'September', 'September', 'July', 'August', 'September', 'October', 'August', 'September', 'October', 'September', 'September', 'October']

# years of hurricanes
years = [1924, 1928, 1932, 1932, 1933, 1933, 1935, 1938, 1953, 1955, 1961, 1961, 1967, 1969, 1971, 1977, 1979, 1980, 1988, 1989, 1992, 1998, 2003, 2004, 2005, 2005, 2005, 2005, 2007, 2007, 2016, 2017, 2017, 2018]

# maximum sustained winds (mph) of hurricanes
max_sustained_winds = [165, 160, 160, 175, 160, 160, 185, 160, 160, 175, 175, 160, 160, 175, 160, 175, 175, 190, 185, 160, 175, 180, 165, 165, 160, 175, 180, 185, 175, 175, 165, 180, 175, 160]

# areas affected by each hurricane
areas_affected = [['Central America', 'Mexico', 'Cuba', 'Florida', 'The Bahamas'], ['Lesser Antilles', 'The Bahamas', 'United States East Coast', 'Atlantic Canada'], ['The Bahamas', 'Northeastern United States'], ['Lesser Antilles', 'Jamaica', 'Cayman Islands', 'Cuba', 'The Bahamas', 'Bermuda'], ['The Bahamas', 'Cuba', 'Florida', 'Texas', 'Tamaulipas'], ['Jamaica', 'Yucatn Peninsula'], ['The Bahamas', 'Florida', 'Georgia', 'The Carolinas', 'Virginia'], ['Southeastern United States', 'Northeastern United States', 'Southwestern Quebec'], ['Bermuda', 'New England', 'Atlantic Canada'], ['Lesser Antilles', 'Central America'], ['Texas', 'Louisiana', 'Midwestern United States'], ['Central America'], ['The Caribbean', 'Mexico', 'Texas'], ['Cuba', 'United States Gulf Coast'], ['The Caribbean', 'Central America', 'Mexico', 'United States Gulf Coast'], ['Mexico'], ['The Caribbean', 'United States East coast'], ['The Caribbean', 'Yucatn Peninsula', 'Mexico', 'South Texas'], ['Jamaica', 'Venezuela', 'Central America', 'Hispaniola', 'Mexico'], ['The Caribbean', 'United States East Coast'], ['The Bahamas', 'Florida', 'United States Gulf Coast'], ['Central America', 'Yucatn Peninsula', 'South Florida'], ['Greater Antilles', 'Bahamas', 'Eastern United States', 'Ontario'], ['The Caribbean', 'Venezuela', 'United States Gulf Coast'], ['Windward Islands', 'Jamaica', 'Mexico', 'Texas'], ['Bahamas', 'United States Gulf Coast'], ['Cuba', 'United States Gulf Coast'], ['Greater Antilles', 'Central America', 'Florida'], ['The Caribbean', 'Central America'], ['Nicaragua', 'Honduras'], ['Antilles', 'Venezuela', 'Colombia', 'United States East Coast', 'Atlantic Canada'], ['Cape Verde', 'The Caribbean', 'British Virgin Islands', 'U.S. Virgin Islands', 'Cuba', 'Florida'], ['Lesser Antilles', 'Virgin Islands', 'Puerto Rico', 'Dominican Republic', 'Turks and Caicos Islands'], ['Central America', 'United States Gulf Coast (especially Florida Panhandle)']]

# damages (USD($)) of hurricanes
damages = ['Damages not recorded', '100M', 'Damages not recorded', '40M', '27.9M', '5M', 'Damages not recorded', '306M', '2M', '65.8M', '326M', '60.3M', '208M', '1.42B', '25.4M', 'Damages not recorded', '1.54B', '1.24B', '7.1B', '10B', '26.5B', '6.2B', '5.37B', '23.3B', '1.01B', '125B', '12B', '29.4B', '1.76B', '720M', '15.1B', '64.8B', '91.6B', '25.1B']

# deaths for each hurricane
deaths = [90,4000,16,3103,179,184,408,682,5,1023,43,319,688,259,37,11,2068,269,318,107,65,19325,51,124,17,1836,125,87,45,133,603,138,3057,74]

# 1
# Update Recorded Damages
conversion = {"M": 1000000,
              "B": 1000000000}

# test function by updating damages
for i in range(len(damages)):
  if not isinstance(damages[i], str):
    continue
  if 'Damages not recorded' in damages[i]:
    continue
  if 'M' in damages[i]:
    damages[i] = round(float(damages[i].replace('M', '')) * (10**6))
  elif 'B' in damages[i]:
    damages[i] = round(float(damages[i].replace('B', '')) * (10**9))
# 2 
# Create a Table
hurricanes_dict = {}

for d in range(len(names)):
  hurricanes_dict[names[d]] = {
    'Name': names[d],
    'Month': months[d],
    'Year': years[d],
    'Max Sustained Wind': max_sustained_winds[d],
    'Areas Affected': areas_affected[d],
    'Damage': damages[d],
    'Deaths': deaths[d]
  } 
# Create and view the hurricanes dictionary
print(hurricanes_dict)
# 3
# Organizing by Year

def organize_by_year(hurricanes_dict):
  new_dict = {}
  for i in hurricanes_dict:
    if hurricanes_dict[i]['Year'] not in new_dict:
      new_dict[hurricanes_dict[i]['Year']] = []
    new_obj = {
      'Name': hurricanes_dict[i]['Name'],
      'Month': hurricanes_dict[i]['Month'],
      'Year': hurricanes_dict[i]['Year'],
      'Max Sustained Wind': hurricanes_dict[i]['Max Sustained Wind'],
      'Areas Affected': hurricanes_dict[i]['Areas Affected'],
      'Damage': hurricanes_dict[i]['Damage']
    }
    new_dict[hurricanes_dict[i]['Year']].append(new_obj)
  return new_dict
print(organize_by_year(hurricanes_dict))

# 4
# Counting Damaged Areas
def count_areas(hurricanes_dict):
  new_dict = {}

  for i in hurricanes_dict:
    for d in hurricanes_dict[i]['Areas Affected']:
      if d not in new_dict:
        new_dict[d] = 1
      else:
        new_dict[d] += 1

  return new_dict
print(count_areas(hurricanes_dict))

# 5 
# Calculating Maximum Hurricane Count
area_counts = count_areas(hurricanes_dict)
sorted_areas = sorted(area_counts, key=lambda x: area_counts[x], reverse=True)
max_hurricane_count = sorted_areas[0]
# find most frequently affected area and the number of hurricanes involved in
print(max_hurricane_count)

# 6
# Calculating the Deadliest Hurricane
sorted_deaths = sorted(hurricanes_dict, key=lambda x:hurricanes_dict[x]['Deaths'], reverse=True)
# find highest mortality hurricane and the number of deaths
deadliest = sorted_deaths[0]
print(deadliest, hurricanes_dict[deadliest]['Deaths'])

# 7
# Rating Hurricanes by Mortality
mortality_scale = {0: 0,
                   1: 100,
                   2: 500,
                   3: 1000,
                   4: 10000}

keys_reversed = [i for i in mortality_scale.keys()]
keys_reversed.sort(reverse=True)
print('\n ---------------------')
sorted_mortality = {}
for i in sorted_deaths:
  for d in keys_reversed:
    if hurricanes_dict[i]['Deaths'] >= mortality_scale[d]:
      if d not in sorted_mortality:
        sorted_mortality[d] = []
      sorted_mortality[d].append(hurricanes_dict[i])
      break
print(sorted_mortality)

# 8 Calculating Hurricane Maximum Damage
damage_sort = sorted(hurricanes_dict, key=lambda x:hurricanes_dict[x]['Damage'] if isinstance(hurricanes_dict[x]['Damage'], (int, float)) else 0, reverse=True)
# find highest damage inducing hurricane and its total cost
print(hurricanes_dict[damage_sort[0]]['Damage'])

# 9
# Rating Hurricanes by Damage
damage_scale = {0: 0,
                1: 100000000,
                2: 1000000000,
                3: 10000000000,
                4: 50000000000}

keys_reversed = [i for i in damage_scale.keys()]
keys_reversed.sort(reverse=True)
print('\n ---------------------')
sorted_damage = {k: [] for k in damage_scale.keys()}
for i in damage_sort:
    damage = hurricanes_dict[i]['Damage']
    if not isinstance(damage, (int, float)):
        continue
    for d in keys_reversed:
        if damage > damage_scale[d]:
            continue
        sorted_damage[d].append(hurricanes_dict[i])
        break

print(sorted_damage)
# categorize hurricanes in new dictionary with damage severity as key

