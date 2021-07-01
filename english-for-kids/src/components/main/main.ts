import { BaseComponent } from '../baseComponents';
import { Card } from '../card/card';
import './main.scss';

export class Main extends BaseComponent {
  private card: Card;

  constructor(category: string, mode: string) {
    super('main', ['app__main']);

    this.card = new Card(category, mode);
    this.element.append(this.card.element);
  }
}
