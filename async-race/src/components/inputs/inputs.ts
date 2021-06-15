import { BaseComponent } from '../base-component';
import './inputs.scss';

export class Input extends BaseComponent {
  constructor(styleList: string[] = [], placeholder = '', type = 'text') {
    super('input', styleList);
    this.element.setAttribute('placeholder', placeholder);
    this.element.setAttribute('type', type);
    this.element.setAttribute('required', 'required');
  }
}
