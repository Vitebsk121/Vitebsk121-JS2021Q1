import { Game } from './components/game/game';
import { setDifficulty, setTypeOfCards } from './gameService';
import { ImageCategoryModel } from './models/image-category-model';

export class App {
  private readonly game: Game;

  constructor(private readonly rootElement: HTMLElement) {
    this.game = new Game();
    this.rootElement.append(this.game.element);
  }

  async start(): Promise<void> {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cat = categories[setTypeOfCards()];
    const images: string[] = [];
    const difficulty = setDifficulty();
    let quantity = 0;
    if (difficulty === 0) quantity = 8;
    if (difficulty === 1) quantity = 18;
    if (difficulty === 2) quantity = 32;
    for (let i = 0; i < quantity; i++) {
      images.push(`${cat.category}/${cat.images[i]}`);
    }
    this.game.newGame(images);
  }
}
