import { BaseComponent } from '../base-component';
import './winnersTop.scss';

export class WinnersTop extends BaseComponent {
  private winnersCount: BaseComponent;

  private pagesCount: BaseComponent;

  constructor() {
    super('div', ['winners__top']);
    this.winnersCount = new BaseComponent('p', ['winners-count'], 'Winners (1)');
    this.element.append(this.winnersCount.element);

    this.pagesCount = new BaseComponent('p', ['pages-count'], 'Page #1');
    this.element.append(this.pagesCount.element);
  }
}
