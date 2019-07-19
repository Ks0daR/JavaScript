/*
 * Добавь к классу Car из предыдущего задания статический
 * метод getSpecs, который принимает объект-машину как параметр
 * и выводит в консоль значения полей maxSpeed, speed, running и distance.
 */

/*
 * Напиши класс Car с указанными свойствами и методами
 */

class Car {
  constructor({ maxSpeed = 0 }) {
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.running = false;
    this.distance = 0;
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
}

const car = new Car({ maxSpeed: 100 });
car.turnOn();
car.accelerate(50);
car.drive(2);

Car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100
