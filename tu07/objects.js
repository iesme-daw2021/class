// CREATE AN EMPTY OBJECT
const user1 = new Object();
const user2 = {};

// CREATE AN OBJECT WITH PROPERTIES
const user3 = {
  name: 'John',
  age: 35,
};

// CREATE AN OBJECT WITH PROPERTIES & METHODS
const user4 = {
  name: 'John',
  age: 35,
  sayHi() {
    console.log('Hi');
  },
};

// ADD PROPERTIES
user4.isWoman = false;
user4.wife = 'Angela';

// ADD METHODS
user4.isMarried = function () {
  let married;
  if (this.wife) {
    married = true;
  } else {
    married = false;
  }
  return married;
};

// READ PROPERTIES
console.log('Is the user a woman? ' + user4.isWoman);
console.log("User's age: " + user4['age']);

// EXECUTE METHODS
console.log('Is the user married? ' + user4.isMarried());
