/*
 * Напиши класс Car с указанными свойствами и методами
 */

class Car {
  constructor({ maxSpeed = 0 }) {
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.running = false;
    this.distance = 0;
    /*
        Добавь свойства:
          - speed - для отслеживания текущей скорости, изначально 0.
          - maxSpeed - для хранения максимальной скорости
          - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
          - distance - содержит общий киллометраж, изначально с 0
      */
  }

  turnOn() {
    this.running = true;
    return this;
    // Добавь код для того чтобы завести автомобиль
    // Просто записывает в свойство running значание true
  }

  turnOff() {
    this.running = false;
    this.speed = 0;
    return this;
    // Добавь код для того чтобы заглушить автомобиль
    // Просто записывает в свойство running значание false
  }

  accelerate(spd) {
    if (spd <= this.maxSpeed) this.speed = spd;
    return this.speed;
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed
  }

  decelerate(spd) {
    if (spd > 0 && spd <= this.maxSpeed) this.speed = this.accelerate() - spd;
    return this;
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed и не меньше нуля
  }

  drive(hours) {
    this.distance = this.speed * hours;
    return this;
    // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
    // но только в том случае если машина заведена!
  }
}

const car = new Car({ maxSpeed: 100 });
console.log(car.turnOn());
console.log(car.accelerate(100));
console.log(car.decelerate(44));
console.log(car.drive(5));
console.log(car.turnOff());
