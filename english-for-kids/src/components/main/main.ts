import { BaseComponent } from '../baseComponents';
import { CardsField } from '../cardsField/cardsField';
import { ScoreField } from '../scoreField/scoreField';
import './main.scss';

export class Main extends BaseComponent {
  private scoreField: ScoreField;

  private cardsField: CardsField;

  private gameButton: BaseComponent;

  constructor(category: string) {
    super('main', ['app__main']);

    const mode = localStorage.getItem('mode');

    this.cardsField = new CardsField(category);
    this.scoreField = new ScoreField();
    this.gameButton = new BaseComponent('button', ['game-btn'], 'start');
    if (mode === 'train' || category === 'Main Page') {
      this.gameButton.element.classList.add('hidden');
    }
    this.element.append(this.scoreField.element, this.cardsField.element, this.gameButton.element);
  }
}
