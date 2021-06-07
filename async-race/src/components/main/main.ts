import { BaseComponent } from '../base-component';
import { GarageMenu } from '../garageMenu/garageMenu';
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
      const garageMessage = new BaseComponent('div', ['garage__message']);
      garageMenuAndMessageWrapper.element.append(garageMessage.element);
    }
  }
}
