'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
          i + 1
        } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// displayMovements(account1.movements);

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsername(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcPrintBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

// calcPrintBalance(account1.movements);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

// calcDisplaySummary(account1.movements);

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  const username = inputLoginUsername.value;
  const pin = Number(inputLoginPin.value);

  currentAccount = accounts.find(
    acc => acc.username === username && acc.pin === pin,
  );

  if (currentAccount) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value,
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    amount <= currentAccount.balance &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username,
    );
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;

btnSort.addEventListener('click', function (e) {
  console.log('sort');
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);
// const reversed = movements.slice().reverse();
const reversed = movements.toReversed();
console.log(reversed);
console.log(movements);

movements[1] = 2000;

console.log(movements);
// const sorted = movements.slice().sort((a, b) => a - b);
const newMovements = movements.with(1, 2000);
const sorteds = newMovements.toSorted((a, b) => a - b);
console.log(sorteds);
console.log(movements);

// console.log([1, 2, 3, 4, 5, 6, 7]);
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// const x = new Array(7);
// console.log(x);
// console.log(x.map(() => 5));
// console.log(x.fill(1));
// console.log(x.fill(1, 3));
// console.log(x.fill(1, 3, 5));
// console.log(Array.from({ length: 7 }, () => 1));
// console.log(Array.from({ length: 7 }, (_, i) => i + 1));

// const y = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(y);

// const z = Array.from({ length: 100 }, () => Math.trunc(Math.random() * 6) + 1);
// console.log(z);

// const movementsUI = Array.from(
//   document.querySelectorAll('.movements__value'),
//   el => Number(el.textContent.replace('€', '')),
// );
// // ).map(el => Number(el.textContent.replace('€', '')));

// console.log(movementsUI);

// console.log(movements);

// const groupedMovements = Object.groupBy(movements, mov =>
//   mov > 0 ? 'deposits' : 'withdrawals',
// );
// console.log(groupedMovements);

// const groupedByActivity = Object.groupBy(accounts, acc =>
//   acc.movements.some(mov => mov > 1000) ? 'active' : 'inactive',
// );
// console.log(groupedByActivity);

// const groupedAccounts = Object.groupBy(accounts, acc => acc.type);
// console.log(groupedAccounts);

// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];

// console.log(owners.sort());
// console.log(movements.sort());
// // Ascending
// movements.sort((a, b) => a - b);
// console.log(movements);

// // Descending
// movements.sort((a, b) => b - a);
// console.log(movements);

// const arr = [[1, 2, 3], 4, 5, 6, 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, 5], 6, 7, 8];
// console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// const overalBalance2 = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance2);

// const overalBalance3 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance3);

// console.log(movements.some(mov => mov > 0));

// console.log(movements.every(mov => mov > 0));

// const lastWithdrawal = movements.findLast(mov => mov < 0);
// console.log(lastWithdrawal);

// const lastWithdrawalIndex = movements.findLastIndex(mov => mov < 0);
// console.log(lastWithdrawalIndex);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// movements.find(mov => mov < 0);

// console.log(movements.find(mov => mov < 0));

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// const totalDeposits = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * 1.1)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDeposits);
// console.log(movements.reduce((acc, mov) => acc + mov, 0));

// let balance = 0;
// for (const mov of movements) balance += mov;

// console.log(balance);
// console.log(
//   movements.reduce((acc, mov) => (acc > mov ? acc : mov), movements[0]),
// );

// movements.filter(function (mov) {
//   return mov > 0;
// });

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });

// console.log(movements);
// console.log(deposits);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// const user = 'Steven Thomas Williams'; // stw

// const createUsername = function (accs) {
//   accs.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(name => name[0])
//       .join('');
//   });
// };
// createUsername(accounts);
// console.log(accounts);

// const arr = account1.movements.map(mov => (mov = mov * 2));

// // displayMovements(arr);

// const movementsUSDfor = [];
// for (const mov of account1.movements) {
//   movementsUSDfor.push(mov * 1.1);
// }
// console.log(movementsUSDfor);

// const movementsDescriptions = account1.movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${
//       mov > 0 ? 'deposited' : 'withdrew'
//     } ${Math.abs(mov)}`,
// );

// console.log(movementsDescriptions);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// // SPLICE
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// // REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN
// console.log(letters.join(' - '));

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// // getting last array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log('jonas'.at(0));
// console.log('jonas'.at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('----FOR EACH----');

// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// });

// // 0: function(200)
// // 1: function(450)
// // 2: function(400)
// // ...

// // Map
// const currencies2 = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies2.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

// const currenciesMap = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currenciesMap.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });
