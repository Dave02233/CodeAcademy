/*
Promises are 
Preview: Docs A data type for organizing a set of custom properties and behaviors.
objects
 that represent the eventual outcome of an asynchronous operation. A 
Preview: Docs A JavaScript Promise is an object that can be used to get the outcome of an asynchronous operation when that result is not instantly available.
Promise
 object can be in one of three states:

Pending: The initial state— the operation has not completed yet.
Fulfilled: The operation has completed successfully and the promise now has a resolved value. 
For example, a request’s promise might resolve with a JSON object as its value.
Rejected: The operation has failed and the promise has a reason for the failure. This reason is usually an Error of some kind.


resolve is a function with one argument. Under the hood, if invoked, resolve() will change the promise’s status from pending to fulfilled, 
and the promise’s resolved value will be set to the argument passed into resolve().
reject is a function that takes a reason or error as an argument. Under the hood, if invoked, reject() will change the promise’s status 
from pending to rejected, and the promise’s rejection reason will be set to the argument passed into reject().

const executorFunction = (resolve, reject) => {
 if (someCondition) {
     resolve('I resolved!');
 } else {
     reject('I rejected!'); 
 }
}
const myFirstPromise = new Promise(executorFunction);

*/
const inventory = {
  sunglasses: 150,
  pants: 1088,
  bags: 1344
};

// Write your code below:
function myExecutor(resolve, reject) {
  if(inventory.sunglasses > 0) {
    resolve('Sunglasses order processed.');
  }else{
    reject('That item is sold out.');
  }
}

function orderSunglasses() {
  return new Promise(myExecutor);
}

const orderPromise = orderSunglasses();

console.log(orderPromise);