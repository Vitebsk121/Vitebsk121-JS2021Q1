import { Main } from '../components/main/main';

export function renderMain(view: string): void {
  const main = document.querySelector('.main');
  const newMain = new Main(view);
  main?.replaceWith(newMain.element);
}
