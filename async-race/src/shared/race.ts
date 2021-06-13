import { carsList } from './localDB';
import { renderMain } from './rendering';
import { driveEngineOfCar, startEngineOfCar, stopEngineOfCar } from './server';

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

function getIdOfAllCarsOnRace() {
  const cars = document.querySelectorAll('.car__wrapper');
  const arrOfID: string[] = [];
  cars.forEach((item) => {
    arrOfID.push(item.id);
  });
  return arrOfID;
}

function setGarageMessage(winnerID: string): void {
  const winnerName = (carsList().filter((car) => String(car.id) === winnerID))[0].name;
  let winnerTime: string = 'time not founded';
  const cars = document.querySelectorAll('.car')
  cars.forEach((car) => {
   if (car.id === winnerID) {
    winnerTime = ((<HTMLElement>car).style.animationDuration).split('').filter((item) => item !== 's').join('');
   }
  });
  const message = document.querySelector('.garage__message-text');
  (<HTMLElement>message).innerText = `${winnerName} won first (${(+winnerTime).toFixed(2)}s)`;
  setTimeout(() => {
    (<HTMLElement>message).innerText = '';
  }, 7000);
}

function setWinnerStyle(winnerID: string): void {
  const carWrapper = document.querySelectorAll('.car__wrapper');
  carWrapper.forEach((item) => {
    item.id === winnerID ? item.classList.add('winner') : item;
  });
}

function blockAllButtons() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach((item) => {
    if (!item.classList.contains('header__button')) {
      item.classList.add('disabled');
      item.setAttribute('disabled', 'disabled');
    }
  });
}

function unblockResetButtons() {
  const resetButton = document.getElementById('reset');
  resetButton?.removeAttribute('disabled');
  resetButton?.classList.remove('disabled');
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
        unblockResetButtons();
      };
    });
  });
}

function checkCarsEngines(cars: NodeListOf<Element>) {
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
  let arrOfPromisesToEngineStop: Promise<{ [key: string]: string }>[] = [];
  for (let i = 0; i < cars.length; i++) {
    arrOfPromisesToEngineStop.push(stopEngineOfCar(arrOfId[i]));
  }
  const syncStop = () => Promise.all(arrOfPromisesToEngineStop);
  syncStop().then(() => renderMain('garage'));

}
