import { getHeadersOfCards } from '../../shared/server';
import { renderNewMain } from '../../shared/servise';
import { BaseComponent } from '../baseComponents';
import './nav.scss';

export class Navigation extends BaseComponent {
  private navList: BaseComponent;

  private navListElement: BaseComponent;

  constructor() {
    super('div', ['app__nav']);

    const nav = new BaseComponent('nav', ['app__menu']);
    this.element.append(nav.element);

    this.navList = new BaseComponent('ul', ['nav__list']);
    nav.element.append(this.navList.element);

    this.navListElement = new BaseComponent('li', ['nav__list-item'], 'Main Page');
    this.navList.element.append(this.navListElement.element);
    this.addEventListener('categories');

    getHeadersOfCards().then((headers) => {
      for (let i = 0; i < headers.length; i++) {
        this.navListElement = new BaseComponent('li', ['nav__list-item'], `${headers[i]}`);
        this.navList.element.append(this.navListElement.element);
        this.addEventListener(headers[i]);
      }
    });
  }

  addEventListener(category: string): void {
    this.navListElement.element.addEventListener('click', () => {
      renderNewMain(category);
    });
  }
}
