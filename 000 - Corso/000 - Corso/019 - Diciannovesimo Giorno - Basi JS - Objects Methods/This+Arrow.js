/*
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet: () => {
    console.log(this.dietType);
  }
};

goat.diet(); // Prints undefined


In the comment, you can see that goat.diet() would log undefined. 
So what happened? Notice that the .diet() method is defined using an arrow function.

Arrow functions inherently bind, or tie, an already defined this value to the function itself 
that is NOT the calling object. In the code snippet above, the value of this is the global object, 
or an object that exists in the global scope, which doesn’t have a dietType property and therefore 
returns undefined.
*/

const robot = {
    energyLevel: 100,
    checkEnergy() {
      console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
  }
  
  robot.checkEnergy();