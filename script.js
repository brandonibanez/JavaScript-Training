'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  this.calcAge = function () {
    const currentYear = new Date().getFullYear();
    console.log(currentYear - this.birthYear);
  };
};

const john = new Person('John', 1990);
console.log(john);

const jane = new Person('Jane', 1995);
console.log(jane);

console.log(john instanceof Person); // true
