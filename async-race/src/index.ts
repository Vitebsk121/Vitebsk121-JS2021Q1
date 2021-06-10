import './styles.scss';
import './reset.scss';
import { Header } from './components/header/header';
import { Main } from './components/main/main';

export class Page {
  constructor(body: HTMLElement) {
    const header = new Header();
    body.append(header.element);
    const main = new Main('garage');
    body.append(main.element);
    main.renderGarageView();
  }
}

window.onload = () => {
  const body = document.querySelector('body');
  if (!body) throw Error('body not found');
  const page = () => new Page(body);
  page();
};
