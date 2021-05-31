import './cards-field.scss';
import { BaseComponent } from '../base-component';
import { Card } from '../card/card';

export const SHOW_TIME = 3000;

export class CardsField extends BaseComponent {
  private cards: Card[] = [];

  constructor(cardsFieldStyle: string[]) {
    super('div', cardsFieldStyle);
  }

  clear(): void {
    this.cards = [];
    this.element.innerHTML = '';
  }

  addCards(cards: Card[]): void {
    this.cards = cards;
    this.cards.forEach((card) => this.element.append(card.element));
    setTimeout(() => {
      this.cards.forEach((card) => card.flipToBack());
    }, SHOW_TIME);
  }
}
