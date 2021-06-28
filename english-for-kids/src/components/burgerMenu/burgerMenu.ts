import { openCloseNav } from '../../shared/servise';
import { BaseComponent } from '../baseComponents';
import './burgerMenu.scss';

export class BurgerMenu extends BaseComponent {
    lineOne: BaseComponent;
    lineTwo: BaseComponent;
    lineThree: BaseComponent;

    constructor(tag: keyof HTMLElementTagNameMap = 'div', styleList: string[] = []) {
        super(tag, styleList);

        this.lineOne = new BaseComponent('div', ['burger__line', 'first']);
        this.lineTwo = new BaseComponent('div', ['burger__line', 'second']);
        this.lineThree = new BaseComponent('div', ['burger__line', 'third']);

        const burgerService = () => new Promise<void>((res) => {
            this.renderBurger();
            res();
        });
        burgerService().then(() => {
            this.addEventListeners();
        })

    }

    addEventListeners() {
        this.element.addEventListener('click', () => {
            openCloseNav();
        })
    }

    renderBurger() {
        this.element.append(this.lineOne.element);
        this.element.append(this.lineTwo.element);
        this.element.append(this.lineThree.element);
    }
}