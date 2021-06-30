import { BaseComponent } from './components/baseComponents';
import { Header } from './components/header/header';
import { Navigation } from './components/nav/nav';
import './reset.scss';
import { closeNav } from './shared/servise';
import './styles.scss';

export class Page {
  private page: HTMLElement;

  private appWrapper: BaseComponent;

  private nav: Navigation;

  constructor(body: HTMLElement) {
    this.page = body;
    this.appWrapper = new BaseComponent('div', ['app__wrapper']);
    const header = new Header();
    this.nav = new Navigation();
    const pageService = () => new Promise<void>((res) => {
      body.append(this.appWrapper.element);
      this.appWrapper.element.append(header.element);
      this.appWrapper.element.append(this.nav.element);
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
            || element.classList.contains('burger__line')) return;
      closeNav();
    });
  }
}

window.onload = () => {
  const body = document.querySelector('body');
  if (!body) throw Error('body not found');
  const page = () => new Page(body);
  page();
};
