//geolocation js
//how to use Navigator.geolocation

let G, options, spans;
document.addEventListener('DOMContentLoaded', init);

function init() {
  if (navigator.geolocation) {
  } else {
  }
}
function gotPos(position) {}

function posFail(err) {
  //err is a number
}
