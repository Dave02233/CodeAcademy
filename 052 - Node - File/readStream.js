const readline = require('readline');
const fs = require('fs');

let settings = {
  input: fs.createReadStream('052 - Cinquantaduesimo Giorno - Node/file.txt')
};

const myInterface = writeFile.createInterface(settings);

let lineNum = 0;

const printData = (data) => {
    lineNum ++;
    console.log(`Line ${lineNum}: ${data}`);
};

myInterface.on('line', printData);