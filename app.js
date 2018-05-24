let padDiv = document.querySelector('#padDiv');

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
let keys = [81, 87, 69, 82, 65, 83, 68, 70, 90];

let currentlyPlaying;

// listens for click
for (let i = 0; i < padDiv.children.length; i++) {
  padDiv.children[i].addEventListener('click', function(){
    if (currentlyPlaying != undefined) {
      currentlyPlaying.load();
    }
    currentlyPlaying = sounds[i];
    sounds[i].play();
  });
}

// listens for key
window.addEventListener('keydown', function (e) {
  if (currentlyPlaying != undefined) {
    currentlyPlaying.load();
  }
  currentlyPlaying = sounds[keys.indexOf(e.which)];
  sounds[keys.indexOf(e.which)].play();
})


// add green color for a split second if key is pressed. 
// add error handling for eventlistener 