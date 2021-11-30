const user = {
  name: 'Josep2',
  age: 212,
};

const divs = document.querySelectorAll('div');

// WAY 1
// let contador = 1;
// for (const div of divs) {
//   if (contador === 1) {
//     div.innerHTML = `<p>${user.name}</p>`;
//   } else {
//     div.innerHTML = `<p>${user.age}</p>`;
//   }
//   contador++;
// }

// //WAY 2
// const property1 = 'name';
// const property2 = 'age';
// document.body.firstElementChild.innerHTML = `<p>${user[property1]}</p>`;
// document.body.firstElementChild.nextElementSibling.innerHTML = `<p>${user[property2]}</p>`;

// WAY 3
for (const div of divs) {
  div.innerHTML = `<p>${user[div.getAttribute('show-info')]}</p>`;
}
