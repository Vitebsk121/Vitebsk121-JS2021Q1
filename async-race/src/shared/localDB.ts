import { getAllCars } from './server';

let cars: { [key: string]: string; }[];

export async function setCarsList() {
  cars = await getAllCars();
}

export function carsList() {
  const result = cars;
  return result;
}
