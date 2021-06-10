import { Garage } from '../components/garage/garage';

export function renderNewGarage(): void {
  const garage = document.querySelector('.garage__main-wrapper');
  const newGarage = new Garage();
  garage?.replaceWith(newGarage.element);
}
