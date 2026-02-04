// // Importing module
// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';
// console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';
import add, { cart } from './shoppingCart.js';

// add('bread', 5);

// ShoppingCart.addToCart('apples', 5);
// console.log(ShoppingCart.totalPrice, ShoppingCart.totalQuantity);
// console.log(cart);

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data[0]);

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = await getLastPost();
console.log(lastPost);

const lastPost2 = await getLastPost();
console.log(lastPost2);
