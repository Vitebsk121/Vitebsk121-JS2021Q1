import { Main } from "../components/main/main";

export function closeNav(): void {
  const nav = document.querySelector('.app__nav');
  if (!nav?.classList.contains('active')) return;
  const app = document.querySelector('.app__wrapper');
  const burger = document.querySelectorAll('.burger__line');
  nav?.classList.remove('active');
  app?.classList.remove('to-right');
  burger.forEach((line) => line.classList.remove('active'));
}

export function openCloseNav(): void {
  const nav = document.querySelector('.app__nav');
  const burger = document.querySelectorAll('.burger__line');
  const app = document.querySelector('.app__wrapper');
  nav?.classList.toggle('active');
  app?.classList.toggle('to-right');
  burger.forEach((line) => line.classList.toggle('active'));
}

export function switchTheme(themeMode: string): void {
  const backgroundTheme = document.documentElement.style;
  if (themeMode === 'train') {
    backgroundTheme.setProperty(
      '--backgroundStyleMode',
      `linear-gradient(
        158deg, 
        rgba(255,215,0,1) 0%, 
        rgba(0,187,255,1) 23%, 
        rgba(208,77,255,1) 47%, 
        rgba(0,137,255,1) 68%, 
        rgba(0,255,209,1) 93%)`,
    );
  } else if (themeMode === 'play') {
    backgroundTheme.setProperty(
      '--backgroundStyleMode',
      `linear-gradient(
        158deg, 
        rgba(158,252,227,1) 0%, 
        rgba(0,224,139,1) 24%, 
        rgba(199,255,69,1) 48%, 
        rgba(111,130,255,1) 74%, 
        rgba(148,233,165,1) 100%)`,
    );
  }
}

export function renderNewMain(category: string, mode: string) {
  const main = document.querySelector('.app__main');
  const newMain = new Main(category, mode);
  main?.replaceWith(newMain.element);
}
