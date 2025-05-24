/*
We can also use the return value of a function inside another function. These 
Preview: Docs Loading link description
functions
being called within another function are often referred to as helper functions. 
Since each function is carrying out a specific task, it makes our code easier 
to read and debug if necessary.

If we wanted to define a function that converts the temperature from Celsius to Fahrenheit, 
we could write two functions like:
*/

function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  function costOfMonitors(rows, columns){
    return monitorCount(rows, columns) * 200
  }
  
  const totalCost = costOfMonitors(5, 4);
  
  console.log(totalCost);