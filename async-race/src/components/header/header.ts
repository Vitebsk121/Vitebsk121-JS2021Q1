import { renderMain } from '../../shared/rendering';
import { BaseComponent } from '../base-component';
import { Button } from '../buttons/button';
import './header.scss';

export class Header extends BaseComponent {
  private garageButton: Button;

  private winnersButton: Button;

  testButton: Button;

  constructor() {
    super('header', ['header']);
    const nav = new BaseComponent('nav', ['header_nav']);
    this.garageButton = new Button('Garage', ['header__button']);
    this.winnersButton = new Button('Winners', ['header__button']);

    this.testButton = new Button('TEST', ['header__button']);

    const header = new Promise<void>((res) => {
      this.element.append(nav.element);
      nav.element.append(this.garageButton.element);
      nav.element.append(this.winnersButton.element);
      nav.element.append(this.testButton.element);
      res();
    });
    header.then(() => {
      this.listenersAdd();
    });
  }

  listenersAdd(): void {
    this.garageButton.element.addEventListener('click', () => {
      renderMain('garage');
    });
    this.winnersButton.element.addEventListener('click', () => {
      renderMain('winners');
    });
    this.testButton.element.addEventListener('click', () => {
    });
  }
}
