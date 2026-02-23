// Write your code here:
function greetAliens(arr) {
    if(typeof arr === 'object' && typeof arr[0] === 'string') {
      for(let i = 0; i < arr.length; i++) {
        console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`);
      }
    }else{
      console.log('Wrong Input');
    }
  }
  
  // When you're ready to test your code, uncomment the below and run:
  
  const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
  
  greetAliens(aliens);
  
  