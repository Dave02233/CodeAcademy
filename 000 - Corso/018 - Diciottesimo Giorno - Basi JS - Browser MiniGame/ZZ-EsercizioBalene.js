const input = 'Incredibile'.toLowerCase();
const vocali = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

const vocaliCheck = (lettera) => vocali.includes(lettera)

for (let i = 0; i<input.length; i++){
  if(vocaliCheck(input[i])){
    resultArray.push(input[i]);
    if(input[i] === 'u' || input[i] === 'e'){
      resultArray.push(input[i]);
    }
  }
}

const resultString = resultArray.join('').toUpperCase();
console.log(resultString)