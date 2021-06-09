import { getAllCars } from '../../shared/server';
import { BaseComponent } from '../base-component';
import { Car } from '../car/car';
import './garageField.scss';

export class GarageField extends BaseComponent {
  constructor(pageNumber: number) {
    super('div', ['garage__field']);

    const fieldLength = 7;
    const endCarNum = fieldLength * pageNumber;
    const startCarNum = endCarNum - 7;
    getAllCars().then((data) => {
      for (let i = startCarNum; i < data.length && i < endCarNum; i++) {
        const { color } = data[i];
        const { name } = data[i];
        const car = new Car(color, name);
        this.element.append(car.element);
      }
    });
  }
}
