import { Garage } from '../components/garage/garage';
import { Main } from '../components/main/main';

export function renderMain(view: string): void {
  const main = document.querySelector('.main');
  const newMain = new Main(view);
  main?.replaceWith(newMain.element);
}

export function renderNewGarage(): void {
const garage = document.querySelector('.garage__main-wrapper');
const newGarage = new Garage();
garage?.replaceWith(newGarage.element);
};