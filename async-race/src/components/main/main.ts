import { BaseComponent } from '../base-component';
import { Garage } from '../garage/garage';
import { GarageMenu } from '../garageMenu/garageMenu';
import { GarageMessage } from '../garageMessage/garageMessage';
import { WinnersField } from '../winnersField/winnersField';
import { WinnersFieldHeader } from '../winnersFieldHeader/winnersFieldHeader';
import { WinnersFooter } from '../winnersFooter/winnersFooter';
import { WinnersTop } from '../winnersTop/winnersTop';
import './main.scss';

export class Main extends BaseComponent {
  private mainWrapper: BaseComponent;

  private garageMenuAndMessageWrapper: BaseComponent;

  private garageMenu: GarageMenu;

  private garageMessage: GarageMessage;

  private garage: Garage;

  private winnersTitle: WinnersTop;

  private winnersMain: BaseComponent;

  private winnersFieldHeader: WinnersFieldHeader;

  private winnersField: WinnersField;

  private winnersFooter: WinnersFooter;

  constructor(view: string) {
    super('main', ['main']);

    this.mainWrapper = new BaseComponent('div', ['main__wrapper']);
    this.element.append(this.mainWrapper.element);

    this.garageMenuAndMessageWrapper = new BaseComponent('div', ['garage__top-wrapper']);
    this.garageMenu = new GarageMenu();
    this.garageMessage = new GarageMessage(' ');
    this.garage = new Garage();

    this.winnersTitle = new WinnersTop();
    this.winnersMain = new BaseComponent('div', ['winners__main']);
    this.winnersFieldHeader = new WinnersFieldHeader();
    this.winnersField = new WinnersField();
    this.winnersFooter = new WinnersFooter();

    if (view === 'garage') {
      this.renderGarageView();
    }
    if (view === 'winners') {
      this.renderWinnersView();
    }
  }

  renderGarageView(): void {
    this.element.classList.add('main-garage');
    this.mainWrapper.element.append(this.garageMenuAndMessageWrapper.element);
    this.garageMenuAndMessageWrapper.element.append(this.garageMenu.element);
    this.garageMenuAndMessageWrapper.element.append(this.garageMessage.element);
    this.mainWrapper.element.append(this.garage.element);
  }

  renderWinnersView(): void {
    this.element.classList.add('main-winners');
    this.mainWrapper.element.append(this.winnersTitle.element);
    this.mainWrapper.element.append(this.winnersMain.element);
    this.winnersMain.element.append(this.winnersFieldHeader.element);
    this.winnersMain.element.append(this.winnersField.element);
    this.winnersMain.element.append(this.winnersFooter.element);
  }

  renderNewGarage(): void {
    const garage = this.garage.element;
    const newGarage = new Garage();
    garage.replaceWith(newGarage.element);
  }
}
