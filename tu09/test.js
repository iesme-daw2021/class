// ;

// function hasNumbers(password) {
//   for (let caracter of password) {
//     const number = parseInt(caracter);
//     if (!isNaN(number)) {
//       return true;
//     }
//   }
//   return false;
// }

// const hasNum = hasNumbers('aAr76cdS');

const salaries = {
  xavi: 200,
  victor: 250,
};

// const { salary } = person;
console.log(Object.entries(salaries));

for (let [key, value] of Object.entries(salaries)) {
  console.log(value);
}

// // const cities = [ARRAY_1, ARRAY_2];

// // [
// //                 key     value
// // 1a pasada ->  ['name', 'Xavi'],
// // 2a pasada ->  ['salary', 200],
// // ];

// // const [city1, city2] = cities;
