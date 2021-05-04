'use strict';
const ligthTheme = document.querySelectorAll('.light');
const chbox = document.getElementById('theme');
const animalsCards = document.querySelectorAll('.animal__card');
const galaryRange = document.querySelector('.galary__range');
const galaryOutput = document.querySelector('.galary__output');
const petsCards = document.querySelectorAll('.pets__cards');
const petsSliders = document.querySelectorAll('.pets__slider');
const inputs = document.querySelectorAll('.input');
const outputs = document.querySelectorAll('.output');

swapThemeOnload();


function swapTheme() {
    if (chbox.checked) {
        ligthTheme.forEach((item) => {
            item.classList.remove('light');
            item.classList.add('dark');
        });
        localStorage.theme = 'dark';
    } else {
        ligthTheme.forEach((item) => {
            item.classList.remove('dark');
            item.classList.add('light');
        });
        localStorage.theme = 'light';
    }
};

function swapThemeOnload() {
    if (localStorage.theme === 'dark') {
        chbox.checked = true;
        ligthTheme.forEach((item) => {
            item.classList.remove('light');
            item.classList.add('dark');
        });
    } else {
        ligthTheme.forEach((item) => {
            item.classList.remove('dark');
            item.classList.add('light');
        });
    }
};

function getIndexOfCards() {
    const i = Array.from(animalsCards).indexOf(this);
    scrollAnimalsCards(i);
};

function scrollAnimalsCards(p) {
    const i = Number(p);
    if (animalsCards[i].classList.contains('card__none')) {
        return;
    }
    galaryOutput.value = "0" + i;
    galaryRange.value = i;
    animalsCards.forEach((item) => item.classList.remove('card__active'));
    animalsCards[i].classList.add('card__active');
    const arrOfActive = [animalsCards[i - 1], animalsCards[i], animalsCards[i + 1], animalsCards[i + 2], animalsCards[i + 3]];
    console.log(typeof i);
    console.log(arrOfActive);
    animalsCards.forEach((item) => {
        item.classList.remove('hidden-left', 'hidden-right');
        if (Array.from(animalsCards).indexOf(item) < Array.from(animalsCards).indexOf(arrOfActive[0])) {
            item.classList.add('hidden-left');
        } else if (Array.from(animalsCards).indexOf(item) > Array.from(animalsCards).indexOf(arrOfActive[4]) && Array.from(animalsCards).indexOf(arrOfActive[4]) !== -1) {
            item.classList.add('hidden-right');
        }
    })
};

function handleUpdeate() {
    galaryOutput.value = "0" + this.value;
    scrollAnimalsCards(this.value);
};

let count = true;
let countPetsBlog = 1;

function swapPetsBlogs(i) {
    console.log(i);
    if (i === 1) {
        countPetsBlog += 1;
        if (countPetsBlog > 8) {
            countPetsBlog = 1;
            petsCards[0].classList.remove('pets__cards-one', 'pets__cards-two', 'pets__cards-three');
            petsCards[0].classList.add('pets__cards-one');
            petsCards[1].classList.remove('pets__cards-one', 'pets__cards-two', 'pets__cards-three');
            petsCards[1].classList.add('pets__cards-two');
            petsCards[2].classList.remove('pets__cards-one', 'pets__cards-two', 'pets__cards-three');
            petsCards[2].classList.add('pets__cards-three');
        } else {
            petsCards.forEach((item) =>  {
                if (item.classList.contains('pets__cards-two')) {
                    item.classList.remove('pets__cards-two');
                    item.classList.add('pets__cards-one');
                } else  if (item.classList.contains('pets__cards-three')) {
                    item.classList.remove('pets__cards-three');
                    item.classList.add('pets__cards-two');
                } else  if (item.classList.contains('pets__cards-one')) {
                    item.classList.remove('pets__cards-one');
                    item.classList.add('pets__cards-three');
                }
            })
        }
        outputs.forEach((output) => output.name === "pets" ? output.value = '0' + countPetsBlog : output.value);
        inputs.forEach((input) => input.name === "pets" ? input.value = countPetsBlog : input.value);
    }
    if (i === 0) {
        countPetsBlog -= 1;
        if (countPetsBlog < 1) {
            countPetsBlog = 8;
            petsCards[0].classList.remove('pets__cards-one', 'pets__cards-two', 'pets__cards-three');
            petsCards[0].classList.add('pets__cards-three');
            petsCards[1].classList.remove('pets__cards-one', 'pets__cards-two', 'pets__cards-three');
            petsCards[1].classList.add('pets__cards-one');
            petsCards[2].classList.remove('pets__cards-one', 'pets__cards-two', 'pets__cards-three');
            petsCards[2].classList.add('pets__cards-two');
        } else {
            petsCards.forEach((item) =>  {
                if (item.classList.contains('pets__cards-three')) {
                    item.classList.add('pets__cards-one');
                    item.classList.remove('pets__cards-three');
                } else  if (item.classList.contains('pets__cards-two')) {
                    item.classList.remove('pets__cards-two');
                    item.classList.add('pets__cards-three');
                } else  if (item.classList.contains('pets__cards-one')) {
                    item.classList.remove('pets__cards-one');
                    item.classList.add('pets__cards-two');
                }
            })
        }
        outputs.forEach((output) => output.name === "pets" ? output.value = '0' + countPetsBlog :  output.value);
        inputs.forEach((input) => input.name === "pets" ? input.value = countPetsBlog : input.value);
    }
}

function slidersSwapBlog() {
    const i = Array.from(petsSliders).indexOf(this);
    if (count === true) {
        count = false;
        swapPetsBlogs(i)
        setTimeout(() => {
            count = true;
        }, 300);
    }
}

function petsInputSwapBlog(param) {
    let repeat = Number(param) - Number(countPetsBlog);
    if (repeat > 0) {
        for (let i = 0; i < repeat; i++) {
            swapPetsBlogs(1);
        }
    }
    if (repeat < 0) {
        console.log(repeat);
        let p = Math.abs(repeat);
        console.log(p);
        for (let i = 0; i < p; i++) {
            swapPetsBlogs(0);
        }
    }
}

function inputUpdate() {
    outputs.forEach((output) => output.name === this.name ? output.value = '0' + this.value : output.value);
    if (this.name === "pets") {
        petsInputSwapBlog(this.value);
    }
}

chbox.addEventListener('click', swapTheme);
animalsCards.forEach((item) => item.addEventListener('click', getIndexOfCards));
galaryRange.addEventListener('input', handleUpdeate);
petsSliders.forEach((item) => item.addEventListener('click', slidersSwapBlog));
inputs.forEach((item) => item.addEventListener('input', inputUpdate))