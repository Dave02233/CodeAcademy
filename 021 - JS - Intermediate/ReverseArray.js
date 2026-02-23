// Write your code here:
function reverseArray(arr) {
    console.log(arr)
    if(arr.length > 0) {
      const newArr = [];
      for(let i = arr.length - 1; i >= 0; i--){
        newArr.push(arr[i]);
      }
      return newArr;
    }else{
      console.log('Empty Array')
    }
  
  }
  let testarr = [5, 5, 9, 10];
  console.log(reverseArray(testarr));
  
  
  
  
  