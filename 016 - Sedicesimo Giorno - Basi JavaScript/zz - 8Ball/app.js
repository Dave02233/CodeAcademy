let userName = 'Davide';
let userQuestion = 'Pamela Prati è sana di mente?';
let randomNumber = Math.ceil(Math.random() * 8);
let eightBall = '';

userName ? console.log(`Ciao, ${userName}!`) : console.log('Ciao sconosciuto!'); 

console.log(`${userName || 'Uno sconosciuto'} chiede '${userQuestion || 'la ricetta delle lasagne vegane'}'`);

switch (randomNumber) {
  default:
    eightBall = 'Lorem Ipseccetera'
  case 1: 
    eightBall = 'È certo';
    break;
  case 2: 
    eightBall = 'È molto probabile';
    break;
  case 3: 
    eightBall = 'La risposta è confusa, prova di nuovo';
    break;
  case 4: 
    eightBall = 'Non riesco a fare predizioni ora';
    break;
  case 5: 
    eightBall = 'Non ci contare';
    break;
  case 6: 
    eightBall = 'Le mie risorse dicono di no';
    break;
  case 7: 
    eightBall = 'La visione non sembra buona';
    break;
  case 8: 
    eightBall = 'I segni dicono di si';
    break;
}

console.log(eightBall);




