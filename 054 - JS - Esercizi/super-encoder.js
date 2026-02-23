// Import the encryptors functions here.
const { caesarCipher, symbolCipher, reverseCipher } = require('./encryptors.js')

const encodeMessage = (str) => {
  // Use the encryptor functions here.
  const outCaesarCipher = caesarCipher(str, 4);
  const outSymbolCipher = symbolCipher(outCaesarCipher);
  const outReverseCipher = reverseCipher(outSymbolCipher);

  return outReverseCipher;
}

const decodeMessage = (str) => {

  const outReverseCipher = reverseCipher(str);
  const outSymbolCipher = symbolCipher(outReverseCipher);
  const outCaesarCipher = caesarCipher(outSymbolCipher, -4);

  return outCaesarCipher;
}

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  } 
  if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  } 
  
  process.stdout.write(output + '\n');
  process.exit();
}

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);