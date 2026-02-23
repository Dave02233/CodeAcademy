/*In some cases, you want a piece of code to run at least once and then loop based on a specific condition after its initial run. This is where the do...while statement comes in.

A 
Preview: Docs A loop is a programming tool that is used to repeat a set of instructions.
do...while
 statement says to do a task once and then keep doing it until a specified condition is no longer met. The syntax for a do...while statement looks like this:

let countString = '';
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);

console.log(countString);*/

// Write your code below

const cupsOfSugarNeeded = 0;

let cupsAdded = 0;

do{
  cupsAdded++;
  console.log(cupsAdded)
}while(cupsAdded<cupsOfSugarNeeded);