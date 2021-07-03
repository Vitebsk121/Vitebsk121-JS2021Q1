import { BaseComponent } from '../baseComponents';
import './scoreField.scss';

export class ScoreField extends BaseComponent {
    constructor() {
        super('div', ['score-field']);
    }
}