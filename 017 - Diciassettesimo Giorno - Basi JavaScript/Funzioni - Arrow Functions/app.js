/*
ES6 introduced arrow function syntax, a shorter way to write 
Preview: Docs Loading link description
functions
by using the special “fat arrow” () => notation.

Preview: Docs Loading link description
Arrow functions
remove the need to type out the keyword function every time you need to create a function. 
Instead, you first include the parameters inside the ( ) and then add an arrow => that points 
to the function body surrounded in { } like this:
*/

const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };
  
