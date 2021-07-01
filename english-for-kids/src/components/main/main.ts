import cards from '../../shared/cards';
import { BaseComponent } from '../baseComponents';
import { Card } from '../card/card';
import './main.scss';

export class Main extends BaseComponent {
  private card!: Card;

  constructor(category: string, mode: string) {
    super('main', ['app__main']);

    if (category === 'categories') {
      for (let i = 0; i < cards[0].length; i++) {
        const title = String(cards[0][i]);
        this.card = new Card(category, mode, title, cards[i+1][0], i);
        this.element.append(this.card.element);
      }
    } else {
      for (let i = 0; i < cards[+category].length; i++) {
        const title = String(Object(cards[+category][i]).word);
        this.card = new Card(category, mode, title, cards[+category][i], i);
        this.element.append(this.card.element);
      }
    }
  }
}
