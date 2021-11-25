// const items = document.getElementsByClassName('list-item');

// console.log(items);

// for (const item of items) {
//   console.log(item);
// }

// BY ID - FASTER
const h1Old = document.getElementById('main-title');

// BY ID - SLOWER
const h1New = document.querySelector('#main-title');

// BY CLASS - PREFERRED
const h1New2 = document.querySelector('.title');

// BY CLASS - OLD / NOT USED
const h1New3 = document.getElementsByClassName('title');

// OPTION 1 to select the 1st item
const firstItem = document.querySelector('ul li:first-of-type');
console.log(firstItem);

// OPTION 2 to select the 1st item
const firstItem2 = document.querySelector('ul').querySelector('li');
console.log(firstItem2);
