const cookBeanSouffle = require('./library.js');

// Write your code below:
async function hostDinnerParty() {
  try{
    const result = await cookBeanSouffle();
    console.log(`${result} is served!`);
  }catch(error){
    console.log(error);
    console.log('Ordering a pizza!');
  }
}

hostDinnerParty();



