import './styles.scss';
import './reset.scss';
import { Header } from './components/header/header';
import { Main } from './components/main/main';
import { setCarsList } from './shared/localDB';

export class Page {
  constructor(body: HTMLElement) {
    const header = new Header();
    body.append(header.element);
    const mainGarage = new Main('garage');
    const mainWinners = new Main('winners');
    body.append(mainGarage.element);
    body.append(mainWinners.element);
  }
}

window.onload = () => {
  setCarsList().then(() => {
    const body = document.querySelector('body');
    if (!body) throw Error('body not found');
    const page = () => new Page(body);
    page();
  });
};
