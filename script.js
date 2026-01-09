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

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// friends.unshift("John");
// console.log(friends);

// friends.pop();
// console.log(friends);
// console.log(friends.pop());
// console.log(friends);
// console.log(friends.shift());
// console.log(friends);
// friends.push("Steven");
// console.log(friends);
// console.log(friends.indexOf("Steven"));
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));

// if (friends.includes("Steven")) {
//   console.log("You have a friend called Steven");
// }

// const brandonArray = [
//   "Brandon",
//   "Smith",
//   2026 - 1999,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];
// const brandon = {
//   firstName: "Brandon",
//   lastName: "Smith",
//   age: 2026 - 1999,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };
// console.log(brandon);

// console.log(brandon.lastName);
// console.log(brandon["lastName"]);

// const nameKey = "Name";
// console.log(brandon["first" + nameKey]);
// console.log(brandon["last" + nameKey]);

// // const interestedIn = prompt(
// //   "What do you want to know about Brandon? Choose between firstName, lastName, age, job, and friends."
// // );
// const interestedIn = "job";

// if (brandon[interestedIn]) {
//   console.log(brandon[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job, and friends."
//   );
// }

// brandon.location = "USA";
// brandon["twitter"] = "@brandonsmith";
// console.log(brandon);

// const brandon = {
//   firstName: "Brandon",
//   lastName: "Smith",
//   birthYear: 1999,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,
//   calcAge: function () {
//     this.age = 2026 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year-old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// };
// console.log(brandon.calcAge());
// console.log(brandon.age);
// console.log(brandon.getSummary());
// console.log(brandon);

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
// }

const brandonArray = [
  "Brandon",
  "Smith",
  2026 - 1999,
  "teacher",
  ["Michael", "Peter", "Steven"],
];
for (let i = 0; i < brandonArray.length; i++) {
  if (typeof brandonArray[i] !== "object") continue;
  else if (typeof brandonArray[i] == "object") {
    for (let j = 0; j < brandonArray[i].length; j++) {
      console.log(brandonArray[i][j]);
    }
  }
  console.log(brandonArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---- Starting exercise ${exercise} ----`);
  for (let rep = 1; rep < 6; rep++) {
    if (exercise === 2 && rep === 3) break;
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♂️`);
  }
}
