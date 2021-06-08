import { BaseComponent } from '../base-component';
import { Button } from '../buttons/button';
import { CarSvg } from '../carStyleSvg/carSvg';
import './car.scss';

export class Car extends BaseComponent {
    constructor() {
        super('div', ['car__wrapper']);
        const carMenagmentWrapper = new BaseComponent('div', ['car__menagment']);
        this.element.append(carMenagmentWrapper.element);

        const selectButton = new Button('select', ['car__menagment-button', 'car__button-select']);
        carMenagmentWrapper.element.append(selectButton.element);

        const deleteButton = new Button('delete', ['car__menagment-button', 'car__button-delete']);
        carMenagmentWrapper.element.append(deleteButton.element);

        const carName = new BaseComponent('p', ['car__name'], 'Mazda CX-5');
        carMenagmentWrapper.element.append(carName.element);

        const carControlAndRoadWrapper = new BaseComponent('div', ['road__wrapper']);
        this.element.append(carControlAndRoadWrapper.element);

        const carControllers = new BaseComponent('div', ['car__controllers']);
        carControlAndRoadWrapper.element.append(carControllers.element);

        const startEngineButton = new Button('A', ['engine__button', 'engine-start']);
        carControllers.element.append(startEngineButton.element);

        const stopEngineButton = new Button('B', ['engine__button', 'engine-stop']);
        carControllers.element.append(stopEngineButton.element);

        const road = new BaseComponent('div', ['garage__road']);
        carControlAndRoadWrapper.element.append(road.element);

        const car = new BaseComponent('div', ['car']);
        new CarSvg('blue', car.element);
        road.element.append(car.element);

        const roadFlag = new BaseComponent('div', ['flag']);
        road.element.append(roadFlag.element);
        
    }
}