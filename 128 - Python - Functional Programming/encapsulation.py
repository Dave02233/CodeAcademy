class Employee():
    def __init__(self):
        self.id = None
        # Write your code below
        self._id = 123 #Private
        self.__id = 124 #Nascosto a dir e Protected

e = Employee()
print(dir(e))