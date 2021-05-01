'use strict';
const ligthTheme = document.querySelectorAll('.light');
const chbox = document.getElementById('theme');

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
}


chbox.addEventListener('click', swapTheme);