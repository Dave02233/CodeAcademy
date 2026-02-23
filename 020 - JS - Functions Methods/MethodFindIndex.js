const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});

const startsWithS = animals.findIndex(animal => {
  return animal[0].toLocaleLowerCase() === 's';
})
console.log(startsWithS)

const iniziaPerS = animals.filter(animal => {
  return animal[0].toLocaleLowerCase() === 's';
})

console.log(iniziaPerS)