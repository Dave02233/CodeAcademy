import json

with open('file.txt', "r") as file_object:
  content = [line for line in file_object.readlines()]
  content_to_json = {}
  for i in range(len(content)):
    content_to_json[i] = content[i] 
  print(content_to_json)

with open('file.txt', "w") as fileToWrite:
  json.dump([content_to_json], fileToWrite)

with open('file.txt', "r") as fileToRead:
  print(json.load(fileToRead))

