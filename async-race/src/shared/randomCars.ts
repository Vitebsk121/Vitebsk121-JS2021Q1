export function randomCar(): { [key: string]: string } {
  const car = {
    name: '',
    color: '',
  };
  const arrOfCarsFirstNames = [
    'Mersedes', 'Mazda', 'Toyota', 'Tesla', 'BMW', 'Audi', 'Skoda', 'Lada', 'Ferrari', 'Porsche',
  ];
  const arrOfCarsLastNames = [
    'Land Cruiser', 'F-50', 'CX-5', 'Model S', 'SuperB', 'Vesta', 'F10', 'GLS', 'TT', 'E-tron',
  ];
  const randFirstName = Math.floor(Math.random() * arrOfCarsFirstNames.length);
  const randLastName = Math.floor(Math.random() * arrOfCarsLastNames.length);
  car.name = `${arrOfCarsFirstNames[randFirstName]} ${arrOfCarsLastNames[randLastName]}`;
  const r = Math.floor(Math.random() * (256));
  const g = Math.floor(Math.random() * (256));
  const b = Math.floor(Math.random() * (256));
  car.color = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;

  return car;
}
