import cards from '../../shared/cards';
import { renderNewMain } from '../../shared/servise';
import { BaseComponent } from '../baseComponents';
import './nav.scss';

export class Navigation extends BaseComponent {
  private navList: BaseComponent;

  constructor() {
    super('div', ['app__nav']);

    const nav = new BaseComponent('nav', ['app__menu']);
    this.element.append(nav.element);

    this.navList = new BaseComponent('ul', ['nav__list']);
    nav.element.append(this.navList.element);

    let navListElement = new BaseComponent('li', ['nav__list-item'], `Main Page`);
    this.navList.element.append(navListElement.element);

    for (let i = 0; i < cards[0].length; i++) {
      navListElement = new BaseComponent('li', ['nav__list-item'], `${cards[0][i]}`);
      this.navList.element.append(navListElement.element);
    }
    this.addEventListener();
  }

  addEventListener() {
    this.navList.element.addEventListener('click', (e) => {
      console.log(e.target);
      const navListElements = document.querySelectorAll('.nav__list-item');
      if (Array.from(navListElements).indexOf(<Element>e.target) === 0) {
        renderNewMain('categories', 'train');
      } else if (Array.from(navListElements).indexOf(<Element>e.target) > 0) {
        renderNewMain(`${Array.from(navListElements).indexOf(<Element>e.target)}`, 'train');
      }
    })
  }
}
