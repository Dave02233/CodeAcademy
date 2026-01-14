import json

with open("message.json") as message_json:
  message = json.load(message_json)
  print(message)

# {'text': "Now that's JSON!", 'secret text': "Now that's some _serious_ JSON!"}