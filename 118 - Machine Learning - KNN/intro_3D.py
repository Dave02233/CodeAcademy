star_wars = [125, 1977]
raiders = [115, 1981]
mean_girls = [97, 2004]

def distance (movie1, movie2):
  distance_squared = 0
  for i in range(len(movie1)):
    distance_squared += (movie1[i] - movie2[i]) ** 2
  return distance_squared ** 0.5

print(distance(star_wars, raiders))
print(distance(star_wars, mean_girls))