import { BaseComponent } from '../base-component';
import { Car } from '../car/car';
import './garageField.scss';

export class GarageField extends BaseComponent {
    constructor() {
        super('div', ['garage__field']);
        const car = new Car();
        this.element.append(car.element);
    }
}