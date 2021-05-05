const ligthTheme = document.querySelectorAll('.light');
const chbox = document.getElementById('theme');
const mapPetCards = document.querySelectorAll('.pet__card');
const mapSliders = document.querySelectorAll('.pets__slider');
const mediaQueryMin = window.matchMedia('(min-width: 1601px)');
const mediaQueryMax = window.matchMedia('(max-width: 1600px)');
const mapOutput = document.getElementById('map__output');
const mapInput = document.getElementById('map__input');
const mapPlaceholders = document.querySelectorAll('.map__placeholder');
const ButtonWatch = document.getElementById('watch__online');

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

function getIndexOfPetCards() {
    const i = Array.from(mapPetCards).indexOf(this);
    swapMapPetCards(i);
    changeButtonHref(i);
    swapPlaceHolder(i);
};

function swapPlaceHolder(p) {
    let i = Number(p);
    mapPlaceholders.forEach((item) => {
        item.classList.remove('placeholder__active');
    });
    if (i === 0) {
        mapPlaceholders[2].classList.add('placeholder__active');
    } else if (i === 1) {
        mapPlaceholders[3].classList.add('placeholder__active');
    } else if (i === 2) {
        mapPlaceholders[1].classList.add('placeholder__active');
    } else if (i === 3) {
        mapPlaceholders[0].classList.add('placeholder__active');
    };
};

let countOfVisibleCard = -1;

function getIndexOfMapSliders() {
    const i = Array.from(mapSliders).indexOf(this);
    let indexOfActiveCard = 0;
    mapPetCards.forEach((item) => {
       if (item.classList.contains('pet__card__active')) {
           indexOfActiveCard = Array.from(mapPetCards).indexOf(item);
       }
    });
    if (i === 1) {
        if (indexOfActiveCard === 7) {
            indexOfActiveCard = -1;
        }
        const nextCardWidth = window.getComputedStyle(mapPetCards[indexOfActiveCard + 1]).width;
        if (nextCardWidth === '0px') {
            mapPetCards[indexOfActiveCard + 1].classList.remove('pet__card-hidden', 'pet__card-hiden', 'pet__card-hiden2', 'pet__card-hiden3', 'pet__card-hiden4', 'pet__card-hiden5');
            countOfVisibleCard += 1;
            if (indexOfActiveCard + 1 === 0) {
                mapPetCards.forEach((item) => {
                    mapPetCards[Array.from(mapPetCards).indexOf(item)].classList.remove('pet__card-hidden', 'pet__card-hiden', 'pet__card-hiden2', 'pet__card-hiden3', 'pet__card-hiden4', 'pet__card-hiden5');
                });
                mapPetCards[6].classList.add('pet__card-hidden');
                mapPetCards[7].classList.add('pet__card-hidden');
                countOfVisibleCard = -1;
            } else {
                mapPetCards[countOfVisibleCard].classList.add('pet__card-hidden');
            }
        }
        swapMapPetCards(indexOfActiveCard + 1);
        swapPlaceHolder(indexOfActiveCard + 1);
        changeButtonHref(indexOfActiveCard + 1);
    } else if (i === 0) {
        if (indexOfActiveCard === 0) {
            indexOfActiveCard = 8;
        }
        const prevCardWidth = window.getComputedStyle(mapPetCards[indexOfActiveCard - 1]).width;
        if (prevCardWidth === '0px' && indexOfActiveCard !== 8) {
            mapPetCards[indexOfActiveCard - 1].classList.remove('pet__card-hidden', 'pet__card-hiden', 'pet__card-hiden2', 'pet__card-hiden3', 'pet__card-hiden4', 'pet__card-hiden5');
            countOfVisibleCard += 1;
            mapPetCards[7 - countOfVisibleCard].classList.add('pet__card-hidden');
        } else if (indexOfActiveCard === 8 && prevCardWidth === '0px') {
            mapPetCards.forEach((item) => {
                item.classList.remove('pet__card-hidden', 'pet__card-hiden2', 'pet__card-hiden3', 'pet__card-hiden4', 'pet__card-hiden5');
            });
            mapPetCards[0].classList.add('pet__card-hidden');
            mapPetCards[1].classList.add('pet__card-hidden');
            countOfVisibleCard = -1;
        }
        swapMapPetCards(indexOfActiveCard - 1);
        swapPlaceHolder(indexOfActiveCard - 1);
        changeButtonHref(indexOfActiveCard - 1);
    };
};

function swapMapPetCards(p) {
    mapOutput.value = "0" + (p + 1);
    mapInput.value = p + 1;
    const i = Number(p);
    mapPetCards.forEach((item) => {
        item.classList.remove('pet__card__active');
    });
    mapPetCards[i].classList.add('pet__card__active');
};

