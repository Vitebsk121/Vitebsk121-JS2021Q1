import { BaseComponent } from '../base-component';
import { Button } from '../buttons/button';
import './header.scss';

export class Header extends BaseComponent {
  constructor() {
    super('header', ['header']);
    const nav = new BaseComponent('nav', ['header_nav']);
    this.element.append(nav.element);
    const garageButton = new Button('Garage', ['header__button']);
    const winnersButton = new Button('Winners', ['header__button']);
    nav.element.append(garageButton.element);
    nav.element.append(winnersButton.element);
    this.listenersAdd();
  }

  listenersAdd() {
    const headerButtons = document.querySelectorAll('.header__button');
    console.log(headerButtons);
    headerButtons.forEach((button) => button.addEventListener('click', () => {
      console.log(button);
    }))
  }
}
