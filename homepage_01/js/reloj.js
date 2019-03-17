//Code copied from Icepickle's (https://stackoverflow.com/users/3231537/icepickle)
// answer in the following Stack Overflow post: 
//https://stackoverflow.com/questions/43097638/blink-the-time-like-a-real-digital-clock

var clockEl = document.querySelector('#clock');

function getTime() {
  return new Date().toLocaleTimeString('es-ES', 
     { hour12: false, hour: 'numeric', minute: 'numeric' }).toString();
}

function setTime() {
  var time = getTime();
  // check if the colon is there
  if (clockEl.innerText.split(':').length === 1) {
    // if it's not, set the actual time
    clockEl.innerText = time;
  } else {
    // if it is, remove the colon
    clockEl.innerText = time.split(':').join(' ');
  }
}

setInterval(setTime, 500);
setTime();
