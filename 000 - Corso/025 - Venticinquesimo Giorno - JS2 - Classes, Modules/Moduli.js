/*
Modules are reusable pieces of code in a file that can be exported and then imported for use in another file. 
A modular program is one whose components can be separated, used individually, and recombined to create a complex system.
*/

//File 1
function changeText(domElement, newText) {
  domElement.innerHTML = newText;
}

function changeToFunkyColor(domElement) {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  domElement.style.color = `rgb(${r}, ${g}, ${b})`;
}

// export the functions here
export { changeText, changeToFunkyColor }

//File 2
import { changeText, changeToFunkyColor } from './module.js'

const header = document.getElementById("header");

// call changeText here
changeText(header, "I did it!");

setInterval(()=> {
  
  // call changeToFunkyColor() here
  changeToFunkyColor(header);

}, 200);