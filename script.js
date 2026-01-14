'use strict';

function calcAge(birthYear) {
  const age = 2026 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millennial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Ivan';
      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!';
      const str = `Oh, and you're a millennial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      console.log(add(2, 3));
    }
    // console.log(str); // Error: str is not defined
    console.log(millennial); // Works due to var scoping
    // add(2, 3); // Error: add is not defined
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Brandon';
const myAge = calcAge(1996);
console.log(myAge);
