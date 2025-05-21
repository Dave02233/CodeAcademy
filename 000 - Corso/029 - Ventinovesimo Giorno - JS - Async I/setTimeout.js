/*
setTimeout() is a Node API (a comparable API is provided by web browsers) that uses callback functions to schedule tasks to be performed after a delay.
*/
console.log("This is the first line of code in app.js.");
// Keep the line above as the first line of code
// Write your code here:
function usingSTO() {
  console.log('Sono nella funzione');
}

setTimeout(usingSTO, 3000);

// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");