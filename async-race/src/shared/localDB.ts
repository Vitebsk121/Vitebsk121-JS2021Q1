import { getAllCars } from './server';

let cars: { [key: string]: string; }[];

export async function setCarsList(): Promise<void> {
  cars = await getAllCars();
  console.log(cars);
}

export function carsList(): { [key: string]: string; }[] {
  const result = cars;
  return result;
}
