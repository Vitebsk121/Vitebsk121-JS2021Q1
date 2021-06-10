import { BaseComponent } from '../base-component';
import { Button } from '../buttons/button';
import './garageFooter.scss';

export class GarageFooter extends BaseComponent {
  private prevPage: Button;
  private nextPage: Button;

  constructor() {
    super('div', ['garage__footer']);

    this.prevPage = new Button('Prev page', ['garage__button', 'disabled']);
    this.nextPage = new Button('Next page', ['garage__button', 'disabled']);

    const GarageFooterServise = (): Promise<void> => new Promise<void>((res) => {
      this.renderGarageFooter();
      res();
    });
    GarageFooterServise().then(() => {
      this.addEventListeners();
    });
  }

  addEventListeners(): void {
    this.prevPage.element.addEventListener('click', () => {
      if (this.prevPage.element.classList.contains('disabled')) return;
    }); 
    this.nextPage.element.addEventListener('click', () => {
      if (this.prevPage.element.classList.contains('disabled')) return;
    }); 
  }

  renderGarageFooter(): void {
    this.element.append(this.prevPage.element);
    this.element.append(this.nextPage.element);
  }
}
