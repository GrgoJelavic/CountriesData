//Importing module
// import { addToCart, tq, totalPrice as price } from './shopingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

// console.log('Importing module');

// import * as ShopingCart from './shopingCart.js';
// ShopingCart.addToCart('bread', 7);
// // console.log(ShopingCart.totalPrice);

import add, { cart } from './shopingCart.js';
add('burger', 2);
add('orange', 4);
console.log(cart);
// //The module pattern
// const shoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 324;
//   const totalQuantity = 17;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (shipping costs ${shippingCost})`
//     );
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return { addToCart, cart, totalPrice, totalQuantity };
// })();

// shoppingCart2.addToCart('apple', 3);
// shoppingCart2.addToCart('pizza', 5);
// console.log(shoppingCart2);

//
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'cola', quantity: '2' },
    { product: 'pizza', quantity: '3' },
  ],
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
  #greeting = 'Hello';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting} ${name}`);
  }
}

const test = new Person('Test');

console.log('Test' ?? null);

console.log(cart.find((el) => el.quantity >= 3));

Promise.resolve('Testt').then((x) => console.log(x));

import 'core-js';
// import 'core-js/stable/array/find';

//Polyifying async functions
import 'regenerator-runtime ';
