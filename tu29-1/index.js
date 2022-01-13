// /**
//  * ESTANDARD
//  */
// const promise = new Promise((resolve, reject) => {
//   // ALL WRONG
//   reject('Todo va mal');
// });

// promise.then(
//   (result) => console.log(result),
//   (error) => console.error(error)
// );

// /**
//  * AMB FUNCIONS
//  */
// const promise = new Promise(singer);

// function singer(resolve, reject) {
//   // ALL OK
//   resolve({ joc: 'elden ring', personaje: 'siegmeyer', money: 20 });
// }

// promise.then(callme, disapointed);

// function callme({ money }) {
//   console.log(money);
// }

// function disapointed(error) {
//   console.log('SAD');
// }

/**
 * ONLY INTERESTED IN THE ERROR
 */
const promise = new Promise((resolve, reject) => {
  // ALL WRONG
  reject('Todo va mal');
});

// OPTION 1
//promise.then(null, (error) => console.error(error));

// OPTION 2
//promise.catch((error) => console.error(error));

// QUAN M'INTERESSEN ELS OKS i ELS ERRORS
// OPTION 1
// promise.then(
//   (result) => console.log(result),
//   (error) => console.error(error)
// );

// OPTION 2 (PREFERRED)
promise
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
