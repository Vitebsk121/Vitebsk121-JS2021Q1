import { BaseComponent } from '../base-component';
import { Button } from '../buttons/button';
import './garageHeader.scss';

export class GarageHeader extends BaseComponent {
  constructor() {
    super('div', ['garage__header']);

    const garageInfo = new BaseComponent('div', ['garage__info']);
    this.element.append(garageInfo.element);

    const countOfCar = new BaseComponent('p', ['info__cars-count'], 'Cars in garage (1)');
    garageInfo.element.append(countOfCar.element);

    const pageNumber = new BaseComponent('p', ['info__page-number'], 'Page #1');
    garageInfo.element.append(pageNumber.element);

    const startButton = new Button('race', ['garage__button']);
    this.element.append(startButton.element);

    const resetButton = new Button('reset', ['garage__button']);
    this.element.append(resetButton.element);
  }
}
