import './button.scss';
import { BaseComponent } from '../base-component';

export class Button extends BaseComponent {
  constructor(className: string[], text: string) {
    className.unshift('button');
    super('button', className);
    this.element.innerText = `${text}`;
  }
}
