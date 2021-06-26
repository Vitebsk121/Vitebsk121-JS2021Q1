import { BaseComponent } from '../baseComponents';
import { BurgerMenu } from '../burgerMenu/burgerMenu';
import './header.scss';

export class Header extends BaseComponent {
    private burgerMenu: BurgerMenu;

    constructor() {
        super('div', ['header']);

        this.burgerMenu = new BurgerMenu('div', ['header__burger'])
        this.element.append(this.burgerMenu.element);
    }
}