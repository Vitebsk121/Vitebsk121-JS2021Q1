import { refreshGarage } from '../../shared/renderGarage';
import { createCar } from '../../shared/server';
import { BaseComponent } from '../base-component';
import { Button } from '../buttons/button';
import { Input } from '../inputs/inputs';
import './garageMenu.scss';

export class GarageMenu extends BaseComponent {
  private newCarForm: BaseComponent;

  private inputNewCarName: Input;

  private inputNewCarColor: Input;

  private submitButtonNewCar: Button;

  private selectedCarForm: BaseComponent;

  private inputChangeCarName: Input;

  private inputChangeCarColor: Input;

  private submitButtonSelectedCar: Button;

  private generateCarsButton: Button;

  constructor() {
    super('div', ['garage__menu']);
    this.newCarForm = new BaseComponent('form', ['new-car__form']);
    this.inputNewCarName = new Input(['garage__menu-input', 'new-car-name__input'], 'Enter model');
    this.inputNewCarColor = new Input(['garage__menu-input', 'new-car-color__input'], '', 'color');
    this.submitButtonNewCar = new Button('Add new Car', ['garage__menu-button', 'new-car__bitton'], 'submit');
    this.selectedCarForm = new BaseComponent('form', ['selected-car__form']);
    this.inputChangeCarName = new Input(['garage__menu-input', 'selected-car__input'], 'Enter model');
    this.inputChangeCarName.element.setAttribute('disabled', 'disabled');
    this.inputChangeCarColor = new Input(['garage__menu-input', 'selected-car-color__input'], '', 'color');
    this.inputChangeCarColor.element.setAttribute('disabled', 'disabled');
    this.submitButtonSelectedCar = new Button(
      'Change Car',
      ['garage__menu-button', 'change-car__bitton', 'disabled'],
      'submit',
    );
    this.submitButtonSelectedCar.element.setAttribute('disabled', 'disabled');
    this.generateCarsButton = new Button('generate cars', ['garage__menu-button', 'generate-car__bitton']);

    const GarageMenuGo = (): Promise<void> => new Promise<void>((res) => {
      this.renderGarageMenu();
      res();
    }).then(() => {
      this.addEventListeners();
    });
    GarageMenuGo();
  }

  renderGarageMenu(): void {
    this.element.append(this.newCarForm.element);
    this.newCarForm.element.append(this.inputNewCarName.element);
    this.newCarForm.element.append(this.inputNewCarColor.element);
    this.newCarForm.element.append(this.submitButtonNewCar.element);
    this.element.append(this.selectedCarForm.element);
    this.selectedCarForm.element.append(this.inputChangeCarName.element);
    this.selectedCarForm.element.append(this.inputChangeCarColor.element);
    this.selectedCarForm.element.append(this.submitButtonSelectedCar.element);
    this.element.append(this.generateCarsButton.element);
  }

  addEventListeners(): void {
    this.inputNewCarName.element.addEventListener('input', () => {
    });
    this.submitButtonNewCar.element.addEventListener('click', (e) => {
      const carName = (<HTMLInputElement> this.inputNewCarName.element);
      const carColor = (<HTMLInputElement> this.inputNewCarColor.element);
      if (carName.value !== '') {
        e.preventDefault();
        const NewCar = {
          name: carName.value,
          color: carColor.value,
        };
        createCar(NewCar).then(() => {
          refreshGarage();
          carName.value = '';
          carColor.value = '#000000';
        });
      }
    });
  }
}
