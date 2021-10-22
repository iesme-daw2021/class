const schoolIESME = {
  name: 'IES Maria Enriquez',
  location: 'Gandia',
};

const schoolIESTAV = {
  name: 'IES Jaume I',
  location: 'Tavernes',
};

const schoolIESCULL = {
  name: 'IES Cullera',
  location: 'Cullera',
};

const schoolIESALG = {
  name: 'IES Algemesi',
  location: 'Algemesi',
};

// OPTION 1
const schools1 = new Map();
schools1.set(schoolIESME, 1000);
schools1.set(schoolIESTAV, 850);
schools1.set(schoolIESCULL, 900);
schools1.set(schoolIESALG, 1200);

// OPTION 2 (Chaining)
const schools2 = new Map();
schools2
  .set(schoolIESME, 1000)
  .set(schoolIESTAV, 850)
  .set(schoolIESCULL, 900)
  .set(schoolIESALG, 1200);

// OPTION 3 (Create Map & add elements)
const schools3 = new Map([
  [schoolIESME, 1000],
  [schoolIESTAV, 850],
  [schoolIESCULL, 900],
  [schoolIESALG, 1200],
]);

// for (let keyValue of schools3) {
//   console.log(school);
//   console.log(students);
// }

// const cvCovid = new Map();
// cvCovid.set('Tavernes de la Valldigna', 200);
// cvCovid.set('Tavernes Blanques', 150);
// cvCovid.set('Valencia', 125000);
// cvCovid.set('Alicante', 75000);

// if (!cvCovid.has('Alicante')) {
//   cvCovid.set('Alicante', 23000);
// }
// console.log(cvCovid.get('Alicante'));
//               p2     ,   p1
// p3 = cvCovid

// let totalCovid = 0;
// for (let covid of cvCovid.values()) {
//   totalCovid += covid;
// }

// // WITH STANDARD FUNCTION
// function sumCovid(value, key, map) {
//   totalCovid += value;
// }
// cvCovid.forEach(sumCovid);
// console.log(totalCovid);

// // WITH ARROW FUNCTION
// cvCovid.forEach((value, key, map) => {
//   totalCovid += value;
// });
// console.log(totalCovid);

// function showSchool(value, key, map) {
//   totalStudents += value;
// }
// schools3.forEach(showSchool);
// console.log('Total students = ' + totalStudents);

// const cvCovid = [
//   'Tavernes de la Valldigna',
//   200,
//   'Tavernes Blanques',
//   150,
//   'Valencia',
//   125000,
//   'Alicante',
//   75000,
// ];

// const cvCovid = {
//   'Tavernes de la Valldigna': 200,
//   'Tavernes Blanques': 150,
//   Valencia: 125000,
//   Alicante: 75000,
//   Alicante: 23000,
// };

// let totalCovid = 0;
// for (let propertyName in cvCovid) {
//   totalCovid += cvCovid[propertyName];
// }
// console.log(totalCovid);

const cvCovid = new Set([200, 150, 125000, 75000]);
let totalCovid = 0;
function sumCovid(value, key, map) {
  totalCovid += value;
}

cvCovid.forEach(sumCovid);
console.log(totalCovid);
