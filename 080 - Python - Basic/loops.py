board_games = ["Settlers of Catan", "Carcassone", "Power Grid", "Agricola", "Scrabble"]

sport_games = ["football", "hockey", "baseball", "cricket"]

for game in board_games:
  print(game)

for i in sport_games:
  print(i)


promise = "I will finish the python loops module!"
for i in range(5):
  print(promise)


grades = [90, 88, 62, 76, 74, 89, 48, 57]

scaled_grades = [num + 10 for num in grades]
print(scaled_grades)
