function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user1 = new User('Jack');
let user2 = new User('Paul');

console.log(user1.name); // Jack
console.log(user1.isAdmin); // false

console.log(user2.name); // Jack
console.log(user2.isAdmin); // false
