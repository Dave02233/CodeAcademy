/*
class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}

The extends keyword makes the methods of the animal class available inside the cat class.
The constructor, called when you create a new Cat object, accepts two arguments, name and usesLitter.
The super keyword calls the constructor of the parent class. In this case, super(name) passes the name argument of the Cat class to the constructor of the Animal class. When the Animal constructor runs, it 
Preview: Docs Loading link description
sets
 this._name = name; for new Cat instances.
_usesLitter is a new property that is unique to the Cat class, so we set it in the Cat constructor.

Notice, we call super on the first line of our constructor(), then set the usesLitter property on the second line. In a constructor(), you must always call the super method before you can use the 
Preview: Docs It is often used within an object method, but what it refers to will vary depending on the execution context.
this
 keyword — if you do not, JavaScript will throw a reference error. To avoid reference 
Preview: Docs Loading link description
errors
, it is best practice to call super on the first line of subclass 

*/

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);