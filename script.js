// // Importing module
// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';
// console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';
import add, { cart } from './shoppingCart.js';

add('bread', 5);

// ShoppingCart.addToCart('apples', 5);
// console.log(ShoppingCart.totalPrice, ShoppingCart.totalQuantity);
console.log(cart);
