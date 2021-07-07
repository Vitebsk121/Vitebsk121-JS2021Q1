import { BaseComponent } from '../components/baseComponents';
import { CardObj } from './interfaces';
import { getCards } from './server';

let CardsOnGame: CardObj[];

let currentAudioSrc: string;

let currentWord: string;

let currentChooseCardWord: string;

let wrongAnswer = 0;

function createStar(state: string) {
  const scoreField = document.querySelector('.score-field');
  const star = new BaseComponent('div', ['score-star']);
  if (state === 'right') {
    star.element.style.filter = 'invert(1)';
  }
  scoreField?.append(star.element);
}

function playAudio(audio: string) {
  new Audio(audio).play();
}

function gameFinished() {
  if (wrongAnswer === 0) {
    playAudio('audio/success.mp3');
  } else {
    playAudio('audio/failure.mp3');
  }
  wrongAnswer = 0;
}

function audioControl(): void {
  if (CardsOnGame.length === 0) {
    gameFinished();
  } else {
    const randomNum = Math.floor(Math.random() * CardsOnGame.length);
    const audio = CardsOnGame[randomNum].audioSrc;
    currentAudioSrc = audio;
    currentWord = CardsOnGame[randomNum].word;
    playAudio(audio);
  }
}

function isRightCard(card: HTMLElement) {
  const cardOnDelete: CardObj[] = CardsOnGame.filter((item) => item.word === currentChooseCardWord);
  const indexofCard: number = CardsOnGame.indexOf(cardOnDelete[0]);
  CardsOnGame.splice(indexofCard, 1);
  card.classList.add('right');
  createStar('right');
  playAudio('audio/correct.mp3');
  setTimeout(() => {
    audioControl();
  }, 500);
}

function isWrongCard(card: HTMLElement) {
  createStar('wrong');
  wrongAnswer++;
  playAudio('audio/error.mp3');
  card.classList.add('wrong');
  setTimeout(() => {
    card.classList.remove('wrong');
  }, 300);
}

function checkCard(card: HTMLElement) {
  if (currentWord === currentChooseCardWord) {
    if (card.classList.contains('wrong') || card.classList.contains('right')) return;
    isRightCard(card);
  } else {
    if (card.classList.contains('wrong') || card.classList.contains('right')) return;
    isWrongCard(card);
  }
}

function addEventListenerToCards() {
  const cardsOnField = document.querySelectorAll('.card-container');
  cardsOnField.forEach((card) => {
    card.addEventListener('click', () => {
      const cardValue = (<HTMLElement>card).dataset.word;
      if (!cardValue) return;
      currentChooseCardWord = cardValue;
      checkCard(<HTMLElement>card);
    });
  });
}

function repeatBtnControl() {
  const repeatBtn = document.querySelector('.repeat-btn');
  repeatBtn?.classList.remove('hidden');
  repeatBtn?.addEventListener('click', () => {
    playAudio(currentAudioSrc);
  });
}

export function startGame(category: string): void {
  wrongAnswer = 0;
  repeatBtnControl();
  getCards(category).then((cards) => {
    CardsOnGame = cards;
    audioControl();
    addEventListenerToCards();
  });
}
