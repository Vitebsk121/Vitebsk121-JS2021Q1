import './card.scss';
import { BaseComponent } from '../baseComponents';

export class Card extends BaseComponent {
    private image: BaseComponent;

    private title: BaseComponent;

    constructor(category: string, mode: string) {
        super('div', ['card-container']);
        this.image = new BaseComponent('img', ['card-pic']);
        this.title = new BaseComponent('p', ['card-title']);

        if (category === 'categories') {
            this.renderCategoriesCard();
        }
    }

    renderCategoriesCard() {
        this.image.element.setAttribute('src', 'https://english-for-kids.netlify.app/static/media/dance.c70cc103.jpg');
        this.title.element.textContent = 'Tratata';
        this.element.append(this.image.element);
        this.element.append(this.title.element);
    }
}