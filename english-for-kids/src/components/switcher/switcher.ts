import { BaseComponent } from '../baseComponents';
import './switcher.scss';

export class Switcher extends BaseComponent {
    constructor() {
        super('div', ['onoffswitch']);

        this.element.innerHTML = `
        <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" tabindex="0" checked>
        <label class="onoffswitch-label" for="myonoffswitch">
            <span class="onoffswitch-inner"></span>
            <span class="onoffswitch-switch"></span>
        </label>
        `;
    }
}