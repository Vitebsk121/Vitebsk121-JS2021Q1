import './card.scss';
import { BaseComponent } from '../baseComponents';
import { renderNewMain } from '../../shared/servise';

export class Card extends BaseComponent {
  private image: BaseComponent;

  private title: BaseComponent;

  constructor(category: string, mode: string, title: string, data: string | { word: string; translation: string; image: string; audioSrc: string; }, url: number) {
    super('div', ['card-container']);
    this.image = new BaseComponent('img', ['card-pic']);
    this.title = new BaseComponent('p', ['card-title']);

    if (category === 'categories') {
      this.renderCategoriesCards(title, Object(data).image);
      this.addEventListener(String(url + 1), mode);
    } else {
      this.renderPlayCards(Object(data), mode);
    }
  }

  renderCategoriesCards(title: string, src: string): void {
    this.image.element.setAttribute('src', src);
    this.title.element.textContent = title;
    this.element.append(this.image.element);
    this.element.append(this.title.element);
  }

  renderPlayCards(data: { [key: string]:string }, mode: string) {
    this.image.element.setAttribute('src', data.image);
    this.title.element.textContent = data.word;
    this.element.append(this.image.element);
    this.element.append(this.title.element);
  }

  addEventListener(catURL: string, mode: string) {
    this.element.addEventListener('click', () => {
      renderNewMain(catURL, mode);
    })
  }
}
