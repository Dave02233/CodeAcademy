/*
It may seem like a great idea to always make your 
Preview: Docs Loading link description
variables
 accessible, but having too many global variables can cause problems in a program.

When you declare global variables, they go to the global namespace. The global namespace allows the variables to be accessible from anywhere in the program. These variables remain there until the program finishes which means our global namespace can fill up really quickly.

Scope pollution is when we have too many global variables that exist in the global namespace, or when we reuse variables across different scopes. Scope pollution makes it difficult to keep track of our different variables and 
Preview: Docs A Set is a special object that stores unique values without a key.
sets
 us up for potential accidents. For example, globally scoped variables can collide with other variables that are more locally scoped, causing unexpected behavior in our code.

Let’s look at an example of scope pollution in practice so we know how to avoid it:

let num = 50;

const logNum = () => {
  num = 100; // Take note of this line of code
  console.log(num);
};

logNum(); // Prints 100
console.log(num); // Prints 100


You’ll notice:

We have a variable num.
Inside the function body of logNum(), we want to declare a new variable but forgot to use the let keyword.
When we call logNum(), num gets reassigned to 100.
The reassignment inside logNum() affects the global variable num.
Even though the reassignment is allowed and we won’t get an error, if we decided to use num later, we’ll unknowingly use the new value of num.
*/

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);
