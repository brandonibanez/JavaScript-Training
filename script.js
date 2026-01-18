'use strict';

const booking = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers,
) {
  // ES5 way of setting default parameters
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const bookingDetails = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(bookingDetails);
  booking.push(bookingDetails);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);

console.log(booking);
