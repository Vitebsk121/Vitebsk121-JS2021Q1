import { winnersList } from '../../shared/localDB';
import { getWinnersPageNumber } from '../../shared/winnersNavigation';
import { BaseComponent } from '../base-component';
import './winnersTop.scss';

export class WinnersTop extends BaseComponent {
  private winnersCount: BaseComponent;

  private pagesCount: BaseComponent;

  constructor() {
    super('div', ['winners__top']);
    this.winnersCount = new BaseComponent('p', ['winners-count'], `Winners (${winnersList().length})`);
    this.element.append(this.winnersCount.element);

    this.pagesCount = new BaseComponent('p', ['pages-count'], `Page #${getWinnersPageNumber()}`);
    this.element.append(this.pagesCount.element);
  }
}
