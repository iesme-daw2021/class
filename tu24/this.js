// function suma(a, b) {
//   return a + b;
// }

// suma(2, 3);

const array = [1, 2, 3, 4];
array.forEach(function (element) {
  console.log(this);
  console.log(element);
});

// const buttons = document.querySelectorAll('button');
// buttons.forEach((element) => {
//   element.addEventListener('click', function (event) {
//     console.log(this);
//   });
// });
