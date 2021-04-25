'use strict';
const fullscreen = document.querySelector('.fullscreen');
const inputs = document.querySelectorAll('.controls');
const outputs = document.querySelectorAll('.output')
const nextPicture = document.querySelector('.btn-next');
const image = document.getElementById('image');
let count = 1;

function handleUpdeate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    outputs.forEach(output => output.name === this.name ? output.value = this.value : output.value);
};

const startStopFullscreen = () => {
    let elem = document.querySelector('body')
    if (!document.fullscreenElement) {
        elem.requestFullscreen()
    } else {
        document.exitFullscreen();
    }
};

function swapPicture() {
    const date = new Date;
    const time = date.getHours();
    let countPrefix = 0;
    if (count > 9) {
        countPrefix = '';
    } else {
        countPrefix = 0;
    };
    if (time >= 6 && time < 12) {
        image.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/${countPrefix}${count}.jpg`;
        count += 1;
    } else if (time >= 12 && time < 18) {
        image.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/day/${countPrefix}${count}.jpg`;
        count += 1;
    } else if (time >= 18) {
        image.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${countPrefix}${count}.jpg`;
        count += 1;
    } else if (time >= 0 && time < 6) {
        image.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/${countPrefix}${count}.jpg`;
        count += 1;
    };
    if (count === 21) {
        count = 1;
    };
};

fullscreen.addEventListener('click', startStopFullscreen);
inputs.forEach(input => input.addEventListener('input', handleUpdeate));
nextPicture.addEventListener('click', swapPicture);