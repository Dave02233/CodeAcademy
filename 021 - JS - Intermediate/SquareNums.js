const numbers = [2, 7, 9, 171, 52, 33, 14]

// Write your code here:
function squareNums(arr = numbers) {
  return arr.map(num => num * num);
}

console.log(squareNums(numbers))