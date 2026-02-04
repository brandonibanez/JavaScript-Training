// Exporting module
console.log('Exporting module');

const shippinngCost = 10;
export const cart = [];

// console.log('Start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finished fetching users');

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product}(s) added to cart. Shipping cost is ${shippinngCost}`,
  );
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product}(s) added to cart. Shipping cost is ${shippinngCost}`,
  );
}