function windowSizeCheck () {
    if (mediaQueryMin.matches) {
        mapPetCards.forEach((item) => {
            item.classList.remove('pet__card-hidden');
        });
        if (mapPetCards[7].classList.contains('pet__card-hiden4') || mapPetCards[6].classList.contains('pet__card-hiden4')) {
            return
        } else {
            mapPetCards[7].classList.add('pet__card-hiden4');
            mapPetCards[6].classList.add('pet__card-hiden4');
            mapPetCards.forEach((item) => {
                item.classList.remove('pet__card__active');
            });
            mapPetCards[1].classList.add('pet__card__active');
        }
    }
};

function showActiveCard(n) {
    if (mediaQueryMin.matches) {
        return;
    }
    if (n > 5) {
        if (mapPetCards[n].classList.contains('pet__card-hidden') || mapPetCards[n].classList.contains('pet__card-hiden4')) {
            mapPetCards[n].classList.remove('pet__card-hidden', 'pet__card-hiden', 'pet__card-hiden2', 'pet__card-hiden3', 'pet__card-hiden4', 'pet__card-hiden5');
            countOfVisibleCard += 1;
            for (let a = 0; a <= countOfVisibleCard; a++) {
                mapPetCards[countOfVisibleCard].classList.add('pet__card-hidden');
            }
        }
    }
    if (n < 5) {
        if (mapPetCards[n].classList.contains('pet__card-hidden')) {
            mapPetCards[n].classList.remove('pet__card-hidden', 'pet__card-hiden', 'pet__card-hiden2', 'pet__card-hiden3', 'pet__card-hiden4', 'pet__card-hiden5');
            countOfVisibleCard += 1;
            for (let a = 0; a <= countOfVisibleCard; a++) {
                mapPetCards[7 - a].classList.add('pet__card-hidden');
            }
        }
    }
    if (n == 7 || n == 0) {
        countOfVisibleCard = -1;
    };
}

function chooseActiveCard(n) {
    mapPetCards.forEach((item) => {
        item.classList.remove('pet__card__active');
    });
    mapPetCards[n-1].classList.add('pet__card__active');
    showActiveCard(n-1);
    mapOutput.value = "0" + (n);
    mapInput.value = n;
};

function handleUpdeate() {
    mapOutput.value = "0" + this.value;
    chooseActiveCard(this.value);
    swapPlaceHolder(this.value - 1);
    changeButtonHref(this.value - 1);
};

function changeButtonHref(i) {
    ButtonWatch.onclick = () => {return true};
    if (i === 0) {
        ButtonWatch.action = '../zoos/gorilla.html';
    } else if (i === 1) {
        ButtonWatch.action = '../zoos/panda.html';
    } else if (i === 2) {
        ButtonWatch.action = '../zoos/alligator.html';
    } else if (i === 3) {
        ButtonWatch.action = '../zoos/eagle.html';
    } else {
        ButtonWatch.onclick = () => {return false};
    }
};

function tranclateIndexOfPlaceholder(i) {
    if (i === 0) {
        chooseActiveCard(4);
        changeButtonHref(3);
    } else if (i === 1) {
        chooseActiveCard(3);
        changeButtonHref(2);
    } else if (i === 2) {
        chooseActiveCard(1);
        changeButtonHref(0);
    } else if (i === 3) {
        chooseActiveCard(2);
        changeButtonHref(1);
    };
};

function defaultView() {
    console.log('tratata');
    mapPetCards.forEach((item) => {
        item.classList.remove('pet__card-hidden');
    });
    mapPetCards[6].classList.add('pet__card-hidden');
    mapPetCards[7].classList.add('pet__card-hidden');
};

function changeActivePlaceholder() {
    const i = Array.from(mapPlaceholders).indexOf(this);
    let a = 0;
    mapPetCards.forEach((item) => {
        item.classList.contains('pet__card__active') ? a = item : item;
    });
    const b = Array.from(mapPetCards).indexOf(a);
    if (b === 7 && i === 2) {
        defaultView();
        console.log(a);
    };
    mapPlaceholders.forEach((item) => {
        item.classList.remove('placeholder__active');
    });
    mapPlaceholders[i].classList.add('placeholder__active');
    tranclateIndexOfPlaceholder(i);
};

chbox.addEventListener('click', swapTheme);
mapPetCards.forEach((item) => item.addEventListener('click', getIndexOfPetCards));
mapSliders.forEach((item) => item.addEventListener('click', getIndexOfMapSliders));
window.onresize = windowSizeCheck;
mapInput.addEventListener('input', handleUpdeate);
mapPlaceholders.forEach((item) => item.addEventListener('click', changeActivePlaceholder));
