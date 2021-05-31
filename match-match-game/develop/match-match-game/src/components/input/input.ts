import { BaseComponent } from '../base-component';

export class Input extends BaseComponent {
  constructor(inputID: string, className: string[], type: string, placeholder: string) {
    super('input', className);
    this.element.setAttribute('id', inputID);
    this.element.setAttribute('type', type);
    this.element.setAttribute('placeholder', placeholder);
    this.element.setAttribute('required', 'required');
  }
}
