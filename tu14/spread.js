const array = [3, 5, 1];

console.log(Math.max(array));

// Solution 1
const p1 = array[0];
const p2 = array[1];
const p3 = array[2];
console.log(Math.max(p1, p2, p3));

// Solution 2
console.log(Math.max(...array));
