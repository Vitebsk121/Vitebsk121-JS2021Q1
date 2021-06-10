import { setNextGarageButtonSettings, setPageNumber, setPrevGarageButtonSettings } from '../../shared/garageNavigation';
import { renderNewGarage } from '../../shared/renderGarage';
import { BaseComponent } from '../base-component';
import { Button } from '../buttons/button';
import './garageFooter.scss';

export class GarageFooter extends BaseComponent {
  private prevPage!: Button;

  private nextPage!: Button;

  constructor(cars: { [key: string]: string; }[]) {
    super('div', ['garage__footer']);
    const countOfPages = Math.ceil(cars.length / 7);
    localStorage.setItem('pages', `${countOfPages}`);
    const GarageFooterServise = (): Promise<void> => new Promise<void>((res) => {
      const nextButtonSettings = setNextGarageButtonSettings();
      const prevButtonSettings = setPrevGarageButtonSettings();
      this.renderGarageFooter(prevButtonSettings, nextButtonSettings);
      res();
    });
    GarageFooterServise().then(() => {
      this.addEventListeners();
    }).catch((error) => {
      throw Error(error);
    });
  }

  addEventListeners(): void {
    this.prevPage.element.addEventListener('click', () => {
      if (this.prevPage.element.classList.contains('disabled')) return;
      setPageNumber(-1);
      renderNewGarage();
    });
    this.nextPage.element.addEventListener('click', () => {
      if (this.nextPage.element.classList.contains('disabled')) return;
      setPageNumber(1);
      renderNewGarage();
    });
  }

  renderGarageFooter(prevButtonSettings: string, nextButtonSettings: string): void {
    this.prevPage = new Button('Prev page', ['garage__button', prevButtonSettings]);
    this.nextPage = new Button('Next page', ['garage__button', nextButtonSettings]);
    this.element.append(this.prevPage.element);
    this.element.append(this.nextPage.element);
  }
}
