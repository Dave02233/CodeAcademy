let arr = ['Ferrari', 'FIAT', 'Peugeot'];
let [primo, secondo, terzo] = arr;
console.log(secondo);

const obj = {
    nome: 'Pippo', 
    cognome: 'Coca',
    età: 30
}
const {nome, cognome, età} = obj;
console.log(nome);


const obj2 = {
    Cavalli: 180,
    Marca: 'BMW',
    Cilindrata: 1600

}
const objFunction = ({Cavalli, Cilindrata, Marca}) => {
    console.log(`La mia auto ha ${Cavalli} cavalli, una cilindrata di ${Cilindrata} e la marca è ${Marca}`);
}
objFunction(obj2);