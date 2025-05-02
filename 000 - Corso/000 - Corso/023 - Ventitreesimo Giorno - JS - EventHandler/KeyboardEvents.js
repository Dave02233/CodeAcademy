let ball = document.getElementById('float-circle');

// Write your code below
function up() {
  ball.style.bottom = '250px';
}

function down(event) {
  ball.style.bottom = '50px';
  console.log(event.key);
}

document.addEventListener('keydown', up);
document.addEventListener('keyup', down);