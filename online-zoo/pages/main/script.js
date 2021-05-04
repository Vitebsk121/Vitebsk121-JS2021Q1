'use strict';
const ligthTheme = document.querySelectorAll('.light');
const chbox = document.getElementById('theme');
const animalsCards = document.querySelectorAll('.animal__card');

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

function tratata() {
    const i = Array.from(animalsCards).indexOf(this);
    if (animalsCards[i].classList.contains('card__none')) {
        return;
    }
    animalsCards.forEach((item) => item.classList.remove('card__active'));
    animalsCards[i].classList.add('card__active');
    const arrOfActive = [animalsCards[i - 1], animalsCards[i], animalsCards[i + 1], animalsCards[i + 2], animalsCards[i + 3]];
    animalsCards.forEach((item) => {
        item.classList.remove('hidden-left', 'hidden-right');
        if (Array.from(animalsCards).indexOf(item) < Array.from(animalsCards).indexOf(arrOfActive[0])) {
            item.classList.add('hidden-left');
        } else if (Array.from(animalsCards).indexOf(item) > Array.from(animalsCards).indexOf(arrOfActive[4]) && Array.from(animalsCards).indexOf(arrOfActive[4]) !== -1) {
            item.classList.add('hidden-right');
        }
    })
};

chbox.addEventListener('click', swapTheme);
animalsCards.forEach((item) => item.addEventListener('click', tratata));