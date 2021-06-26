import { BaseComponent } from './components/baseComponents';
import { Header } from './components/header/header';
import './reset.scss';
import './styles.scss';

export class Page {
    constructor(body: HTMLElement) {
        const header = new Header();
        body.append(header.element);
    }
  }
  
  window.onload = () => {
    const body = document.querySelector('body');
    if (!body) throw Error('body not found');
    const page = () => new Page(body);
    page();
  };