import { renderMain } from '../../shared/rendering';
import { BaseComponent } from '../base-component';
import { Button } from '../buttons/button';
import './header.scss';

export class Header extends BaseComponent {
  private garageButton: Button;

  private winnersButton: Button;

  constructor() {
    super('header', ['header']);
    const nav = new BaseComponent('nav', ['header_nav']);
    this.garageButton = new Button('Garage', ['header__button']);
    this.winnersButton = new Button('Winners', ['header__button']);

    const header = new Promise<void>((res) => {
      this.element.append(nav.element);
      nav.element.append(this.garageButton.element);
      nav.element.append(this.winnersButton.element);
      res();
    });
    header.then(() => {
      this.listenersAdd();
    });
  }

  listenersAdd(): void {
    this.garageButton.element.addEventListener('click', () => {
      const garageMain = document.querySelector('.main-garage');
      const carWrapper = document.querySelectorAll('.car__wrapper');
      garageMain?.classList.remove('main-hidden');
      carWrapper.forEach((item) => item.classList.remove('car__wrapper-hidden'));
    });
    
    this.winnersButton.element.addEventListener('click', () => {
      const garageMain = document.querySelector('.main-garage');
      const carWrapper = document.querySelectorAll('.car__wrapper');
      garageMain?.classList.add('main-hidden');
      carWrapper.forEach((item) => item.classList.add('car__wrapper-hidden'));
    });
  }
}
