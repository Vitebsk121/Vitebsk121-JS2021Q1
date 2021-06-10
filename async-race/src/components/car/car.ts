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
    this.deleteButton = new Button('delete', ['car__menagment-button', 'car__button-delete']);
    this.carName = new BaseComponent('p', ['car__name'], `${name}`);
    this.carControlAndRoadWrapper = new BaseComponent('div', ['road__wrapper']);
    this.carControllers = new BaseComponent('div', ['car__controllers']);
    this.startEngineButton = new Button('A', ['engine__button', 'engine-start']);
    this.stopEngineButton = new Button('B', ['engine__button', 'engine-stop']);
    this.road = new BaseComponent('div', ['garage__road']);
    this.car = new BaseComponent('div', ['car']);
    this.roadFlag = new BaseComponent('div', ['flag']);

    const carService = () => new Promise<void>((res) =>{
      this.renderCar(color);
      res();
    });
    carService().then(() => {
      this.addEventListeners();
    });
  }

  renderCar(color: string) {
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

  addEventListeners(): void {
    this.selectButton.element.addEventListener('click', () => {
      console.log(this.selectButton.element.id);
    })
  }
}
