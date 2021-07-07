import { BaseComponent } from '../baseComponents';
import { BurgerMenu } from '../burgerMenu/burgerMenu';
import { Logo } from '../logo/logo';
import { Switcher } from '../switcher/switcher';
import './header.scss';

export class Header extends BaseComponent {
  private burgerMenu: BurgerMenu;

  private logo: Logo;

  private switcher: Switcher;

  constructor() {
    super('header', ['header']);

    this.burgerMenu = new BurgerMenu('div', ['header__burger']);
    this.element.append(this.burgerMenu.element);

    this.logo = new Logo();
    this.element.append(this.logo.element);

    this.switcher = new Switcher();
    this.element.append(this.switcher.element);
  }
}
