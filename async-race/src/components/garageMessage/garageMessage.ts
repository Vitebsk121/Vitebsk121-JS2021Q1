import { BaseComponent } from '../base-component';
import './garageMessage.scss';

export class GarageMessage extends BaseComponent {
  private message: BaseComponent;

  constructor(innerText = '') {
    super('div', ['garage__message']);
    this.message = new BaseComponent('p', ['garage__message-text'], innerText);
    this.element.append(this.message.element);
  }

  show(): void {
    this.message.element.style.display = 'block';
  }

  hide(): void {
    this.message.element.style.display = 'hidden';
  }
}
