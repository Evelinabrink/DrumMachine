let padDiv = document.querySelector('#padDiv');
let start = 0;

let startButton = document.querySelector('.start');

startButton.addEventListener('click', function(){
  // turning on drum machine
  if (start === 0) {
    start++;
    startButton.classList.add('on');
    // add hover on pads
    for (let i = 0; i < padDiv.children.length; i++) {
      padDiv.children[i].classList.add('padon');
    }
    // turn off drum machine
  } else if (start > 0) {
    start = 0;
    startButton.classList.remove('on');
    // remove hover on pads
    for (let i = 0; i < padDiv.children.length; i++) {
      padDiv.children[i].classList.remove('padon');
    }
  }
  console.log(start);
})

let audio0 = new Audio('sounds/clap.wav');
let audio1 = new Audio('sounds/boom.wav');
let audio2 = new Audio('sounds/hihat.wav');
let audio3 = new Audio('sounds/kick.wav');
let audio4 = new Audio('sounds/openhat.wav');
let audio5 = new Audio('sounds/ride.wav');
let audio6 = new Audio('sounds/snare.wav');
let audio7 = new Audio('sounds/tink.wav');
let audio8 = new Audio('sounds/tom.wav');

let sounds = [audio0, audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8];
// let keys = [81, 87, 69, 82, 65, 83, 68, 70, 90];

let currentlyPlaying;

// play sound on click
for (let i = 0; i < padDiv.children.length; i++) {
  padDiv.children[i].addEventListener('click', function(){
    if (start === 0) {
      return false;
    }
    if (currentlyPlaying != undefined) {
      currentlyPlaying.load();
    }
    currentlyPlaying = sounds[i];
    sounds[i].play();
  });
}

// remove transition
function removeTransition(e) {
  if (e.propertyName !== 'box-shadow') return;
  e.target.classList.remove('playing');
}

// play sound on key down
function playSound(e) {
  if (start === 0) {
    return false;
  }
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
console.log(keys);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);