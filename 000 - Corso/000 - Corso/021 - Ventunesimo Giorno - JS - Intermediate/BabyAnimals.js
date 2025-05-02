// Write your code here:
/*const convertToBaby = (arr = []) => {
  return arr.map(element => 'baby ' + element)
}*/
const convertToBaby = (arr = []) => {
    const newArr = []
    for(let i = 0; i < arr.length; i++) {
      newArr.push('baby ' + arr[i]);
    }
    return newArr;
  }
  
  // When you're ready to test your code, uncomment the below and run:
  
  const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
  
  console.log(convertToBaby(animals)) 
  
  