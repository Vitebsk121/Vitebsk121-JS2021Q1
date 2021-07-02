import { BaseComponent } from './components/baseComponents';
import { Header } from './components/header/header';
import { Main } from './components/main/main';
import { Navigation } from './components/nav/nav';
import './reset.scss';
import { closeNav } from './shared/servise';
import './styles.scss';

export class Page {
  private page: HTMLElement;

  private appWrapper: BaseComponent;

  private nav: Navigation;

  private main: Main;

  constructor(body: HTMLElement) {
    this.page = body;
    this.appWrapper = new BaseComponent('div', ['app__wrapper']);
    const header = new Header();
    this.nav = new Navigation();
    this.main = new Main('Main Page');
    const pageService = () => new Promise<void>((res) => {
      body.append(this.appWrapper.element);
      this.appWrapper.element.append(header.element);
      body.append(this.nav.element);
      this.appWrapper.element.append(this.main.element);
      res();
    });
    pageService().then(() => {
      this.addEventListeners();
    });
  }

  addEventListeners(): void {
    this.page.addEventListener('click', (event) => {
      const element = <HTMLElement>event.target;
      if (element.classList.contains('app__nav')
            || element.classList.contains('header__burger')
            || element.classList.contains('burger__line')
            || element.classList.contains('nav__list')
            || element.classList.contains('app__nav')) return;
      closeNav();
    });
  }
}

window.onload = () => {
  localStorage.setItem('mode', 'train');
  const body = document.querySelector('body');
  if (!body) throw Error('body not found');
  const page = () => new Page(body);
  page();
};
