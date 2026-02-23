/*
To declare a function expression:

Declare a variable to make the variable’s name be the name, or identifier, of your function. 
Since the release of ES6, it is common practice to use const as the keyword to declare the variable.

Assign as that variable’s value an anonymous function created by using the function keyword 
followed by a set of parentheses with possible parameters. 
Then a set of curly braces that contain the function body.

To invoke a function expression, write the name of the variable in which the function is stored 
followed by parentheses enclosing any arguments being passed into the function.
*/

const plantNeedsWater = function(day) {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(plantNeedsWater('Tuesday'));