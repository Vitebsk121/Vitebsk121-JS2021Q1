import { getAllCars } from '../../shared/server';
import { BaseComponent } from '../base-component';
import { Car } from '../car/car';
import './garageField.scss';

export class GarageField extends BaseComponent {
  constructor() {
    super('div', ['garage__field']);
    const fieldLength = 7;
    getAllCars().then((data) => {
      for ( let i = 0; i < data.length && i <= fieldLength ; i++) {
        const color = data[i].color;
        const name = data[i].name;
        const car = new Car(color, name);
        this.element.append(car.element);
      }
    })
  }
}
