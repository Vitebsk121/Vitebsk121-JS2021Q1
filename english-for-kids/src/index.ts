import { BaseComponent } from './components/baseComponents';
import { Header } from './components/header/header';
import { Navigation } from './components/nav/nav';
import './reset.scss';
import './styles.scss';

export class Page {
  private appWrapper: BaseComponent;
  private nav: Navigation;

    constructor(body: HTMLElement) {
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
        })
    }

    addEventListeners() {
      document.addEventListener('click', (event) => {
        const element = <HTMLElement>event.target;
        if (!element.classList.contains('app__nav')) {
          this.nav.element.classList.remove('active');
        }
      })
    }
  }
  
  window.onload = () => {
    const body = document.querySelector('body');
    if (!body) throw Error('body not found');
    const page = () => new Page(body);
    page();
  };