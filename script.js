'use strict';

// const booking = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers,
// ) {
//   // ES5 way of setting default parameters
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const bookingDetails = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(bookingDetails);
//   booking.push(bookingDetails);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000);

// console.log(booking);

// const flight = 'LH234';
// const brandon = {
//   name: 'Brandon Browns',
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 24739479284) {
//     console.log('Checked in');
//   } else {
//     console.log('Wrong passport!');
//   }
// };

// checkIn(flight, brandon);
// console.log(flight);
// console.log(brandon);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(brandon);
// checkIn(flight, brandon);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// // JS uses callbacks all the time
// const high5 = function () {
//   console.log('👋');
// };

// document.body.addEventListener('click', high5);

// ['Brandon', 'Sarah', 'Adam'].forEach(high5);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Brandon');
// greeterHey('Steven');

// greet('Hello')('Michael');

// // Challenge
// const greetArrow = greeting => name => {
//   console.log(`${greeting} ${name}`);
// };

// greetArrow('Hi')('Anna');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Brandon Browns');
lufthansa.book(635, 'Sarah Williams');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'John Smith');

// Call method
book.call(eurowings, 23, 'John Smith');
console.log(eurowings.bookings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa.bookings);

// Apply method
const flightData = [583, 'George Brown'];
book.apply(eurowings, flightData);
console.log(eurowings.bookings);

book.call(eurowings, ...flightData);
console.log(eurowings.bookings);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Williams');
console.log(swiss.bookings);
