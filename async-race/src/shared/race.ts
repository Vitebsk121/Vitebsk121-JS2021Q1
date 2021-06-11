import { driveEngineOfCar, startEngineOfCar, stopEngineOfCar } from './server';

export function raceCar(id: string, car: HTMLElement): void {
  startEngineOfCar(id).then((data) => {
    const speed = (+data.distance / +data.velocity) / 1000;
    car.style.animationDuration = `${speed}s`;
    car.classList.add('drive');
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
