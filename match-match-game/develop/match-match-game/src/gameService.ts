import { CardsField } from './components/cards-field/cards-field';
import { countOfcomparison, countOfFailcomparison } from './components/game/game';
import { winGame } from './servise';
import { getScore } from './shared/score';
import { updateScore } from './shared/users';

let typeOfCards = 0;
let typeOfDifficulty = 0;
let timerID: NodeJS.Timeout;
let mainTimer = 0;
export let gameMinutOfTimer = 0;

export function getGameSettings(): void {
  const cardsType = document.querySelector('.card-item__active');
  const arrOfCardstype = document.querySelectorAll('.select-card-item');
  arrOfCardstype.forEach((item) => {
    if (item === cardsType) {
      typeOfCards = Array.from(arrOfCardstype).indexOf(item);
    }
  });
  const difficultyType = document.querySelector('.difficulty-item__active');
  const arrOfdifficultyType = document.querySelectorAll('.select-difficulty-item');
  arrOfdifficultyType.forEach((item) => {
    if (item === difficultyType) {
      typeOfDifficulty = Array.from(arrOfdifficultyType).indexOf(item);
    }
  });
}

export function setTypeOfCards(): number {
  return typeOfCards;
}

export function setDifficulty(): number {
  return typeOfDifficulty;
}

export function setCardsStyle(): string {
  if (setDifficulty() === 0) {
    return 'card card-one';
  } if (setDifficulty() === 1) {
    return 'card card-two';
  } if (setDifficulty() === 2) {
    return 'card card-three';
  }
  return 'card';
}

export function setCardsFieldStyle(): CardsField {
  if (setDifficulty() === 0) {
    return new CardsField(['cards-field', 'cards-field-one']);
  } if (setDifficulty() === 1) {
    return new CardsField(['cards-field', 'cards-field-two']);
  } if (setDifficulty() === 2) {
    return new CardsField(['cards-field', 'cards-field-three']);
  }
  return new CardsField(['cards-field']);
}

export function startTimer(): void {
  const startTime = new Date().getTime() - mainTimer;
  const minute = document.querySelector('.timer-minute');
  if (!minute) return;
  const second = document.querySelector('.timer-second');
  if (!second) return;
  const prefix = '0';
  timerID = setInterval(() => {
    const cureentTime = new Date().getTime();
    mainTimer = new Date(cureentTime - startTime).getTime();
    const newMinute = String(new Date(mainTimer).getMinutes());
    const newSecond = String(new Date(mainTimer).getSeconds());
    if (new Date(mainTimer).getSeconds() < 10) {
      second.innerHTML = `${prefix}${newSecond}`;
    } else {
      second.innerHTML = newSecond;
    }
    if (new Date(mainTimer).getMinutes() < 10) {
      minute.innerHTML = `${prefix}${newMinute}`;
    } else {
      minute.innerHTML = newMinute;
    }
  }, 1000);
}

export function pauseTimer(): void {
  clearInterval(timerID);
}

export function unPauseTimer(): void {
  startTimer();
}

export function clearTimer(): void {
  mainTimer = 0;
}

export function startNewTimer(): void {
  clearTimer();
  startTimer();
}

export function pauseGame(): void {
  const cardsField = document.querySelector('.cards-field');
  if (!cardsField) throw Error('Cards Field not founded');
  cardsField.classList.add('cards-field-pause');
  pauseTimer();
}

export function unPauseGame(): void {
  const cardsField = document.querySelector('.cards-field');
  if (!cardsField) throw Error('Cards Field not founded');
  cardsField.classList.remove('cards-field-pause');
  unPauseTimer();
}

export function setNewMessageInWonFrame(): void {
  const message = document.querySelector('.message');
  (<HTMLElement>message).innerText = `
  Congratulations! You successfully 
  found all matches on ${gameMinutOfTimer} minutes.
  `;
}

export function stopGame(): void {
  const finalSecondofTimer = mainTimer / 1000;
  gameMinutOfTimer = Number((finalSecondofTimer / 60).toFixed(1));
  clearInterval(winGame);
  pauseTimer();
  updateScore(getScore(finalSecondofTimer, countOfcomparison, countOfFailcomparison));
  setNewMessageInWonFrame();
}

export function wonGame(): void {
  let success = 0;
  const cards = document.querySelectorAll('.card-container');
  if (cards.length === 0) return;
  cards.forEach((item) => {
    if (item.classList.contains('card-success')) {
      success += 1;
    }
  });
  if (cards.length === success) {
    const startGameButton = document.querySelector('.start-game');
    if (!startGameButton) throw Error('Start-game button not founded');
    const pauseGameButton = document.querySelector('.pause-game');
    if (!pauseGameButton) throw Error('Start-game button not founded');
    const unPauseGameButton = document.querySelector('.unpause-game');
    if (!unPauseGameButton) throw Error('Start-game button not founded');
    const stopGameButton = document.querySelector('.stop-game');
    if (!stopGameButton) throw Error('Start-game button not founded');
    const registrationButton = document.querySelector('.registration-button');
    if (!registrationButton) throw Error('Start-game button not founded');
    const winFrame = document.querySelector('.win-frame');
    const wrapper = document.querySelector('.wrapper');
    const userAvatar = document.querySelector('.avatar');
    userAvatar?.classList.add('hidden');
    wrapper?.classList.add('wrapper-hidden');
    winFrame?.classList.remove('hidden');
    stopGameButton.classList.add('hidden');
    pauseGameButton.classList.add('hidden');
    unPauseGameButton.classList.add('hidden');
    registrationButton.classList.remove('hidden');
    stopGame();
  }
}
