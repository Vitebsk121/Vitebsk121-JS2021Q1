import './main.scss';
import { BaseComponent } from '../base-component';
import { App } from '../../app';
import { AboutGame } from '../aboutGame/aboutGame';
import { BestScore } from '../bestScore/bestScore';
import { GameSettings } from '../gameSettings/gameSettings';
import { startNewTimer } from '../../gameService';
import { SHOW_TIME } from '../cards-field/cards-field';

export class Main extends BaseComponent {
  private wrapper: BaseComponent;

  private aboutGame: AboutGame;

  private bestScore: BestScore;

  private gameSettings: GameSettings;

  private timer: BaseComponent;

  constructor(view: string) {
    if (view === '') {
      view = 'aboutGame';
    }
    super('main', ['main']);
    this.wrapper = new BaseComponent('div', ['section__wrapper']);
    this.element.append(this.wrapper.element);
    this.aboutGame = new AboutGame();
    this.bestScore = new BestScore();
    this.gameSettings = new GameSettings();
    this.timer = new BaseComponent('div', ['timer']);
    if (view === 'aboutGame') {
      this.wrapper.element.append(this.aboutGame.element);
    }
    if (view === 'bestScore') {
      this.wrapper.element.append(this.bestScore.element);
    }
    if (view === 'game-settings') {
      this.wrapper.element.append(this.gameSettings.element);
    }
    if (view === 'startGame') {
      const appElement = this.wrapper.element;
      if (!appElement) throw Error('App root element not found');
      appElement.innerHTML = '';
      this.element.append(this.timer.element);
      this.timer.element.innerHTML = `
      <p class="timer-minute">00</p>
      <p class="timer-dote">:</p>
      <p class="timer-second">00</p>
      `;
      new App(appElement).start();
      setTimeout(() => startNewTimer(), SHOW_TIME);
    }
  }
}
