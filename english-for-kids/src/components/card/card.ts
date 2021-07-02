import './card.scss';
import { BaseComponent } from '../baseComponents';
import { renderNewMain } from '../../shared/servise';
import { CardObj } from '../../shared/interfaces';

export class Card extends BaseComponent {
  private image: BaseComponent;

  private title: BaseComponent;

  constructor(card: CardObj, mode: string, categoriesName?: string) {
    super('div', ['card-container']);
    this.image = new BaseComponent('img', ['card-pic']);
    this.title = new BaseComponent('p', ['card-title']);

    if (categoriesName) {
      this.renderCategoriesCards(card, categoriesName);
      this.addEventListener(categoriesName);
    } else {
      this.renderPlayCards(card, mode);
    }
  }

  renderCategoriesCards(card: CardObj, categoriesName: string): void {
    this.image.element.setAttribute('src', card.image);
    this.title.element.textContent = categoriesName;
    this.element.append(this.image.element);
    this.element.append(this.title.element);
  }

  renderPlayCards(card: CardObj, mode: string): void {
    this.image.element.setAttribute('src', card.image);
    this.title.element.textContent = card.word;
    this.element.append(this.image.element);
    this.element.append(this.title.element);
  }

  addEventListener(categoriesName: string): void {
    this.element.addEventListener('click', () => {
      renderNewMain(categoriesName);
    });
  }
}
