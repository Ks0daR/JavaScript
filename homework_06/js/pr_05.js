/*
 * Добавь классу Car свойство цены автомобиля, назови его сам.
 * Добавь геттер и сеттер value, который будет работать с свойством цены автомобиля.
 */
class Car {
  constructor({ maxSpeed = 0 }) {
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.running = false;
    this.distance = 0;
    this.price = 2000;
  }

  turnOn() {
    this.running = true;
    // return this;
  }

  turnOff() {
    this.running = false;
    this.speed = 0;
    // return this;
  }

  accelerate(spd) {
    if (spd <= this.maxSpeed) this.speed = spd;
    // return this.speed;
  }

  decelerate(spd) {
    if (spd > 0 && spd <= this.maxSpeed) this.speed = this.accelerate() - spd;
    // return this;
  }

  drive(hours) {
    this.distance = this.speed * hours;
    // return this;
  }

  static getSpecs(car) {
    console.log(car);
  }

  get value() {
    return this.price;
  }

  set value(cash) {
    this.price = cash;
  }
}
const car = new Car({ maxSpeed: 50, price: 2000 });
Car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100
console.log(car.value); // 2000

car.value = 4000;
console.log(car.value); // 4000
