import { Main } from '../components/main/main';

export function renderMain(view: string): void {
  let main;
  if (view === 'garage') {
    main = document.querySelector('.main-garage');
  } else if (view === 'winners') {
    main = document.querySelector('.main-winners');
  }
  const newMain = new Main(view);
  main?.replaceWith(newMain.element);
}
