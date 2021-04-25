'use strict';
const fullscreen = document.querySelector('.fullscreen');
const inputs = document.querySelectorAll('.controls');
const outputs = document.querySelectorAll('.output')
const nextPicture = document.querySelector('.btn-next');
const reset = document.querySelector('.btn-reset');
const image = document.getElementById('image');
const loadPicture = document.querySelector('input[type="file"]');
const canvas = document.querySelector('canvas');
const savePicture = document.querySelector('.btn-save');

let count = 1;
let blurValue = '0px';
let invertValue = '0%';
let sepiaValue = '0%';
let saturateValue = '100%';
let hueValue = '0deg';


function handleUpdeate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    if (this.name === 'blur') {
        blurValue = this.value * 2 + suffix;
    } else if (this.name === 'invert') {
        invertValue = this.value + suffix;
    } else if (this.name === 'sepia') {
        sepiaValue = this.value + suffix;
    } else if (this.name === 'saturate') {
        saturateValue = this.value + suffix;
    } else if (this.name === 'hue') {
        hueValue = this.value + suffix;
    }
    outputs.forEach(output => output.name === this.name ? output.value = this.value : output.value);
    drawImage();
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
    drawImage();
};

function resetValues() {
    document.documentElement.style.setProperty(`--blur`, '0px');
    document.documentElement.style.setProperty(`--invert`, '0%');
    document.documentElement.style.setProperty(`--sepia`, '0%');
    document.documentElement.style.setProperty(`--saturate`, '100%');
    document.documentElement.style.setProperty(`--hue`, '0deg');
    inputs.forEach(item => item.name === 'saturate' ?  item.value = 100 : item.value = 0);
    outputs.forEach(item => item.name === 'saturate' ?  item.value = 100 : item.value = 0);
    blurValue = '0px';
    invertValue = '0%';
    sepiaValue = '0%';
    saturateValue = '100%';
    hueValue = '0deg';
    drawImage();
};

function upload() {
    const file = loadPicture.files[0];
    const reader = new FileReader();
    reader.onload = () => {
        const img = new Image();
        img.src = reader.result;
        image.src = img.src;
        drawImage();
    }
    reader.readAsDataURL(file);
    loadPicture.value = '';
};

function drawImage() {
  const img = new Image();  
  img.setAttribute('crossOrigin', 'anonymous');
  img.src = image.src;
  img.onload = function() {
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx.filter = `blur(${blurValue}) invert(${invertValue}) sepia(${sepiaValue}) saturate(${saturateValue}) hue-rotate(${hueValue})`;
    ctx.drawImage(img, 0, 0);
  }; 
}

function download() {
    console.log(canvas.toDataURL());
    var link = document.createElement('a');
    link.download = 'download.png';
    link.href = canvas.toDataURL();
    link.click();
    link.delete;
};

inputs.forEach(input => input.addEventListener('input', handleUpdeate));
fullscreen.addEventListener('click', startStopFullscreen);
nextPicture.addEventListener('click', swapPicture);
reset.addEventListener('click', resetValues);
loadPicture.addEventListener('change', upload);
savePicture.addEventListener('click', download);
drawImage();