import './header.scss';
import { BaseComponent } from '../base-component';
import { Logo } from '../logo/logo';
import { Navigation } from '../navigation/navigation';
import { Button } from '../button/button';
import { Avatar } from '../avatar/avatar';

export class Header extends BaseComponent {
  private readonly logo: Logo;

  private readonly nav: Navigation;

  private readonly button: Button;

  private readonly avatar: Avatar;

  constructor() {
    super('header', ['header']);
    this.logo = new Logo();
    this.element.append(this.logo.element);
    this.nav = new Navigation();
    this.element.append(this.nav.element);
    this.button = new Button(['headerButton', 'registration-button'], 'register new player');
    this.element.append(this.button.element);
    this.button = new Button(['headerButton', 'start-game', 'hidden'], 'start game');
    this.element.append(this.button.element);
    this.button = new Button(['headerButton', 'pause-game', 'hidden'], 'pause game');
    this.element.append(this.button.element);
    this.button = new Button(['headerButton', 'unpause-game', 'hidden'], 'unpause game');
    this.element.append(this.button.element);
    this.button = new Button(['headerButton', 'stop-game', 'hidden'], 'stop game');
    this.element.append(this.button.element);
    this.avatar = new Avatar(['avatar', 'hidden']);
    this.element.append(this.avatar.element);
  }
}
