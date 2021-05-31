import './style.scss';
import './reset.scss';
import { Header } from './components/header/header';
import { Main } from './components/main/main';
import { service } from './servise';
import { BaseComponent } from './components/base-component';
import { Registration } from './components/registration/registration';
import { WinFrame } from './components/win-frame/win-frame';

export class Page {
  private readonly wrapper: BaseComponent;

  private readonly registration: Registration;

  private readonly header: Header;

  private readonly main: Main;

  private readonly winFrame: WinFrame;

  constructor(private readonly rootElement: HTMLElement) {
    this.wrapper = new BaseComponent('div', ['wrapper']);
    this.rootElement.append(this.wrapper.element);
    this.registration = new Registration();
    this.rootElement.append(this.registration.element);
    this.winFrame = new WinFrame();
    this.rootElement.append(this.winFrame.element);
    this.header = new Header();
    this.wrapper.element.append(this.header.element);
    this.main = new Main('');
    this.wrapper.element.append(this.main.element);
  }
}

window.onload = () => {
  const page = document.querySelector('body');
  if (!page) throw Error('App root element not found');
  new Page(page);
  service();
};
