import { BaseComponent } from '../base-component';
import { CarSvg } from '../carSvg/carSvg';
import './winnersField.scss';

export class WinnersField extends BaseComponent {
  constructor() {
    super('div', ['winners-field']);

    const winner = new BaseComponent('div', ['winner__info']);
    this.element.append(winner.element);

    const winnerNuber = new BaseComponent('p', ['winner__info-number'], '1');
    winner.element.append(winnerNuber.element);

    const winnerCar = new BaseComponent('div', ['winner__info-car']);
    const carSVG = () => new CarSvg('blue', winnerCar.element);
    carSVG();
    winner.element.append(winnerCar.element);

    const winnerName = new BaseComponent('p', ['winner__info-name'], 'Mazda CX-5');
    winner.element.append(winnerName.element);

    const winnerWinCount = new BaseComponent('p', ['winner__info-wins'], '14');
    winner.element.append(winnerWinCount.element);

    const winnerBestTime = new BaseComponent('p', ['winner__info-best-time'], '1.06');
    winner.element.append(winnerBestTime.element);
  }
}
