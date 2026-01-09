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
// const calcAge3 = (birthYear) => 2026 - birthYear;
// const age3 = calcAge3(1999);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2026 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years.`;
// };
// console.log(yearsUntilRetirement(1999, "Brandon"));
// console.log(yearsUntilRetirement(1980, "Bob"));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

// const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

// console.log(calcAverage(1, 2, 3));

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const years = new Array(1999, 1984, 2008, 2020);
// console.log(years);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// const firstName = "Brandon";
// const brandon = [firstName, "Smith", 2026 - 1999, "teacher", friends];
// console.log(brandon);
// console.log(brandon[4]);

// const calcAge = function (birthYear) {
//   return 2026 - birthYear;
// };
// const years2 = [1999, 1984, 2008, 2020];
// const age1 = calcAge(years2[0]);
// const age2 = calcAge(years2[1]);
// const age3 = calcAge(years2[years2.length - 1]);
// console.log(age1, age2, age3);
// const ages = [
//   calcAge(years2[0]),
//   calcAge(years2[1]),
//   calcAge(years2[years2.length - 1]),
// ];
// console.log(ages);

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

friends.pop();
console.log(friends);
console.log(friends.pop());
console.log(friends);
console.log(friends.shift());
console.log(friends);
friends.push("Steven");
console.log(friends);
console.log(friends.indexOf("Steven"));
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
