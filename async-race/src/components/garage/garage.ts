import { BaseComponent } from '../base-component';
import { GarageHeader } from '../garageHeader/garageHeader';
import { GarageField } from '../garageField/garageField';
import './garage.scss';
import { GarageFooter } from '../garageFooter/garageFooter';

export class Garage extends BaseComponent {
  constructor() {
    super('div', ['garage__main-wrapper']);

    const garageHeader = new GarageHeader();
    this.element.append(garageHeader.element);

    const garageField = new GarageField();
    this.element.append(garageField.element);

    const garageFotter = new GarageFooter();
    this.element.append(garageFotter.element);
  }
}
