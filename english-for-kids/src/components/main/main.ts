import { getCards, getHeadersOfCards } from '../../shared/server';
import { getMode } from '../../shared/servise';
import { BaseComponent } from '../baseComponents';
import { Card } from '../card/card';
import { CardsField } from '../cardsField/cardsField';
import { ScoreField } from '../scoreField/scoreField';
import './main.scss';

export class Main extends BaseComponent {
  private scoreField: ScoreField;
  private cardsField: CardsField;
  private gameButton: BaseComponent;


  constructor(category: string) {
    super('main', ['app__main']);

    this.cardsField = new CardsField(category);
    this.scoreField = new ScoreField();
    this.gameButton = new BaseComponent('button', ['game-btn'], 'start');
    this.element.append(this.scoreField.element, this.cardsField.element, this.gameButton.element);
  }
}
