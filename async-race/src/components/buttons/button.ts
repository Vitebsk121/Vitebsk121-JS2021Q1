import { BaseComponent } from '../base-component';
import './button.scss';

export class Button extends BaseComponent {
  constructor(text: string, styleList: string[], type = 'button', id = '') {
    styleList.unshift('button');
    super('button', styleList, text);
    this.element.setAttribute('type', type);
    this.element.setAttribute('id', id);
  }
}
