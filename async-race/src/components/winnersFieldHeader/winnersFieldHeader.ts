import { refreshWinners } from '../../shared/renderWinners';
import { BaseComponent } from '../base-component';
import './winnersFieldHeader.scss';

export class WinnersFieldHeader extends BaseComponent {
  private columnNumber: BaseComponent;

  private columnCar: BaseComponent;

  private columnName: BaseComponent;

  private columnWins: BaseComponent;

  private columnBestTime: BaseComponent;

  private currentSort!: string | null;

  constructor() {
    super('div', ['field__header']);
    this.columnNumber = new BaseComponent('p', ['field__header-title'], 'Number');
    this.columnCar = new BaseComponent('p', ['field__header-title'], 'Car');
    this.columnName = new BaseComponent('p', ['field__header-title'], 'Name');
    this.columnWins = new BaseComponent('p', ['field__header-title', 'field__title-button'], 'Wins');
    this.columnBestTime = new BaseComponent('p', ['field__header-title', 'field__title-button'],
      'Best time (seconds)');

    const fieldHeadeService = () => new Promise<void>((res) => {
      this.renderWinnersFieldHeader();
      res();
    });
    fieldHeadeService().then(() => {
      this.addEventListeners();
    });
  }

  renderWinnersFieldHeader(): void {
    this.element.append(this.columnNumber.element);
    this.element.append(this.columnCar.element);
    this.element.append(this.columnName.element);
    this.element.append(this.columnWins.element);
    this.element.append(this.columnBestTime.element);
  }

  sort(sortBy: string): void {
    this.currentSort = localStorage.getItem('sort');
    const currentOrder = localStorage.getItem('order');
    if (this.currentSort !== sortBy) {
      localStorage.setItem('sort', sortBy);
      localStorage.setItem('order', 'DESC');
    } else if (currentOrder === 'ASC') {
      localStorage.setItem('order', 'DESC');
    } else {
      localStorage.setItem('order', 'ASC');
    }
  }

  addEventListeners(): void {
    this.columnWins.element.addEventListener('click', () => {
      this.sort('wins');
      refreshWinners();
    });
    this.columnBestTime.element.addEventListener('click', () => {
      this.sort('time');
      refreshWinners();
    });
  }
}
