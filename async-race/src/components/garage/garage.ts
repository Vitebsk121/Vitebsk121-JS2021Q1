import { BaseComponent } from '../base-component';
import { GarageHeader } from '../garageHeader/garageHeader';
import { GarageField } from '../garageField/garageField';
import './garage.scss';
import { GarageFooter } from '../garageFooter/garageFooter';
import { getPageNumber } from '../../shared/garageNavigation';
import { getAllCars } from '../../shared/server';

export class Garage extends BaseComponent {
  constructor() {
    super('div', ['garage__main-wrapper']);
    const GarageServise = () => new Promise<number>((res) => {
      getPageNumber();
      res(getPageNumber());
    });
    GarageServise().then((pageNumber) => {
      if (!pageNumber) GarageServise();
      getAllCars().then((cars) => {
        const garageHeader = new GarageHeader(cars, pageNumber);
        this.element.append(garageHeader.element);

        const garageField = new GarageField(cars, pageNumber);
        this.element.append(garageField.element);

        const garageFotter = new GarageFooter(cars);
        this.element.append(garageFotter.element);
      });
    });
  }
}
