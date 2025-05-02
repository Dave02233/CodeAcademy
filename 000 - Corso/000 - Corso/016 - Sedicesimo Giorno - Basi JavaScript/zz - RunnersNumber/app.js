let raceNumber = Math.ceil(Math.random() * 1000); //Numero fra 1 e 1000

let registeredEarly = false;
let runnersAge = 12;

if (runnersAge >= 18 && registeredEarly) {
  raceNumber += 1000;
} 

if (runnersAge >= 18 && registeredEarly) {
  console.log(`You will race at 9:30 am with the number ${raceNumber}`);
} else if (runnersAge >= 18 && !registeredEarly){
    console.log(`You will race at 11:00 am with the number ${raceNumber}`);
} else if (runnersAge < 18) {
    console.log(`You will race at 12:30 am with the number ${raceNumber}`);
}

