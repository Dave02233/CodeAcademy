const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput;
    }else{
      console.log('Invalid Input');
    }
  }
  
  const getComputerChoice = () => {
    switch(Math.floor(Math.random() * 3)){
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
      default:
        return undefined;
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice){
      return 'tie';
    }
  
    if (userChoice === 'rock'){
      if (computerChoice === 'paper'){
        return 'Computer Won';
      }else{
        return 'User Won'
      }
    }
  
    if (userChoice === 'paper'){
      if (computerChoice === 'scissors'){
        return 'Computer Won';
      }else{
        return 'User Won';
      }
    }
  
    if (userChoice === 'scissors'){
      if (computerChoice === 'rock'){
        return 'Computer Won';
      }else{
        return 'User Won';
      }
    }
  }
  
  function playGame(){
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log(`L'utente gioca '${userChoice}' mentre il computer gioca '${computerChoice}', il risultato è: ${determineWinner(userChoice, computerChoice)}`);
  }
  
  playGame();
  
  