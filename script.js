'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // this.calcAge = function () {
  //   const currentYear = new Date().getFullYear();
  //   console.log(currentYear - this.birthYear);
  // };
};

const john = new Person('John', 1990);
console.log(john);

const jane = new Person('Jane', 1995);
console.log(jane);

console.log(john instanceof Person); // true

// Prototypes
Person.prototype.calcAge = function () {
  const currentYear = new Date().getFullYear();
  console.log(currentYear - this.birthYear);
};

john.calcAge(); // 33
jane.calcAge(); // 28

console.log(john.__proto__); // Person.prototype
console.log(john.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(john)); // true
console.log(Person.prototype.isPrototypeOf(jane)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// Adding properties to prototype
Person.prototype.species = 'Homo Sapiens';
console.log(john.species, jane.species);
