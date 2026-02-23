/*
If we wanted to extract the residence property as a variable, we could use the following code:

const residence = vampire.residence; 
console.log(residence); // Prints 'Transylvania' 


However, we can also take advantage of a destructuring technique called destructured 
assignment to save ourselves some keystrokes. In destructured assignment we create a variable 
with the name of an object’s key that is wrapped in curly braces { } and assign to it the object. 
Take a look at the example below:
*/

const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  
  const {functionality} = robot;
  
  functionality.beep();