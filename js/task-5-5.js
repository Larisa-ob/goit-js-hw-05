class Car {
  //Write code under this line
  maxSpeed = 0;
  speed = 0;
  isOn = false;
  distance = 0;
  price = 0;
  static getSpecs() {
    return `maxSpeed: ${this.maxSpeed}, speed: ${this.speed}, isOn: ${this.isOn}, distance: ${this.distance}, price:${this._price}`;
  }
  constructor(
    maxSpeed = 500,
    speed = 0,
    isOn = false,
    distance = 0,
    price = 2000
  ) {
    this.maxSpeed = maxSpeed;
    this.speed = speed;
    this.isOn = isOn;
    this.distance = distance;
    this._price = price;
  }
  get price() {
    return this._price;
  }
  set price(value) {
    this._price = value;
  }
  turnOn() {
    this.isOn = true;
  }
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }
  accelerate(value) {
    console.log(this.speed);
    let summ = this.speed + value;
    if (summ <= this.maxSpeed) {
      this.speed = summ;
    } else {
      this.speed = this.speed;
    }
  }
  decelerate(value) {
    let resultSpeed = this.speed - value;
    if (resultSpeed >= 0) {
      this.speed = resultSpeed;
    } else {
      this.speed = 0;
    }
  }
  drive(hours) {
    if ((this.isOn = true)) this.distance = hours * this.speed;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
console.log(mustang.turnOn);
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
