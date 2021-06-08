import { BaseComponent } from '../base-component';
import './winnersTop.scss';

export class WinnersTop extends BaseComponent {
    private winnersCount: BaseComponent;
    private pagesCount: BaseComponent;

    constructor() {
        super('div', ['winners__top']);
        this.winnersCount = new BaseComponent('p', ['winners-count'], 'WINNERS()');
        this.element.append(this.winnersCount.element);

        this.pagesCount = new BaseComponent('p', ['pages-count'], 'Page #');
        this.element.append(this.pagesCount.element);
    }
}