import { startGame } from '../../shared/gameServise';
import { BaseComponent } from '../baseComponents';
import { CardsField } from '../cardsField/cardsField';
import { ScoreField } from '../scoreField/scoreField';
import './main.scss';

export class Main extends BaseComponent {
  private scoreField: ScoreField;

  private cardsField: CardsField;

  private gameButton: BaseComponent;

  private repeatButton: BaseComponent;

  private buttonImg: BaseComponent;

  constructor(category: string) {
    super('main', ['app__main']);

    const mode = localStorage.getItem('mode');

    this.cardsField = new CardsField(category);
    this.scoreField = new ScoreField();
    this.gameButton = new BaseComponent('button', ['game-btn'], 'start');
    this.repeatButton = new BaseComponent('button', ['repeat-btn', 'hidden'], 'repeat');
    this.buttonImg = new BaseComponent('img', ['btn-pic']);
    this.buttonImg.element.setAttribute('src', 'icons/repeat.png');
    if (mode === 'train' || category === 'Main Page') {
      this.gameButton.element.classList.add('hidden');
    }
    this.repeatButton.element.append(this.buttonImg.element);
    this.element.append(this.scoreField.element,
      this.cardsField.element,
      this.gameButton.element,
      this.repeatButton.element);
    this.addEventListener(category);
  }

  addEventListener(category: string): void {
    this.gameButton.element.addEventListener('click', () => {
      startGame(category);
      this.gameButton.element.classList.add('hidden');
    });
  }
}
