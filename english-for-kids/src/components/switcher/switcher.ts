import { switchTheme } from '../../shared/servise';
import { BaseComponent } from '../baseComponents';
import './switcher.scss';

export class Switcher extends BaseComponent {
  constructor() {
    super('div', ['onoffswitch']);
    const switcherService = () => new Promise<void>((res) => {
      this.element.innerHTML = `
      <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" tabindex="0" checked>
      <label class="onoffswitch-label" for="myonoffswitch">
          <span class="onoffswitch-inner"></span>
          <span class="onoffswitch-switch"></span>
      </label>
      `;
      res();
    });
    switcherService().then(() => {
      const switcher = document.getElementById('myonoffswitch');
      switcher?.addEventListener('input', (e) => {
        if ((<HTMLInputElement>e.target).checked) {
          switchTheme('train');
        } else {
          switchTheme('play');
        }
      });
    });
  }
}
