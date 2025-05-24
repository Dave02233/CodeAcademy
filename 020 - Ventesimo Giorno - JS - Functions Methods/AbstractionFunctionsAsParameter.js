/*
When we invoke a higher-order function, and pass another function in as an argument, 
we don’t invoke the argument function. Invoking it would evaluate to passing in the 
return value of that function call. With callback functions, we pass in the function 
itself by typing the function name without the parentheses:

const higherOrderFunc = param => {
  param();
  return `I just invoked ${param.name} as a callback function!`
}
 
const anotherFunc = () => {
  return 'I\'m being invoked by the higher-order function!';
}

higherOrderFunc(anotherFunc);


We wrote a higher-order function higherOrderFunc that accepts a single parameter, 
param. Inside the body, param gets invoked using parentheses. And finally, a string 
is returned, telling us the name of the callback function that was passed in.
*/

/*
Anonymous function
higherOrderFunc(() => {
  for (let i = 0; i <= 10; i++){
    console.log(i);
  }
});
*/

const addTwo = num => {
    return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => {
    const checkA = val + 2;
    const checkB = func(val);
  
    if(checkA === checkB) {
      return func(val);
    }else{
      return 'inconsistent results';
    }
  }
  
  console.log(checkConsistentOutput(addTwo, 2));
  


  