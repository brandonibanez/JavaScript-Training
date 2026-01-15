'use strict';

// function calcAge(birthYear) {
//   const age = 2026 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millennial = true;
//       // Creating NEW variable with same name as outer scope's variable
//       const firstName = 'Ivan';
//       // Reassigning outer scope's variable
//       output = 'NEW OUTPUT!';
//       const str = `Oh, and you're a millennial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       console.log(add(2, 3));
//     }
//     // console.log(str); // Error: str is not defined
//     console.log(millennial); // Works due to var scoping
//     // add(2, 3); // Error: add is not defined
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Brandon';
// const myAge = calcAge(1996);
// console.log(myAge);

// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Hello';
// let job = 'Developer';
// const year = 2026;

// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// // Example
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2026 - birthYear);
//   console.log(this);
// };
// calcAge(1996);

// const calcAgeArrow = birthYear => {
//   console.log(2026 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1996);

// const brandon = {
//   year: 1996,
//   calcAge: function () {
//     console.log(this);
//     console.log(2026 - this.year);
//   },
// };
// brandon.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = brandon.calcAge;
// matilda.calcAge();

// const f = brandon.calcAge;
// f(); // Error

const brandon = {
  firstName: 'Brandon',
  year: 1996,
  calcAge: function () {
    // console.log(this);
    console.log(2026 - this.year);

    // const self = this; // self or that
    // const isMillennial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillennial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillennial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

brandon.calcAge();
brandon.greet();
