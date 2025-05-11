/*
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  }
}


Dog is the name of our class. By convention, we capitalize and PascalCase class names.
JavaScript will invoke the constructor() method every time we create a new instance of our Dog class.
This constructor() method accepts one argument, name.
Inside of the constructor() method, we use the 
Preview: Docs Loading link description
this
 keyword. In the context of a class, this refers to an instance of that class. In the Dog class, we use this to set the value of the Dog instance’s name property to the name argument.
Under this.name, we create a property called behavior, which will keep track of the number of times a dog misbehaves. The behavior property is always initialized to zero.
*/

class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}