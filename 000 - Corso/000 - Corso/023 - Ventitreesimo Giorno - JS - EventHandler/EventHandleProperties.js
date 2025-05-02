/*
the .target property to reference the element that the event is registered to.
the .type property to access the name of the event.
the .timeStamp property to access the number of milliseconds that passed since the document 
loaded and the event was triggered.
*/

let social = document.getElementById('social-media');
let share = document.getElementById('share-button');
let text = document.getElementById('text');

// Write your code below
let sharePhoto = function(event) {
    event.target.style.display = "none";
    text.innerHTML = event.timeStamp;
}

share.addEventListener("click", sharePhoto())