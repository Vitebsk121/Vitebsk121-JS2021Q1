import { BaseComponent } from '../base-component';
import { GarageHeader } from '../garageHeader/garageHeader';
import { GarageField } from '../garageField/garageField';
import './garage.scss';
import { GarageFooter } from '../garageFooter/garageFooter';
import { getPageNumber } from '../../shared/garageNavigation';
import { carsList } from '../../shared/localDB';

export class Garage extends BaseComponent {
  constructor() {
    super('div', ['garage__main-wrapper']);
    const GarageServise = () => new Promise<number>((res) => {
      getPageNumber();
      res(getPageNumber());
    });
    GarageServise().then((pageNumber) => {
      if (!pageNumber) GarageServise();
      const garageHeader = new GarageHeader(carsList(), pageNumber);
      this.element.append(garageHeader.element);

      const garageField = new GarageField(carsList(), pageNumber);
      this.element.append(garageField.element);

      const garageFotter = new GarageFooter(carsList());
      this.element.append(garageFotter.element);
    });
  }
}
