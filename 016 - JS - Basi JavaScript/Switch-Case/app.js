/*
The break keyword tells the computer to exit the block and not execute any more code or 
check any other cases inside the code block. Note: Without break keywords, the first matching case will run, 
but so will every subsequent case regardless of whether or not it matches—including the default. 
This behavior is different from if/else conditional statements that execute only one block of code.
*/

let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place': 
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
}