import { BaseComponent } from '../base-component';
import './main.scss';

export class Main extends BaseComponent {
    private mainWrapper: BaseComponent;
    constructor() {
        super('main', ['main']);
        this.mainWrapper = new BaseComponent('div', ['main__wrapper']);
        this.element.append(this.mainWrapper.element);
    }

    renderGarageView() {
        const garageMenuAndMessageWrapper = new BaseComponent('div', ['garage__top-wrapper']);
        this.mainWrapper.element.append('garageMenuAndMessageWrapper');

        // const garageMenu = new garageMenu;

        const garageMessage = new BaseComponent('div', ['garage__message']);
        garageMenuAndMessageWrapper.element.append(garageMessage.element);
    }
}
