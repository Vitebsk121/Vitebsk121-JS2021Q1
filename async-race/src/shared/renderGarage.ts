import { Garage } from '../components/garage/garage';
import { setCarsList } from './localDB';

export function renderNewGarage(): void {
  const garage = document.querySelector('.garage__main-wrapper');
  const newGarage = new Garage();
  garage?.replaceWith(newGarage.element);
}

export async function refreshGarage(): Promise<void> {
  await setCarsList().then(() => {
    renderNewGarage();
  });
}

export function clearGarageSelectedForm(): void {
  const updateNameOfCar = (<HTMLInputElement>document.querySelector('.selected-car__input'));
  const updateColorOfCar = (<HTMLInputElement>document.querySelector('.selected-car-color__input'));

  updateNameOfCar.value = '';
  updateColorOfCar.value = '#000000';

  const selectedForm = document.querySelector('.selected-car__form');
  if (!selectedForm) throw Error('Selected form not founded');
  for (let i = 0; i < selectedForm.children.length; i++) {
    selectedForm.children[i].setAttribute('disabled', '');
  }
  selectedForm.children[2].classList.add('disabled');
}
