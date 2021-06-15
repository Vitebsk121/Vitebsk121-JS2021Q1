import { BaseComponent } from '../base-component';
import { Car } from '../car/car';
import './garageField.scss';

export class GarageField extends BaseComponent {
  constructor(cars: { [key: string]: string; }[], pageNumber: number) {
    super('div', ['garage__field']);
    const fieldLength = 7;
    const endCarNum = fieldLength * pageNumber;
    const startCarNum = endCarNum - 7;
    for (let i = startCarNum; i < cars.length && i < endCarNum; i++) {
      const { color } = cars[i];
      const { name } = cars[i];
      const { id } = cars[i];
      const car = new Car(color, name, id);
      this.element.append(car.element);
    }
  }
}
