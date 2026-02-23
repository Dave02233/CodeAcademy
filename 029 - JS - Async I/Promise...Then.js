/*
.then() is a higher-order function— it takes two callback 
Preview: Docs Loading link description
functions
 as arguments. We refer to these 
Preview: Docs A callback is a function passed as an argument to another function.
callbacks
 as handlers. When the promise settles, the appropriate handler will be invoked with that settled value.

The first handler, sometimes called onFulfilled, is a success handler, and it should contain the logic for the promise resolving.
The second handler, sometimes called onRejected, is a failure handler, and it should contain the logic for the promise rejecting.
*/

const {checkInventory} = require('./library.js');

const order = [['sunglasses', 99999], ['bags', 2]];

// Write your code below:

function handleSuccess(resolvedValue) {
  console.log(resolvedValue);
}

function handleFailure(rejectedValue) {
  console.log(rejectedValue);
}

checkInventory(order).then(handleSuccess, handleFailure);