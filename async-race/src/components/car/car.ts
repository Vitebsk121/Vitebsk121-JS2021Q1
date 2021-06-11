import { clearGarageSelectedForm, refreshGarage } from '../../shared/renderGarage';
import { deleteCar } from '../../shared/server';
import { BaseComponent } from '../base-component';
import { Button } from '../buttons/button';
import { CarSvg } from '../carSvg/carSvg';
import './car.scss';

export class Car extends BaseComponent {
  private carMenagmentWrapper: BaseComponent;

  private selectButton: Button;

  private deleteButton: Button;

  private carName: BaseComponent;

  private carControlAndRoadWrapper: BaseComponent;

  private carControllers: BaseComponent;

  private startEngineButton: Button;

  private stopEngineButton: Button;

  private road: BaseComponent;

  private car: BaseComponent;

  private roadFlag: BaseComponent;

  constructor(color: string, name: string, id: string) {
    super('div', ['car__wrapper']);

    this.carMenagmentWrapper = new BaseComponent('div', ['car__menagment']);
    this.selectButton = new Button('select', ['car__menagment-button', 'car__button-select'], 'button', id);
    this.deleteButton = new Button('delete', ['car__menagment-button', 'car__button-delete'], 'button', id);
    this.carName = new BaseComponent('p', ['car__name'], `${name}`);
    this.carControlAndRoadWrapper = new BaseComponent('div', ['road__wrapper']);
    this.carControllers = new BaseComponent('div', ['car__controllers']);
    this.startEngineButton = new Button('A', ['engine__button', 'engine-start']);
    this.stopEngineButton = new Button('B', ['engine__button', 'engine-stop']);
    this.road = new BaseComponent('div', ['garage__road']);
    this.car = new BaseComponent('div', ['car']);
    this.roadFlag = new BaseComponent('div', ['flag']);
    this.element.setAttribute('id', id);

    const carService = () => new Promise<void>((res) => {
      this.renderCar(color);
      res();
    });
    carService().then(() => {
      this.addEventListeners();
    });
  }

  renderCar(color: string): void {
    this.element.append(this.carMenagmentWrapper.element);
    this.carMenagmentWrapper.element.append(this.selectButton.element);
    this.carMenagmentWrapper.element.append(this.deleteButton.element);
    this.carMenagmentWrapper.element.append(this.carName.element);
    this.element.append(this.carControlAndRoadWrapper.element);
    this.carControlAndRoadWrapper.element.append(this.carControllers.element);
    this.carControllers.element.append(this.startEngineButton.element);
    this.carControllers.element.append(this.stopEngineButton.element);
    this.carControlAndRoadWrapper.element.append(this.road.element);
    const carSVG = () => new CarSvg(`${color}`, this.car.element);
    carSVG();
    this.road.element.append(this.car.element);
    this.road.element.append(this.roadFlag.element);
  }

  clearCarsStyle(): void {
    const cars = document.querySelectorAll(`.${this.element.className}`);
    cars.forEach((item) => {
      item.classList.remove('active');
    });
  }

  setSelectedCarStyle(): void {
    this.clearCarsStyle();
    this.element.classList.add('active');
  }

  setFormActiveStyle(): void {
    const form = document.querySelector('.selected-car__form');
    if (!form) throw Error(`Selected form not founded, ${this.element.className}`);
    for (let i = 0; i < form.children.length; i++) {
      form.children[i].removeAttribute('disabled');
      form.children[i].classList.remove('disabled');
    }
  }

  deleteSelectedCar(id: string): void {
    deleteCar(id).then(() => {
      refreshGarage();
    }).catch((e) =>{
      console.log(e);
    });
  }

  addEventListeners(): void {
    this.selectButton.element.addEventListener('click', () => {
      localStorage.setItem('carID', this.element.id);
      this.setSelectedCarStyle();
      this.setFormActiveStyle();
    });
    this.deleteButton.element.addEventListener('click', () => {
      this.deleteSelectedCar(this.element.id);
      clearGarageSelectedForm();
    });
  }
}
