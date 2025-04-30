// Write your code here:
function dogFactory(name = String, breed = String, weight = Number) {
    return {
      _name: name,
      _breed: breed,
      _weight: weight,
  
      set name(newName) {
        if(typeof newName === 'string') {
          this._name = newName;
        }else{
          console.log('Wrong Input for Name');
        }
      }, 
      get name() {
        return this._name;
      }, 
  
      set breed(newBreed) {
        if(typeof newBreed === 'string') {
          this._breed = newBreed;
        }else{
          console.log('Wrong Input for Breed');
        }
      }, 
      get breed() {
        return this._breed;
      }, 
  
      set weight(newWeight) {
        if(typeof newWeight === 'number') {
          this._weight = newWeight;
        }else{
          console.log('Wrong Input for Weight');
        }
      }, 
      get weight() {
        return this._weight;
      }, 
  
      bark() {
        return 'ruff! ruff!';
      },
  
      eatTooManyTreats() {
        this.weight += 1;
      }
    };
  }