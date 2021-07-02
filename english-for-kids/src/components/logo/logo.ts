import { renderNewMain, setNavistStye } from '../../shared/servise';
import { BaseComponent } from '../baseComponents';
import './logo.scss';

export class Logo extends BaseComponent {
  constructor() {
    super('h1', ['header__logo', 'rainbow-animated'], 'English For Kids');
    this.addEventListener();
  };

  addEventListener() {
    this.element.addEventListener('click', () => {
      renderNewMain('Main Page');
      setNavistStye('Main Page');
    });
  }
}
