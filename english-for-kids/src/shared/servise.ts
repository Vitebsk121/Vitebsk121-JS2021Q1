export function closeNav(): void {
  const nav = document.querySelector('.app__nav');
  if (!nav?.classList.contains('active')) return;
  const burger = document.querySelectorAll('.burger__line');
  nav?.classList.remove('active');
  burger.forEach((line) => line.classList.remove('active'));
}

export function openCloseNav(): void {
  const nav = document.querySelector('.app__nav');
  const burger = document.querySelectorAll('.burger__line');
  nav?.classList.toggle('active');
  burger.forEach((line) => line.classList.toggle('active'));
}

export function switchTheme(themeMode: string): void {
  const backgroundTheme = document.documentElement.style;
  console.log(backgroundTheme);
  if (themeMode === 'train') {
    backgroundTheme.setProperty('--backgroundStyleMode', 'linear-gradient(158deg, rgba(255,215,0,1) 0%, rgba(0,187,255,1) 23%, rgba(208,77,255,1) 47%, rgba(0,137,255,1) 68%, rgba(0,255,209,1) 93%)');
  } else if (themeMode === 'play') {
    backgroundTheme.setProperty('--backgroundStyleMode', 'linear-gradient(158deg, rgba(0,255,209,1) 7%, rgba(172,255,0,1) 19%, rgba(218,255,77,1) 55%, rgba(255,92,92,1) 67%, rgba(255,0,0,1) 100%)');
  }
}
