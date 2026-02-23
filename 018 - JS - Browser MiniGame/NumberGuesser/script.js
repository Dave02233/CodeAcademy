let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
  return Math.round(Math.random() * 9);
}

function compareGuesses(humanGuess, computerGuess, target) {
    const humanDiff = Math.abs(target - humanGuess);
    const computerDiff = Math.abs(target - computerGuess);

    if (humanDiff < computerDiff){
        return true;
    } else if (humanDiff === computerDiff){
        return true;
    } else {
        return false;
    }
}

function updateScore(winner){
  if(winner === 'human'){
    humanScore += 1;
  } else if (winner === 'computer'){
    computerScore += 1;
  }
}

function advanceRound(){
  currentRoundNumber += 1;
}



console.log()



