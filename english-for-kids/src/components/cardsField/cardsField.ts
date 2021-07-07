import { getCards, getHeadersOfCards } from '../../shared/server';
import { getMode } from '../../shared/servise';
import { BaseComponent } from '../baseComponents';
import { Card } from '../card/card';
import './cardsField.scss';

export class CardsField extends BaseComponent {
  private card!: Card;

  constructor(category: string) {
    super('div', ['cards-field']);

    if (category === 'Main Page') {
      getHeadersOfCards().then((categories) => {
        categories.forEach((cat) => {
          getCards(cat).then((arrOfCards) => {
            getMode().then((mode) => {
              this.card = new Card(arrOfCards[0], mode, cat);
              this.element.append(this.card.element);
            });
          });
        });
      });
    } else {
      getCards(category).then((arrOfCards) => {
        getMode().then((mode) => {
          arrOfCards.forEach((card) => {
            this.card = new Card(card, mode);
            this.element.append(this.card.element);
          });
        });
      });
    }
  }
}
