'use strict';
window.addEventListener('keydown', (event) => {
    const audio = document.querySelector(`audio[data-letter="${event.keyCode}"]`);
    const key = document.querySelector(`.piano-key[data-letter="${event.keyCode}"]`)
    if (!audio) return;
    if (!key) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('piano-key-active');
});

window.addEventListener('keyup', (event) => {
    const key = document.querySelector(`.piano-key[data-letter="${event.keyCode}"]`)
    if (!key) return;
    key.classList.remove('piano-key-active');

});


const pianoKeys = document.querySelectorAll('.piano-key');
const PIANO = document.getElementById('piano');


const startSound = (event) => {
    event.target.classList.add('piano-key-active')
};

const stopSound = (event) => {
    event.target.classList.remove('piano-key-active');
};

const startOver = (event) => {
    event.target.classList.add('piano-key-active');
    pianoKeys.forEach((elem) => {
        elem.addEventListener('mouseover', startSound);
        elem.addEventListener('mouseover', playaudio);
        elem.addEventListener('mouseout', stopSound);

    });
};

const stopOver = () => {
    pianoKeys.forEach((elem) => {
        elem.classList.remove('piano-key-active');
        elem.removeEventListener('mouseover', startSound);
        elem.removeEventListener('mouseover', stopSound);
        elem.removeEventListener('mouseover', playaudio);
    });
};

const playaudio = (event) => {
    if(event.target.classList.contains('piano-key')) {
        const note = event.target.dataset.note;
        const audio = document.querySelector(`audio[data-note="${note}"]`);
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
      }   

}

    PIANO.addEventListener('mousedown', startOver, false);
    document.addEventListener('mouseup', stopOver);
    PIANO.addEventListener('mousedown', playaudio);