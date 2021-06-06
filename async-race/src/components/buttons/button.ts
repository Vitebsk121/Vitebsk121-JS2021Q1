import { BaseComponent } from '../base-component';
import './button.scss';

export class Button extends BaseComponent {
    constructor(text: string, styleList: string[], urlImage?: string) {
        styleList.unshift('button');
        super('button', styleList, text);
        if (!urlImage) return;
        const buttonInnerImage = new BaseComponent('div', ['button-pic']);
        buttonInnerImage.element.style.backgroundImage = urlImage;
    }
}
