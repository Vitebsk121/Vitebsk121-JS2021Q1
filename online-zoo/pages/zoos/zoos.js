const ligthTheme = document.querySelectorAll('.light');
const chbox = document.getElementById('theme');
const playlist = document.querySelectorAll('.playlist__video');
const videos = document.querySelectorAll('.video');

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

function swapVideo() {
    let i = Array.from(playlist).indexOf(this);
    const mainVideo = videos[0].src
    videos[0].src = videos[i + 1].src;
    videos[i + 1].src = mainVideo;
    // if (i === 0) {
    //     videos[0].src = videos[1].src;
    //     videos[1].src = mainVideo;
    // } else if (i === 1) {
    //     videos[0].src = videos[2].src;
    //     videos[2].src = mainVideo;
    // } else if (i === 2) {
    //     videos[0].src = videos[3].src;
    //     videos[3].src = mainVideo;
    // }
}

chbox.addEventListener('click', swapTheme);
playlist.forEach((item) => item.addEventListener('click', swapVideo));