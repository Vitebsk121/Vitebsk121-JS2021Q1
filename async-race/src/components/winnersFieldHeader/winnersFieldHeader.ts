import { BaseComponent } from '../base-component';
import './winnersFieldHeader.scss';

export class WinnersFieldHeader extends BaseComponent {
    constructor() {
        super('div', ['field__header']);
        const columnNumber = new BaseComponent('p', ['field__header-title'], 'Number');
        this.element.append(columnNumber.element);
        const columnCar = new BaseComponent('p', ['field__header-title'], 'Car');
        this.element.append(columnCar.element);
        const columnName = new BaseComponent('p', ['field__header-title'], 'Name');
        this.element.append(columnName.element);
        const columnWins = new BaseComponent('p', ['field__header-title', 'field__title-button'], 'Wins');
        this.element.append(columnWins.element);
        const columnBestTime = new BaseComponent('p', ['field__header-title', 'field__title-button'], 'Best time (seconds)');
        this.element.append(columnBestTime.element);
    }
}