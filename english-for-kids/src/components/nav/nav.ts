import { BaseComponent } from '../baseComponents';
import './nav.scss';

export class Navigation extends BaseComponent {
    constructor() {
        super('div', ['app__nav']);
    }
}