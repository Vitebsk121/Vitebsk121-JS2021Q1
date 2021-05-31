import './navigation.scss';
import { BaseComponent } from '../base-component';

export class Navigation extends BaseComponent {
  constructor() {
    super('nav', ['navigation']);
    this.element.innerHTML = `
    <ul class="nav__list">
        <li class="nav__list-item active">
          <div class="nav_element-icon icon__about"></div>
          <p>About Game</p>
        </li>
        <li class="nav__list-item">
        <div class="nav_element-icon icon__best"></div>
        <p>Best Score</p>
      </li>
      <li class="nav__list-item">
      <div class="nav_element-icon icon__settings"></div>
      <p>Game Settings</p>
    </li>
    </ul>
    `;
  }
}
