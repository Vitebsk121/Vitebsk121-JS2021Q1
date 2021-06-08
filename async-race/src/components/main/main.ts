import { BaseComponent } from '../base-component';
import { Garage } from '../garage/garage';
import { GarageMenu } from '../garageMenu/garageMenu';
import { GarageMessage } from '../garageMessage/garageMessage';
import { WinnersField } from '../winnersField/winnersField';
import { WinnersFieldHeader } from '../winnersFieldHeader/winnersFieldHeader';
import { WinnersTop } from '../winnersTiop/winnersTop';
import './main.scss';

export class Main extends BaseComponent {
  constructor(view: string) {
    super('main', ['main']);
    const mainWrapper = new BaseComponent('div', ['main__wrapper']);
    this.element.append(mainWrapper.element);
    if (view === 'garage') {
      const garageMenuAndMessageWrapper = new BaseComponent('div', ['garage__top-wrapper']);
      mainWrapper.element.append(garageMenuAndMessageWrapper.element);
      const garageMenu = new GarageMenu();
      garageMenuAndMessageWrapper.element.append(garageMenu.element);
      const garageMessage = new GarageMessage('Garage message');
      garageMenuAndMessageWrapper.element.append(garageMessage.element);
      const garage = new Garage();
      mainWrapper.element.append(garage.element);
    }
    if (view === 'winners') {
      const winnersTitle = new WinnersTop();
      mainWrapper.element.append(winnersTitle.element);

      const winnersMain = new BaseComponent('div', ['winners__main']);
      mainWrapper.element.append(winnersMain.element);
      const winnersFieldHeader = new WinnersFieldHeader();
      winnersMain.element.append(winnersFieldHeader.element);
      const winnersField = new WinnersField();
      winnersMain.element.append(winnersField.element);
      // const winnersFooter = new WinnersFooter();
      // winnersMain.element.append(winnersFooter.element);
    }
  }
}
