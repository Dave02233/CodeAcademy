/*
In addition to console, there are other objects built into JavaScript. Down the line, you’ll build your own 
Preview: Docs Loading link description
objects
, but for now these “built-in” objects are full of useful functionality.

For example, if you wanted to perform more complex mathematical operations than arithmetic, JavaScript has the built-in Math object.

The great thing about objects is that they have methods! Let’s call the .random() method from the built-in Math object:

console.log(Math.random()); // Prints a random number between 0 and 1


In the example above, we called the .random() method by appending the object name with the dot operator, the name of the method, and opening and closing parentheses. This method returns a random number between 0 (inclusive) and 1 (exclusive).

To generate a random number between 0 and 50, we could multiply this result by 50, like so:

Math.random() * 50;


The example above will likely evaluate to a decimal. To ensure the answer is a whole number, we can take advantage of another useful Math method called Math.floor().

Math.floor() takes a decimal number, and rounds down to the nearest whole number. You can use Math.floor() to round down a random number like this:

Math.floor(Math.random() * 50);


In this case:

Math.random() generates a random number between 0 and 1.
We then multiply that number by 50, so now we have a number between 0 and 50.
Then, Math.floor() rounds the number down to the nearest whole number.
If you wanted to see the number printed to the terminal, you would still need to use a console.log() statement:

console.log(Math.floor(Math.random() * 50)); // Prints a random whole number between 0 and 50


To see all of the properties and 
Preview: Docs Loading link description
methods
 on the Math object, take a look at the documentation here.
*/
console.log(Math.floor(Math.random() * 100));

console.log(Math.ceil(43.8));

console.log(Number.isInteger(2017));