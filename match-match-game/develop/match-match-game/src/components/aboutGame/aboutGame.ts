import { BaseComponent } from '../base-component';
import './aboutGame.scss';

export class AboutGame extends BaseComponent {
  private readonly sectionTitle: BaseComponent;

  private readonly manual: BaseComponent;

  private readonly manualList: BaseComponent;

  private readonly manualImage: BaseComponent;

  constructor() {
    super('section', ['about-game']);

    this.sectionTitle = new BaseComponent('h3', ['section-title']);
    this.element.append(this.sectionTitle.element);
    this.sectionTitle.element.append('How to play?');
    this.manual = new BaseComponent('div', ['manual']);
    this.element.append(this.manual.element);
    this.manualList = new BaseComponent('div', ['manual__list']);
    this.manual.element.append(this.manualList.element);
    this.manualList.element.innerHTML = `
        <div class="manual__item item-one">
          <p class="manual__item-number">1</p>
          <p class="manual__item-title">Register new player in game</p>
        </div>
        <div class="manual__item item-two">
          <p class="manual__item-number">2</p>
          <p class="manual__item-title">Configure your game settings</p>
        </div>
        <div class="manual__item item-three">
          <p class="manual__item-number">3</p>
          <p class="manual__item-title">
           Start you new game!
           Remember card positions and match it before times up.
          </p>
        </div>
        `;
    this.manualImage = new BaseComponent('div', ['manual__image-list']);
    this.manual.element.append(this.manualImage.element);
    this.manualImage.element.innerHTML = `
        <div class="manual__image-item manual-reg"></div>
        <div class="manual__image-item manual-settings"></div>
        <div class="manual__image-item manual-game"></div>
        `;
  }
}
