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
