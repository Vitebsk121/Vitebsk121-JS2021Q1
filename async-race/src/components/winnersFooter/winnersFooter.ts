import { winnersList } from '../../shared/localDB';
import { refreshWinners } from '../../shared/renderWinners';
import { setNextWinnersButtonSettings, setPrevWinnersButtonSettings, setWinnersPageNumber } from '../../shared/winnersNavigation';
import { BaseComponent } from '../base-component';
import { Button } from '../buttons/button';
import './winnersFooter.scss';

export class WinnersFooter extends BaseComponent {
  private prevPage!: Button;
  private nextPage!: Button;
  constructor() {
    super('div', ['winners__footer']);

    const countOfPages = Math.ceil(winnersList().length / 10);
    localStorage.setItem('winners-pages', `${countOfPages}`);

    const winnersFooterService = () => new Promise<void>((res) => {
      const nextButtonSettings = setNextWinnersButtonSettings();
      const prevButtonSettings = setPrevWinnersButtonSettings();
      this.renderWinnersFooter(prevButtonSettings, nextButtonSettings);
      res();
    });
    winnersFooterService()
    .then(() => {
      this.addEventListeners();
    });

  }

  renderWinnersFooter(prevButtonSettings: string, nextButtonSettings: string): void {
    this.prevPage = new Button('Prev page', ['winners__button', prevButtonSettings]);
    this.nextPage = new Button('Next page', ['winners__button', nextButtonSettings]);
    this.element.append(this.prevPage.element);
    this.element.append(this.nextPage.element);
  }

  addEventListeners(): void {
    this.prevPage.element.addEventListener('click', () => {
      if (this.prevPage.element.classList.contains('disabled')) return;
      setWinnersPageNumber(-1);
      refreshWinners();
    });
    this.nextPage.element.addEventListener('click', () => {
      if (this.nextPage.element.classList.contains('disabled')) return;
      setWinnersPageNumber(1);
      refreshWinners();
    });
  }
}
