import cards from '../modules/cards';
import { CardObj } from './interfaces';

export async function getHeadersOfCards(): Promise<string[]> {
  const headersOfCategories: string[] = [];
  cards[0].forEach((item) => { headersOfCategories.push(String(item)); });
  return headersOfCategories;
}

export async function getCards(category: string): Promise<CardObj[]> {
  const headers = getHeadersOfCards();
  const indexOfCategory = (await headers).indexOf(category) + 1;
  const arrayOfCards: CardObj [] = [];
  cards[indexOfCategory].forEach((item) => {
    if (typeof item === 'string') {
      throw Error('Вы нашли баг');
    } else {
      arrayOfCards.push(item);
    }
  });
  return arrayOfCards;
}
