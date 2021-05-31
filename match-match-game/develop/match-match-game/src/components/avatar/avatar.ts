import './avatar.scss';
import { BaseComponent } from '../base-component';

export class Avatar extends BaseComponent {
  constructor(className: string[]) {
    className.unshift('avatar');
    super('div', className);
  }
}
