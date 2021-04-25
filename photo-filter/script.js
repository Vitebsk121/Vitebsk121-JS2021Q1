'use strict';
const Fullscreen = document.querySelector('.fullscreen');
const inputs = document.querySelectorAll('.controls');
const outputs = document.querySelectorAll('.output')

function handleUpdeate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    outputs.forEach(output => output.name === this.name ? output.value = this.value : output.value);
}

const startStopFullscreen = () => {
    let elem = document.querySelector('body')
    if (!document.fullscreenElement) {
        elem.requestFullscreen()
    } else {
        document.exitFullscreen();
    }
};

Fullscreen.addEventListener('click', startStopFullscreen);
inputs.forEach(input => input.addEventListener('input', handleUpdeate));