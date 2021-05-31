import { BaseComponent } from '../base-component';
import './gameSettings.scss';

export class GameSettings extends BaseComponent {
  private readonly cardsSettings: BaseComponent;

  private readonly difficultySettings: BaseComponent;

  constructor() {
    super('section', ['game-settings']);

    this.cardsSettings = new BaseComponent('div', ['cards-settings']);
    this.element.append(this.cardsSettings.element);
    this.cardsSettings.element.innerHTML = `
        <p class="settings-title">Game cards</p>
        <div>
          <p class="settings-subtitle">select game cards type</p>
          <div class="select-card">
            <div class="select-card-item">
              <p>Star Wars</p>
            </div>
            <div class="select-card-item">
              <p>Fruits</p>
            </div>
            <div class="select-card-item">
              <p>Cartoons</p>
            </div>
          </div>
        `;
    this.difficultySettings = new BaseComponent('div', ['difficulty-settings']);
    this.element.append(this.difficultySettings.element);
    this.difficultySettings.element.innerHTML = `
        <p class="settings-title">Difficulty</p>
        <div>
          <p class="settings-subtitle">select game type</p>
          <div class="select-difficulty">
            <div class="select-difficulty-item">
              <p>4 x 4</p>
            </div>
            <div class="select-difficulty-item">
              <p>6 x 6</p>
            </div>
            <div class="select-difficulty-item">
              <p>8 x 8</p>
            </div>
          </div>
        </div>
        `;
  }
}
