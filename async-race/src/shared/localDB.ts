import { getAllCars, getAllWinners } from './server';

let cars: { [key: string]: string; }[];
let winners: { [key: string]: string; }[];

export async function setCarsList(): Promise<void> {
  cars = await getAllCars();
}

export async function setWinnersList(): Promise<void> {
  winners = await getAllWinners();
}

export function carsList(): { [key: string]: string; }[] {
  const result = cars;
  return result;
}

export function winnersList(): { [key: string]: string; }[] {
  const result = winners;
  return result;
}
