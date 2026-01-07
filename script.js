"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;

// function logger() {
//   console.log("My name is Brandon");
// }
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

//Function Declaration
// function calcAge1(birthYear) {
//   return 2026 - birthYear;
// }
// const age1 = calcAge1(1999);
// console.log(age1);

// //Function Expression
// const calcAge2 = function (birthYear) {
//   return 2026 - birthYear;
// };
// const age2 = calcAge2(1999);
// console.log(age2);

//Arrow Function
const calcAge3 = (birthYear) => 2026 - birthYear;
const age3 = calcAge3(1999);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2026 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};
console.log(yearsUntilRetirement(1999, "Brandon"));
console.log(yearsUntilRetirement(1980, "Bob"));
