/*
JavaScript also provides several ways to refactor 
Preview: Docs Arrow function expressions were introduced in ES6. 
These expressions are a clean and concise alternative to the traditional function syntax.
The most condensed form of the function is known as concise body. 
We’ll explore a few of these techniques below:

Functions
1 - that take only a single parameter do not need that parameter to be enclosed in parentheses. 
    However, if a function takes zero or multiple parameters, parentheses are required.
2 - A function body composed of a single-line block does not need curly braces. Without the curly braces, 
    whatever that line evaluates will be automatically returned. The contents of the block should immediately 
    follow the arrow => and the return keyword can be removed. This is referred to as implicit return.
*/
const plantNeedsWater = day => day === 'Wednesday' ? true : false;

console.log(plantNeedsWater('Tuesday'));