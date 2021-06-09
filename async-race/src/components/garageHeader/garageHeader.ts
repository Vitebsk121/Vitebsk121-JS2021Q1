import { getAllCars } from '../../shared/server';
import { BaseComponent } from '../base-component';
import { Button } from '../buttons/button';
import './garageHeader.scss';

export class GarageHeader extends BaseComponent {
  private garageInfo!: BaseComponent;
  private countOfCar!: BaseComponent;
  private pageNumber!: BaseComponent;
  private startButton!: Button;
  private resetButton!: Button;

  constructor() {
    super('div', ['garage__header']);

    getAllCars().then((data) => {
      const carsCount = data.length;
      const getPageNum = new Promise<number>((res) => {
        const pageNum = localStorage.getItem('page-number');
        if (!pageNum) return;
        res(+pageNum);
      });

      getPageNum.then((pageNum: number) => {
        this.renderGarageHeader(carsCount, pageNum);
      });

    });
  }

  renderGarageHeader(carsNum: number, pageNum: number) {
    this.garageInfo = new BaseComponent('div', ['garage__info']);
    this.element.append(this.garageInfo.element);

    this.countOfCar = new BaseComponent('p', ['info__cars-count'], `Cars in garage (${carsNum})`);
    this.garageInfo.element.append(this.countOfCar.element);

    this.pageNumber = new BaseComponent('p', ['info__page-number'], `Page #${pageNum}`);
    this.garageInfo.element.append(this.pageNumber.element);

    this.startButton = new Button('race', ['garage__button']);
    this.element.append(this.startButton.element);

    this.resetButton = new Button('reset', ['garage__button']);
    this.element.append(this.resetButton.element);
  }
}
