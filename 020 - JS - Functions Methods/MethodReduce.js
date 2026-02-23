/*
As .reduce() iterates through the array, the return value of the callback 
function becomes the accumulator value for the next iteration, currentValue takes 
on the value of the current element in the looping process.
*/

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) =>{
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);