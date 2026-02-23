const WeekDays = ['monday', 'tuesday', 'thursday', 'wednesday', 'friday', 'saturday', 'sunday'];

function getSleepHours(day){
  day = day.toLowerCase();
  let inputExists = false;

  for(let i = 0; i < WeekDays.length; i++){
    if(day === WeekDays[i]){
      inputExists = true;
      break;
    }
  }

  if (inputExists){
    switch(day){
      case 'monday':
        return 7;
      case 'tuesday':
        return 5;
      case 'thursday':
        return 8;
      case 'wednesday':
        return 4;  
      case 'friday':
        return 9;
      case 'saturday':
        return 6;   
      case 'sunday':
        return 7;    
    }
  }else{
    return 'Wrong input';
  }
}

function getActualSleepHours(){
  let sum = 0;
  for(let i = 0; i < WeekDays.length; i++){
    sum += getSleepHours(WeekDays[i]);
  }
  return sum;
}

const getIdealSleepHours = (idealHours = 8) => idealHours * 7;

function calculateSleepDebt(){
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  const difference = actualSleepHours - idealSleepHours;

  if(actualSleepHours === idealSleepHours){
    return 'No sleep debt';
  }else if(actualSleepHours > idealSleepHours){
    return 'More sleep then needed';
  }else if(actualSleepHours < idealSleepHours){
    return 'You should get some rest';
  }
}


console.log(`${calculateSleepDebt()}, the difference is ${getActualSleepHours()-getIdealSleepHours()}h`);





//console.log(getSleepHours('sunday'))
//console.log(getActualSleepHours())