import { BaseComponent } from '../base-component';
import { Button } from '../buttons/button';
import { Input } from '../inputs/inputs';
import './garageMenu.scss';

export class GarageMenu extends BaseComponent {
  constructor() {
    super('div', ['garage__menu']);
    const newCarForm = new BaseComponent('form', ['new-car__form']);
    this.element.append(newCarForm.element);

    const inputNewCarName = new Input(['garage__menu-input', 'new-car-name__input'], 'Enter model');
    newCarForm.element.append(inputNewCarName.element);

    const inputNewCarColor = new Input(['garage__menu-input', 'new-car-color__input'], '', 'color');
    newCarForm.element.append(inputNewCarColor.element);

    const submitButtonNewCar = new Button('Add new Car', ['garage__menu-button', 'new-car__bitton']);
    newCarForm.element.append(submitButtonNewCar.element);

    const selectedCarForm = new BaseComponent('form', ['selected-car__form']);
    this.element.append(selectedCarForm.element);

    const inputChangeCarName = new Input(['garage__menu-input', 'selected-car__input'], 'Enter model');
    inputChangeCarName.element.setAttribute('disabled', 'disabled');
    selectedCarForm.element.append(inputChangeCarName.element);

    const inputChangeCarColor = new Input(['garage__menu-input', 'selected-car-color__input'], '', 'color');
    inputChangeCarColor.element.setAttribute('disabled', 'disabled');
    selectedCarForm.element.append(inputChangeCarColor.element);

    const submitButtonSelectedCar = new Button('Change Car', ['garage__menu-button', 'change-car__bitton', 'disabled']);
    submitButtonSelectedCar.element.setAttribute('disabled', 'disabled');
    selectedCarForm.element.append(submitButtonSelectedCar.element);

    const generateCarsButton = new Button('generate cars', ['garage__menu-button', 'generate-car__bitton']);
    this.element.append(generateCarsButton.element);
  }
}
