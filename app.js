let pad1 = document.querySelector('#pad1');
let pad2 = document.querySelector('#pad2');
let pad3 = document.querySelector('#pad3');
let pad4 = document.querySelector('#pad4');

let padDiv = document.querySelector('#padDiv');

let audio0 = new Audio('sounds/clap.wav');
let audio1 = new Audio('sounds/boom.wav');
let audio2 = new Audio('sounds/hihat.wav');
let audio3 = new Audio('sounds/kick.wav');

let sounds = [audio0, audio1, audio2, audio3]

for (let i = 0; i < padDiv.children.length; i++) {
    padDiv.children[i].addEventListener('click', function (){
        console.dir(this);
        sounds[i].play();
    })
}
