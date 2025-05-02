// Write your code below
const bobsFollowers = ['Pippo', 'Paperino', 'Chicco', 'Pluto'];

const tinasFollowers = ['Pippo', 'Paperina', 'Chicco'];

const mutualFollowers = [];

for(let i=0; i<bobsFollowers.length; i++){
  for(let c=0; c<tinasFollowers.length; c++){
    if(bobsFollowers[i] === tinasFollowers[c]){
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
console.log(mutualFollowers)