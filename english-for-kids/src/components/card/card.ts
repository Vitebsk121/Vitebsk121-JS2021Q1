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
    } else if (!categoriesName && mode === 'train') {
      this.renderPlayCardsTrainMode(card);
    } else if (!categoriesName && mode === 'play') {
      this.renderPlayCardsPlayMode(card);
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

  renderPlayCardsTrainMode(card: CardObj): void {
    this.element.classList.add('train__state');
    this.element.setAttribute('data-word', `${card.word}`);

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
  }

  renderPlayCardsPlayMode(card: CardObj): void {
    this.element.classList.add('play__state');
    this.element.setAttribute('data-word', `${card.word}`);
    this.element.style.background = `url(${card.image}) no-repeat center/cover`;
  }

  addEventListener(categoriesName: string): void {
    this.element.addEventListener('click', () => {
      setNavistStye(categoriesName);
      renderNewMain(categoriesName);
    });
  }

  flipCard(button: HTMLElement): void {
    button.addEventListener('click', () => {
      this.element.classList.add('flipped');
      button.classList.add('hidden');
    });
  }

  unFlipCard(button: HTMLElement): void {
    this.element.addEventListener('mouseleave', () => {
      this.element.classList.remove('flipped');
      setTimeout(() => {
        button.classList.remove('hidden');
      }, 100);
    });
  }

  playAudio(elem: HTMLElement, card: CardObj): void {
    elem.addEventListener('click', (e) => {
      if ((<HTMLElement>e.target).className === this.rotate.element.className) return;
      new Audio(card.audioSrc).play();
    });
  }
}
