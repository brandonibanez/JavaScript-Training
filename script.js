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

const flight = 'LH234';
const brandon = {
  name: 'Brandon Browns',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    console.log('Checked in');
  } else {
    console.log('Wrong passport!');
  }
};

checkIn(flight, brandon);
console.log(flight);
console.log(brandon);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(brandon);
checkIn(flight, brandon);
