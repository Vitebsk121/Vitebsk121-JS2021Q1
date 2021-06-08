import { BaseComponent } from '../base-component';
import { Button } from '../buttons/button';
import './winnersFooter.scss';

export class WinnersFooter extends BaseComponent {
  constructor() {
    super('div', ['winners__footer']);
    const prevPage = new Button('Prev page', ['winners__button']);
    this.element.append(prevPage.element);

    const nextPage = new Button('Next page', ['winners__button']);
    this.element.append(nextPage.element);
  }
}
