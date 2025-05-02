//Forecast di oggi costante
const kelvin = 0;
//celsius è sempre kelvin - 273
const celsius = kelvin - 273;
//fahrenheit con formula brutta
let fahrenheit = celsius * (9/5) + 32;
//Round
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
