let pad1 = document.querySelector('#pad1');
let pad2 = document.querySelector('#pad2');
let pad3 = document.querySelector('#pad3');
let pad4 = document.querySelector('#pad4');
let audio1 = new Audio('sounds/clap.wav');
let audio2 = new Audio('sounds/boom.wav');
let audio3 = new Audio('sounds/hihat.wav');
let audio4 = new Audio('sounds/kick.wav');

pad1.addEventListener('click', function (e){
    // when clicking play audio
    e.preventDefault();
    audio1.play();
})

pad2.addEventListener('click', function (e){
    // when clicking play audio
    e.preventDefault();
    audio2.play();
})

pad3.addEventListener('click', function (e){
    // when clicking play audio
    e.preventDefault();
    audio3.play();
})

pad4.addEventListener('click', function (e){
    // when clicking play audio
    e.preventDefault();
    audio4.play();
})

