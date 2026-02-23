/*
person.age = 40;
console.log(person._age); // Logs: 40
person.age = '40'; // Logs: You must assign a number to age


Setter methods like age do not need to be called with a set of parentheses. 
Syntactically, it looks like we’re reassigning the value of a property.

Like getter methods, there are similar advantages to using setter methods that include 
checking input, performing actions on properties, and displaying a clear intention for how 
the object is supposed to be used. Nonetheless, even with a setter method, it is still possible 
to directly reassign properties. For example, in the example above, we can still set ._age directly:
*/

const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors(num) {
      /*if(typeof num === 'number' && num >= 0){
        this._numOfSensors = num;
      }else{
        console.log('Pass in a number that is greater than or equal to 0')
      }*/
      typeof num === 'number' && num >= 0 ? this._numOfSensors = num : console.log('Pass in a number that is greater than or equal to 0')
    }
  };
  
  robot.numOfSensors = 100;
  
  console.log(robot.numOfSensors)
  
  
  
  
  