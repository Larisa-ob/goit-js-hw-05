class Car {
  // Write code under this line
  constructor(speed = 0, price, maxSpeed, isOn = false, distance = 0) {
    this.speed = speed;
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }
  static getSpecs(car) {
    return `maxSpeed: $(this.maxSpeed) price: $(this.price)`;
  }
  get price() {}
  set price(value) {}
  turnOn() {}
  turnOff() {}
  accelerate(value) {}
  decelerate(value) {}
  drive(hours) {}
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

// console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

// console.log(mustang.price); // 2000
mustang.price = 4000;
// console.log(mustang.price); // 4000