const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    this[_brand] = brand;
    this[_motor] = motor;
    this[_color] = color;
  }

  // Clone method that returns a new instance of the same class
  cloneCar() {
    const Cls = this.constructor;
    return new Cls(this[_brand], this[_motor], this[_color]);
  }

  // For inspection (optional)
  get brand() {
    return this[_brand];
  }

  get motor() {
    return this[_motor];
  }

  get color() {
    return this[_color];
  }
}
