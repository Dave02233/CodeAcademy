import time
import multiprocessing

def greeting_with_sleep(string):
  print(string)
  time.sleep(2)
  print(string + " says hello!")


def main_multiprocessing():
  s = time.perf_counter()
  processes = []
  greetings = ['Codecademy', 'Chelsea', 'Hisham', 'Ashley']
  # add your code here
  for greet in greetings:
    p = multiprocessing.Process(target=greeting_with_sleep, args=(greet,))
    processes.append(p)
  
  for p in processes:
    p.start()
  
  for p in processes:
    p.join()

  elapsed = time.perf_counter() - s
  print("Multiprocessing Elapsed Time: " + str(elapsed) + " seconds")

main_multiprocessing()
