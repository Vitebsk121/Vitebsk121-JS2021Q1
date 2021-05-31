import { BaseComponent } from '../base-component';
import { Button } from '../button/button';
import './win-frame.scss';

export class WinFrame extends BaseComponent {
  private message: BaseComponent;

  private readonly submitButton: Button;

  constructor() {
    super('div', ['win-frame', 'hidden']);
    this.message = new BaseComponent('p', ['message']);
    this.element.append(this.message.element);
    this.submitButton = new Button(['win-frame__button'], 'ok');
    this.element.append(this.submitButton.element);
  }
}
