import { setCardsFieldStyle } from '../../gameService';
import { delay } from '../../shared/delay';
import { BaseComponent } from '../base-component';
import { Card } from '../card/card';
import { CardsField } from '../cards-field/cards-field';

const FLIP_DELAY = 2000;
export let countOfcomparison = 0;
export let countOfFailcomparison = 0;

export class Game extends BaseComponent {
  private readonly cardsField: CardsField;

  private activeCard?: Card;

  private isAnimation = false;

  constructor() {
    super();
    this.cardsField = setCardsFieldStyle();
    this.element.appendChild(this.cardsField.element);
    countOfcomparison = 0;
    countOfFailcomparison = 0;
  }

  newGame(images: string[]): void {
    this.cardsField.clear();
    const cards = images
      .concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);

    cards.forEach((card) => card.element.addEventListener('click', () => this.cardHandler(card)));

    this.cardsField.addCards(cards);
  }

  private async cardHandler(card: Card) {
    if (this.isAnimation) return;
    if (!card.isFlipped) return;
    this.isAnimation = true;
    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard.image !== card.image) {
      this.activeCard.element.classList.add('card-non-success');
      card.element.classList.add('card-non-success');
      await delay(FLIP_DELAY);
      this.activeCard.element.classList.remove('card-non-success');
      card.element.classList.remove('card-non-success');
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
      countOfFailcomparison += 1;
    } else {
      this.activeCard.element.classList.add('card-success');
      card.element.classList.add('card-success');
      countOfcomparison += 1;
    }

    this.activeCard = undefined;
    this.isAnimation = false;
  }
}
