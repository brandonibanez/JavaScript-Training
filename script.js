// // Importing module
// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';
// console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';
import add, { cart } from './shoppingCart.js';

add('bread', 5);

// ShoppingCart.addToCart('apples', 5);
// console.log(ShoppingCart.totalPrice, ShoppingCart.totalQuantity);
console.log(cart);

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data[0]);

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = await getLastPost();
// console.log(lastPost);

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;
//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product}(s) added to cart. Shipping cost is ${shippingCost}`,
//     );
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product}(s) ordered from supplier.`);
//   };

//   return { addToCart, cart, totalPrice, totalQuantity, orderStock };
// })();

// ShoppingCart2.addToCart('bananas', 5);
// ShoppingCart2.addToCart('pizza', 2);
// console.log(ShoppingCart2.cart);

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [{ product: 'bread', quantity: 5 }],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}

const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';

import 'regenerator-runtime/runtime';
