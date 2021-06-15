import { randomCar } from '../../shared/randomCars';
import { refreshGarage } from '../../shared/renderGarage';
import { refreshWinners } from '../../shared/renderWinners';
import { createCar, updateCar } from '../../shared/server';
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

  private carName: HTMLInputElement;

  private carColor: HTMLInputElement;

  private countOfNewCars: number;

  private updateNameOfCar: HTMLInputElement;

  private updateColorOfCar: HTMLInputElement;

  constructor() {
    super('div', ['garage__menu']);
    this.newCarForm = new BaseComponent('form', ['new-car__form']);
    this.inputNewCarName = new Input(['garage__menu-input', 'new-car-name__input'], 'Enter model');
    let inputNameValue = localStorage.getItem('inputNameValue');
    if (!inputNameValue) inputNameValue = '';
    (<HTMLInputElement> this.inputNewCarName.element).value = inputNameValue;
    this.inputNewCarColor = new Input(['garage__menu-input', 'new-car-color__input'], '', 'color');
    let inputColorValue = localStorage.getItem('inputColorValue');
    if (!inputColorValue) inputColorValue = '#000000';
    (<HTMLInputElement> this.inputNewCarColor.element).value = inputColorValue;
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
    this.carName = (<HTMLInputElement> this.inputNewCarName.element);
    this.carColor = (<HTMLInputElement> this.inputNewCarColor.element);
    this.countOfNewCars = 0;
    this.updateNameOfCar = (<HTMLInputElement> this.inputChangeCarName.element);
    this.updateColorOfCar = (<HTMLInputElement> this.inputChangeCarColor.element);

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

  clearForm(form: string): void {
    if (form === 'newCar') {
      this.carName.value = '';
      this.carColor.value = '#000000';
      localStorage.setItem('inputNameValue', '');
      localStorage.setItem('inputColorValue', '#000000');
    }
    if (form === 'selectedCar') {
      this.updateNameOfCar.value = '';
      this.updateColorOfCar.value = '#000000';

      const selectedForm = document.querySelector('.selected-car__form');
      if (!selectedForm) throw Error('Selected form not founded');
      for (let i = 0; i < selectedForm.children.length; i++) {
        selectedForm.children[i].setAttribute('disabled', '');
      }
      selectedForm.children[2].classList.add('disabled');
    }
  }

  addNewCar(): void {
    const NewCar = {
      name: this.carName.value,
      color: this.carColor.value,
    };

    createCar(NewCar).then(() => {
      refreshGarage();
      this.clearForm('newCar');
    });
  }

  updateSelectedCar(): void {
    const id = localStorage.getItem('carID');
    if (!id) throw Error('CarID not founded');
    const NewCar = {
      name: this.updateNameOfCar.value,
      color: this.updateColorOfCar.value,
      id,
    };

    updateCar(NewCar).then(() => {
      refreshGarage().then(() => {
        this.clearForm('selectedCar');
        refreshWinners();
      });
    });
  }

  addRandomCars(): void {
    this.countOfNewCars = 100;
    for (let i = 0; i < this.countOfNewCars; i++) {
      createCar(randomCar());
    }
    refreshGarage();
  }

  addEventListeners(): void {
    this.inputNewCarName.element.addEventListener('input', () => {
      const inputValue = (<HTMLInputElement> this.inputNewCarName.element).value;
      localStorage.setItem('inputNameValue', inputValue);
    });

    this.inputNewCarColor.element.addEventListener('input', () => {
      const inputValue = (<HTMLInputElement> this.inputNewCarColor.element).value;
      localStorage.setItem('inputColorValue', inputValue);
    });

    this.submitButtonNewCar.element.addEventListener('click', (e) => {
      if (this.carName.value !== '') {
        e.preventDefault();
        this.addNewCar();
      }
    });

    this.generateCarsButton.element.addEventListener('click', () => {
      this.addRandomCars();
    });

    this.submitButtonSelectedCar.element.addEventListener('click', (e) => {
      if (this.updateNameOfCar.value !== '') {
        e.preventDefault();
        this.updateSelectedCar();
      }
    });
  }
}
