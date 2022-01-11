sessionStorage.setItem('mode', 'dark');
sessionStorage.setItem('name', 'david');

console.log(sessionStorage.length);
const key = sessionStorage.key(1);
console.log(sessionStorage.getItem(key));
