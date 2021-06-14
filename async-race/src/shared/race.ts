import { carsList } from './localDB';
import { renderMain } from './rendering';
import { refreshWinners } from './renderWinners';
import {
  createNewWinner, driveEngineOfCar, getWinner, startEngineOfCar, stopEngineOfCar, updateWinner,
} from './server';

export function raceCar(id: string, car: HTMLElement): void {
  startEngineOfCar(id).then((data) => {
    const speed = (+data.distance / +data.velocity) / 1000;
    car.style.animationDuration = `${speed}s`;
    car.classList.add('drive');
    car.style.animationPlayState = 'running';
    driveEngineOfCar(id).catch(() => {
      car.style.animationPlayState = 'paused';
    });
  });
}

export function resetCar(id: string, car: HTMLElement): void {
  stopEngineOfCar(id).then(() => {
    car.classList.remove('drive');
  });
}

function getIdOfAllCarsOnRace(): string[] {
  const cars = document.querySelectorAll('.car__wrapper');
  const arrOfID: string[] = [];
  cars.forEach((item) => {
    arrOfID.push(item.id);
  });
  return arrOfID;
}

function setGarageMessage(winnerID: string): void {
  const winnerName = (carsList().filter((car) => String(car.id) === winnerID))[0].name;
  let winnerTime = 'time not founded';
  const cars = document.querySelectorAll('.car');
  cars.forEach((car) => {
    if (car.id === winnerID) {
      winnerTime = ((<HTMLElement>car).style.animationDuration).split('').filter((item) => item !== 's').join('');
    }
  });
  const message = document.querySelector('.garage__message-text');
  (<HTMLElement>message).innerText = `${winnerName} was first (${(+winnerTime).toFixed(2)}s)`;
  setTimeout(() => {
    (<HTMLElement>message).innerText = '';
  }, 7000);
}

function setWinnerStyle(winnerID: string): void {
  const carWrapper = document.querySelectorAll('.car__wrapper');
  carWrapper.forEach((item) => {
    if (item.id === winnerID) {
      item.classList.add('winner');
    }
  });
}

function blockAllButtons(): void {
  const buttons = document.querySelectorAll('button');
  buttons.forEach((item) => {
    if (!item.classList.contains('header__button') && !item.classList.contains('winners__button')) {
      item.classList.add('disabled');
      item.setAttribute('disabled', 'disabled');
    }
  });
}

function unblockResetButtons(): void {
  const resetButton = document.getElementById('reset');
  resetButton?.removeAttribute('disabled');
  resetButton?.classList.remove('disabled');
}

function createWinner(winnerID: string): void {
  let winnerTime = '1';
  const cars = document.querySelectorAll('.car');
  cars.forEach((car) => {
    if (car.id === winnerID) {
      winnerTime = ((<HTMLElement>car).style.animationDuration).split('').filter((item) => item !== 's').join('');
    }
  });
  const winner = {
    id: winnerID,
    wins: '1',
    time: winnerTime,
  };
  getWinner(winner.id)
    .then((response) => {
      if (response.status !== 200) {
        createNewWinner(winner).then(() => refreshWinners());
      } else {
        winner.wins = response.car.wins + 1;
        if (+response.car.time < +winner.time) winner.time = response.car.time;
        updateWinner(winner).then(() => refreshWinners());
      }
    });
}

function getWinnerOfRace(): void {
  const cars = document.querySelectorAll('.car');
  let winnerID: string;
  cars.forEach((car) => {
    car.addEventListener('animationend', () => {
      if (!winnerID) {
        winnerID = car.id;
        setGarageMessage(winnerID);
        setWinnerStyle(winnerID);
        createWinner(winnerID);
        unblockResetButtons();
      }
    });
  });
}

function checkCarsEngines(cars: NodeListOf<Element>): void {
  let countOfBrokeEnginesCars = 0;
  cars.forEach((car) => {
    if ((<HTMLElement>car).style.animationPlayState === 'paused') {
      countOfBrokeEnginesCars += 1;
    }
  });
  if (countOfBrokeEnginesCars === cars.length) {
    unblockResetButtons();
  }
}

export function raceAllCars(): void {
  blockAllButtons();
  const cars = document.querySelectorAll('.car');
  const id = getIdOfAllCarsOnRace();
  getWinnerOfRace();
  const arrOfPromises: Promise<{ [key: string]: string }>[] = [];
  for (let i = 0; i < id.length; i++) {
    arrOfPromises.push(startEngineOfCar(id[i]));
  }
  const syncStart = () => Promise.all(arrOfPromises);
  syncStart().then((data) => {
    for (let i = 0; i < data.length; i++) {
      const speed = (+data[i].distance / +data[i].velocity) / 1000;
      (<HTMLElement>cars[i]).style.animationDuration = `${speed}s`;
      (<HTMLElement>cars[i]).style.animationPlayState = 'running';
      (<HTMLElement>cars[i]).classList.add('drive');
      driveEngineOfCar(String(id[i])).catch(() => {
        (<HTMLElement>cars[i]).style.animationPlayState = 'paused';
        checkCarsEngines(cars);
      });
    }
  });
}

export function resetAllCars(): void {
  const cars = document.querySelectorAll('.car');
  const arrOfId = getIdOfAllCarsOnRace();
  const arrOfPromisesToEngineStop: Promise<{ [key: string]: string }>[] = [];
  for (let i = 0; i < cars.length; i++) {
    arrOfPromisesToEngineStop.push(stopEngineOfCar(arrOfId[i]));
  }
  const syncStop = () => Promise.all(arrOfPromisesToEngineStop);
  syncStop().then(() => renderMain('garage'));
}
