import { BaseComponent } from '../base-component';
import { Button } from '../buttons/button';
import './garageFooter.scss';

export class GarageFooter extends BaseComponent {
    constructor() {
        super('div', ['garage__footer']);

        const prevPage = new Button('Prev page', ['garage__button']);
        this.element.append(prevPage.element);

        const nextPage = new Button('Next page', ['garage__button']);
        this.element.append(nextPage.element);
    }
}