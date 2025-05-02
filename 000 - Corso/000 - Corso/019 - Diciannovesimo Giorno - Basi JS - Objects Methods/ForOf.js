const spellingWord = 'hippopotamus';

// Write your code below
for(let char of spellingWord){
  console.log(char)
}


const pokemonList = ['Pikachu', 'Charizard', 'Squirtle', 'Yoshi', 'Snorlax'];

// Write your code below
for(let pokemon of pokemonList){
  if(pokemon === 'Yoshi'){
    continue;
  }
  console.log(`You caught a ${pokemon}`)
}