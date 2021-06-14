import { carsList, winnersList } from '../../shared/localDB';
import { getWinnersPageNumber } from '../../shared/winnersNavigation';
import { BaseComponent } from '../base-component';
import { CarSvg } from '../carSvg/carSvg';
import './winnersField.scss';

export class WinnersField extends BaseComponent {
  constructor() {
    super('div', ['winners-field']);
    const cars = carsList();
    const winners = winnersList();
    const fieldLength = 10;
    const endWinnerNum = fieldLength * getWinnersPageNumber();
    const startWinnerNum = endWinnerNum - fieldLength;
    for (let i = startWinnerNum; i < winnersList().length && i < endWinnerNum; i++) {
      let car = cars.filter((car) => +car.id === +winners[i].id );

      const winner = new BaseComponent('div', ['winner__info']);
      this.element.append(winner.element);
  
      const winnerNumber = new BaseComponent('p', ['winner__info-number'], `${i + 1}`);
      winner.element.append(winnerNumber.element);
  
      const winnerCar = new BaseComponent('div', ['winner__info-car']);
      const carSVG = () => new CarSvg(`${car[0].color}`, winnerCar.element);
      carSVG();
      winner.element.append(winnerCar.element);
  
      const winnerName = new BaseComponent('p', ['winner__info-name'], `${car[0].name}`);
      winner.element.append(winnerName.element);
  
      const winnerWinCount = new BaseComponent('p', ['winner__info-wins'], `${winners[i].wins}`);
      winner.element.append(winnerWinCount.element);
  
      const winnerBestTime = new BaseComponent('p', ['winner__info-best-time'], `${(+winners[i].time).toFixed(2)}s`);
      winner.element.append(winnerBestTime.element);
    }
  }
}
