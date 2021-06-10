import { Garage } from '../components/garage/garage';
import { setCarsList } from './localDB';

export function renderNewGarage(): void {
  const garage = document.querySelector('.garage__main-wrapper');
  const newGarage = new Garage();
  garage?.replaceWith(newGarage.element);
}

export function refreshGarage() {
  setCarsList().then(() => {
    renderNewGarage();
  });
}
