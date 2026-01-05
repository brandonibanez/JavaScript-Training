// let js = "amazing";
// console.log(1 + 2 + 3 + 45);

// let firstName = "Brandon";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let PI = 3.1415;
// console.log(PI);

// let age = 30;
// age = 31;

// const bYear = 1999;
// // bYear = 1990;

// var job = "programmer";
// job = "teacher";

// lastName = "Smith";
// console.log(lastName);

// const ageJohn = 30;
// const ageMark = 25;
// console.log(ageJohn, ageMark);
// const average = (ageJohn + ageMark) / 2;
// console.log(ageJohn ** 2);
// console.log(average);
// const test1 = "test1";
// const test2 = "test2";
// console.log(test1 + " " + test2);

// let x = 2 + 3 * 4;
// console.log(x);
// x = (2 + 3) * 4;
// console.log(x);
// x += 10;
// console.log(x);
// x++;
// console.log(x);
// x--;
// console.log(x);

// console.log(ageJohn > ageMark);

// console.log(25 - 10 - 5);

// let x1, y;
// x1 = y = 25 - 10 - 5;
// console.log(x1, y);

// const firstName = "Brandon";
// const job = "developer";
// const birthYear = 1999;

// const brandon =
//   "I'm " + firstName + ", a " + (2026 - birthYear) + " year old " + job + "!";
// console.log(brandon);

// const brandonNew = `I'm ${firstName}, a ${2026 - birthYear} year old ${job}!`;
// console.log(brandonNew);

// console.log(`Just a regular string...`);
// console.log(`String with
// multiple
// lines`);
// console.log("String with\nmultiple\nlines");

// const age = 15;
// if (age >= 18) {
//   console.log("Sarah can start driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 1999;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// const inputYear = "1999";
// console.log(Number(inputYear) + 18);
// console.log(inputYear + 18);
// console.log(Number("test"));
// console.log(typeof NaN);
// console.log(String(23), 23);

// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" + "10" + 3);
// console.log("23" * "2");
// console.log("23" / "2");
// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Brandon"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("You should get a job!");
// }

// let height = 0;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }

// const age = "18";
// if (age === 18) console.log("You just became an adult :D (strict)");
// if (age == 18) console.log("You just became an adult :D (loose)");

// const favorite = Number(prompt("What's your favorite number?"));
// if (favorite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } else if (favorite === 7) {
//   console.log("7 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7");
// }

// if (favorite !== 23) console.log("Why not 23?");

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// const isTired = true;
// console.log(hasDriversLicense || hasGoodVision || isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// const day = "monday";

// const days = [
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
//   "sunday",
// ];

// const randomDay = days[Math.floor(Math.random() * days.length)];

// console.log(randomDay);

// switch (randomDay) {
//   case "monday":
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//     console.log("Write code examples");
//     break;
//   case "thursday":
//     console.log("Record videos");
//     break;
//   case "friday":
//     console.log("Film videos");
//     break;
//   case "saturday":
//     console.log("Enjoy the weekend :D");
//     break;
//   case "sunday":
//     console.log("Prepare for the week ahead");
//     break;
//   default:
//     console.log("Not a valid day!");
// }

const age = 23;
age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);
console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
