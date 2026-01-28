'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // this.calcAge = function () {
  //   const currentYear = new Date().getFullYear();
  //   console.log(currentYear - this.birthYear);
  // };
};

Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};

// Person.hey();

// const john = new Person('John', 1990);
// console.log(john);

// const jane = new Person('Jane', 1995);
// console.log(jane);

// console.log(john instanceof Person); // true

// // Prototypes
Person.prototype.calcAge = function () {
  const currentYear = new Date().getFullYear();
  console.log(currentYear - this.birthYear);
};

// john.calcAge(); // 33
// jane.calcAge(); // 28

// console.log(john.__proto__); // Person.prototype
// console.log(john.__proto__ === Person.prototype); // true
// console.log(Person.prototype.isPrototypeOf(john)); // true
// console.log(Person.prototype.isPrototypeOf(jane)); // true
// console.log(Person.prototype.isPrototypeOf(Person)); // false

// // Adding properties to prototype
// Person.prototype.species = 'Homo Sapiens';
// console.log(john.species, jane.species);

// const arr = [3, 6, 4, 5, 6, 9, 3];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype); // true

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

const PersonCl = class {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    const currentYear = new Date().getFullYear();
    console.log(currentYear - this.birthYear);
  }

  get age() {
    return 2026 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else console.log('Incorrect!');
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey Hey Ho');
  }
};

class Student extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2026 - this.birthYear
      } years old, but as a student I feel more like ${
        2026 - this.birthYear + 10
      }`,
    );
  }
}

const martha = new Student('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
console.log(martha.age);

// const brandon = new PersonCl('Brandon Browns', 1990);
// console.log(brandon.age);
// console.log(brandon._fullName);
// console.log(PersonCl.hey());
// // console.log(brandon);
// // brandon.calcAge();

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hello, my name is ${this.firstName}`);
// // };

// // brandon.greet();

// // const account = {
// //   owner: 'Brandon',
// //   movements: [200, 530, 120, 300],

// //   get latest() {
// //     return this.movements.slice(-1).pop();
// //   },

// //   set latest(mov) {
// //     this.movements.push(mov);
// //   },
// // };

// // console.log(account.latest); // 300
// // account.latest = 50;
// // console.log(account.movements); // [200, 530, 120, 300, 50]

const PersonProto = {
  calcAge() {
    const currentYear = new Date().getFullYear();
    console.log(currentYear - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay Walker', 2010, 'Mathematics');
jay.introduce();
jay.calcAge();

// const steven = Object.create(PersonProto);
// steven.init('Steven Smith', 2000);
// console.log(steven);
// steven.calcAge();

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah Johnson', 1975);
// console.log(sarah);
// sarah.calcAge();

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// mike.introduce();
// mike.calcAge();
// console.log(mike instanceof Student); // true
// console.log(mike instanceof Person); // true
// Student.prototype.constructor = Student;

// Student.hey = function () {
//   console.log('Hey from Student class');
// };

// Student.hey();

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// // class Car {
// //   constructor(make, speed) {
// //     this.make = make;
// //     this.speed = speed;
// //   }

// //   accelerate() {
// //     this.speed += 10;
// //     console.log(`${this.make} is going at ${this.speed} km/h`);
// //   }

// //   brake() {
// //     this.speed -= 5;
// //     console.log(`${this.make} is going at ${this.speed} km/h`);
// //   }
// // }

// const electricCar = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// electricCar.prototype = Object.create(Car.prototype);

// electricCar.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// electricCar.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`,
//   );
// };

// const tesla = new electricCar('Tesla', 120, 23);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.accelerate();
// tesla.brake();
