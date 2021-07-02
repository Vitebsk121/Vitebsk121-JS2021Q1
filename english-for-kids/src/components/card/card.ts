import './card.scss';
import { BaseComponent } from '../baseComponents';
import { renderNewMain, setNavistStye } from '../../shared/servise';
import { CardObj } from '../../shared/interfaces';

export class Card extends BaseComponent {
  private image!: BaseComponent;

  private title!: BaseComponent;

  private card!: BaseComponent;

  private rotate!: BaseComponent;

  private cardFront!: BaseComponent;

  private frontMenu!: BaseComponent;

  private cardBack!: BaseComponent;

  private backMenu!: BaseComponent;

  constructor(card: CardObj, mode: string, categoriesName?: string) {
    super('div', ['card-container']);

    if (categoriesName) {
      this.renderCategoriesCards(card, categoriesName);
      this.addEventListener(categoriesName);
    } else {
      this.renderPlayCards(card, mode);
    }
  }

  renderCategoriesCards(card: CardObj, categoriesName: string): void {
    this.image = new BaseComponent('img', ['card-pic']);
    this.title = new BaseComponent('p', ['card-title']);

    this.image.element.setAttribute('src', card.image);
    this.title.element.textContent = categoriesName;
    this.element.append(this.image.element);
    this.element.append(this.title.element);
  }

  renderPlayCards(card: CardObj, mode: string): void {
      this.element.classList.add('game__state');
      this.element.setAttribute('data-word', `${card.word}`)
    if (mode === 'train') {
      this.card = new BaseComponent('div', ['train-card']);
      this.rotate = new BaseComponent('div', ['rotate']);
      this.flipCard(this.rotate.element);
      this.unFlipCard(this.rotate.element);
      
      this.cardFront = new BaseComponent('div', ['train-card__front']);
      this.cardFront.element.style.backgroundImage = `url(${card.image})`;
      this.frontMenu = new BaseComponent('div', ['front__menu'], `${card.word}`);
      this.playAudio(this.cardFront.element, card);

      this.cardBack = new BaseComponent('div', ['train-card__back']);
      this.cardBack.element.style.backgroundImage = `url(${card.image})`;
      this.backMenu = new BaseComponent('div', ['front__menu'], `${card.translation}`);

      this.element.append(this.card.element);
      this.card.element.append(this.cardFront.element, this.cardBack.element);
      this.cardFront.element.append(this.frontMenu.element, this.rotate.element);
      this.cardBack.element.append(this.backMenu.element);
    } else {
      this.element.classList.add('card__play-mode');
    }
  };

  addEventListener(categoriesName: string): void {
    this.element.addEventListener('click', () => {
      setNavistStye(categoriesName);
      renderNewMain(categoriesName);
    });
  };

  flipCard(button: HTMLElement) {
    button.addEventListener('click', () => {
      this.element.classList.add('flipped');
      button.classList.add('hidden');
    });
  };

  unFlipCard(button: HTMLElement) {
    this.element.addEventListener('mouseleave', () => {
      this.element.classList.remove('flipped');
      setTimeout(() => {
        button.classList.remove('hidden');
      }, 100);
    });
  };

  playAudio(elem: HTMLElement, card: CardObj) {
    elem.addEventListener('click', (e) => {
      if ((<HTMLElement>e.target).className === this.rotate.element.className) return;
      new Audio(card.audioSrc).play();
    });
  };
}
