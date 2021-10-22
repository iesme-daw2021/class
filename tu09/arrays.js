// const fruits = ['lemon', 'orange'];
// fruits.push('bananas');

// const fruit = fruits.shift();
// fruits.shift();
// console.log(fruits);

// const numbers = [2, 4, 6, 8];
// numbers.push(10);

// const lastEven = numbers.shift();
// const sum = lastEven + 2;
// console.log(sum);

// const cars = ['seat', 'pegeuot', 'ford'];

// // for (let i = 0; i < cars.length; i++) {
// //   console.log(i);
// //   console.log(cars[i]);
// // }

// // Arrays
// // for (const car of cars) {
// //   console.log(car);
// // }

// // Objects
// for (const index in cars) {
//   console.log(index);
//   console.log(cars[index]);
// }

// const users = {
//   //Key : Value
//   name: 'Carles',
//   age: 21,
// };

// for (const key in users) {
//   console.log(key);
//   console.log(users[key]);
// }
// const bestClubs = ['vcf', 'rma', 'bcn'];
// bestClubs.splice(1, 2, 'lev', 'vilallonga');
// console.log(bestClubs);
// //    0       1       2
// // [ 'vcf', 'lev', 'vilallonga' ]
// const remainingClubs = bestClubs.slice(1, 3);
// console.log(remainingClubs);

const bestCities = ['potries', 'tavernes'];
const cities = ['gandia', 'simat'];
const aCities = cities.concat(bestCities, 'oliva');
//console.log(aCities);

// console.log(cities.includes('tavernes'));
// console.log(cities.includes('simat'));

// const city = cities.find((e) => e.length > 7);

// for (let city of cities) {
//   console.log(city);
// }

// const citiesUpper = [];
// cities.forEach((city) => {
//   citiesUpper.push(city.toUpperCase());
// // });
// // console.log(cities);
// // console.log(citiesUpper);

// // const numbers = [2, 10, 1, 5];
// // //numbers.sort((elem1, elem2) => elem2 - elem1);
// // numbers.reverse();
// // console.log(numbers);
// // const text = '602-755-009';
// // console.log(text.split('-').join(''));

const text = 'hello my name is xavi and I am 30 years old';

let accum = 0;
for (let char of text) {
  if (char === ' ') {
    accum++;
  }
}
const num = letters.reduce((prev, curr) => {
  if (curr === ' ') {
    prev++;
  }
  return prev;
}, 0);

// console.log(num);
// let admin='Victor';
// let guest = 'Francesc';
// [admin, guest] = [guest, admin];

// let tmp = admin;
// admin = guest;
// guest = tmp;

function getCity() {
  return { name: 'Xeraco', population: 5000, area: 10000 };
}

const { population } = getCity();
console.log(population);
