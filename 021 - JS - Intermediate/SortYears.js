// Write your code here:
function sortYears(arr = [0]) {
    return arr.sort((a, b) => b - a);
  }
  
  // Feel free to uncomment the below code to test your function:
  
  const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]
  
  console.log(sortYears(years))
  // Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]
  
/*same array.
Function used to determine the order of the elements. 
It is expected to return a negative value if the first argument is less than the second argument, 
zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in 
ascending, ASCII character order.
*/  