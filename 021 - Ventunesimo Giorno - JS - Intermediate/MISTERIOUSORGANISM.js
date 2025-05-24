// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  function pAequorFactory (id, arr = []) {
    const approvedId = id;
    /*arr.forEach(element => {
      console.log(element)
      if(element.specimenNum === approvedId){
        approvedId = element.specimenNum + 1;
        console.log(`ID già esistente, cambiato in ${approvedId}`)
      };
    });*/
  
    return {
      specimenNum: approvedId,
      dna: arr,
      mutate() {
        const randomIndex = Math.floor(Math.random() * 15)
        const value = this.dna[randomIndex];
        const randomDnaChange = index => {
          this.dna[randomIndex] = returnRandBase();
          if(this.dna[randomIndex] === value) {
            randomDnaChange();
          }else{
            return true;
          };
        };
        randomDnaChange()
      },
      compareDNA(pAequorObj = {}) {
        let commonDNA = 0;
        for(let i = 0; i < this.dna.length; i++) {
          if(this.dna[i] === pAequorObj.dna[i]) {
            commonDNA += 1;
          };
        };
        return `specimen #${this.specimenNum} and specimen #${pAequorObj.specimenNum} have ${commonDNA / this.dna.length * 100}% DNA in common`
      }, 
      willLikelySurvive() {
        const lettersPercentages= {A: 0, T: 0, C: 0, G: 0};
        this.dna.forEach(element => lettersPercentages[element] += 1);
  
        if((lettersPercentages.C / this.dna.length * 100) + (lettersPercentages.G / this.dna.length * 100) >= 60) {
          return true;
        }else{
          return false;
        }
      }
    };
  }
  
  let NiceData = [];
  let tries = 0;
  let id = 0;
  
  while(NiceData.length < 30) {
    tries += 1;
    NiceData.push(pAequorFactory(id, mockUpStrand()));
    id += 1;
    if(!NiceData[NiceData.length - 1].willLikelySurvive()) {
      NiceData.pop();
      id -= 1;
    }
  }
  
  console.log(`Solamente ${tries} tentativi per ottenere ${NiceData.length} campioni con possibilità di sopravvivenza`);
  //console.log(NiceData)
  
  