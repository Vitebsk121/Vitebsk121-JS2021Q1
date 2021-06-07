import { BaseComponent } from '../base-component';
import { GarageField } from '../garageField/garageField';
import { GarageHeader } from '../garageHeader/garageHeader';
import './garage.scss';

export class Garage extends BaseComponent {

    constructor() {
        super('div', ['garage__main-wrapper']);

        const garageHeader = new GarageHeader();
        this.element.append(garageHeader.element);

        const garageField = new GarageField();
        this.element.append(garageField.element);

        // const garageFotter = new BaseComponent();
        // this.element.append(garageFotter.element);
    }
}