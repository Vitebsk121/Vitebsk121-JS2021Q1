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

export function raceAllCars(): void {
  const cars = document.querySelectorAll('.car');
  const id = getIdOfAllCarsOnRace();
  const arrOfPromises: Promise<{ [key: string]: string }>[] = [];
  for (let i = 0; i < id.length; i++) {
    arrOfPromises.push(startEngineOfCar(id[i]));
  }
  const syncStart = () => Promise.all(arrOfPromises);
  syncStart().then((data) => {
    console.log(cars);
    for (let i = 0; i < data.length; i++) {
      console.log(cars[i]);
      const speed = (+data[i].distance / +data[i].velocity) / 1000;
      (<HTMLElement>cars[i]).style.animationDuration = `${speed}s`;
      (<HTMLElement>cars[i]).style.animationPlayState = 'running';
      (<HTMLElement>cars[i]).classList.add('drive');
      driveEngineOfCar(String(id[i])).catch(() => {
        (<HTMLElement>cars[i]).style.animationPlayState = 'paused';
      });
    }
  });
}

export function resetAllCars(): void {
  const cars = document.querySelectorAll('.car');
  const arrOfid = getIdOfAllCarsOnRace();
  for (let i = 0; i < cars.length; i++) {
    stopEngineOfCar(arrOfid[i]).then(() => {
      (<HTMLElement>cars[i]).classList.remove('drive');
    });
  }
}
