/*
let username = '';
let defaultName = username || 'Stranger';

console.log(defaultName); // Prints: Stranger


Because || or 
Preview: Docs In JavaScript, a statement is a unit of code that performs a specific action or task.
statements
check the left-hand condition first, the variable defaultName will be assigned the actual value of username if it is truthy, 
and it will be assigned the value of 'Stranger' if username is falsy. This concept is also referred to as short-circuit 
evaluation.
*/

let tool = '';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);