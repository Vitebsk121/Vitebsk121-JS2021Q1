import { BaseComponent } from '../base-component';
import { GarageHeader } from '../garageHeader/garageHeader';
import { GarageField } from '../garageField/garageField';
import './garage.scss';
import { GarageFooter } from '../garageFooter/garageFooter';
import { setPageNumber } from '../../shared/garageStorage';

export class Garage extends BaseComponent {
  constructor() {
    super('div', ['garage__main-wrapper']);
    const setPageNum = new Promise<void>((res) => {
      setPageNumber();
      res();
    });
    setPageNum.then(() => {
      const pageNumber = localStorage.getItem('page-number');
      if (!pageNumber) return;
      const garageHeader = new GarageHeader();
      this.element.append(garageHeader.element);

      const garageField = new GarageField(+pageNumber);
      this.element.append(garageField.element);

      const garageFotter = new GarageFooter();
      this.element.append(garageFotter.element);
    });
  }
}
