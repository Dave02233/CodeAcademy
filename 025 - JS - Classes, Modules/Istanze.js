/*
Below our Dog class, we use the new keyword to create an instance of our Dog class. Let’s consider the line of code step-by-step.

We create a new variable named halley that will store an instance of our Dog class.
We use the new keyword to generate a new instance of the Dog class. The new keyword calls the constructor(), runs the code inside of it, and then returns the new instance.
We pass the 'Halley' string to the Dog constructor, which 
Preview: Docs Loading link description
sets
 the name property to 'Halley'.
Finally, we log the value saved to the name key in our halley object, which logs 'Halley' to the console.
*/
class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');