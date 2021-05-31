import './logo.scss';
import { BaseComponent } from '../base-component';

export class Logo extends BaseComponent {
  constructor() {
    super('a', ['logo']);
    this.element.innerHTML = `
        <p class="logo__title">Match</p>
        <p class="logo__title logo__subtitle">Match</p>
        `;
  }
}
