function User(name) {
  this.name = name;
  this.isAdmin = false;
  this.sayHi = function () {
    console.log('My name is: ' + this.name);
  };
}

let jack = new User('Jack');

jack.sayHi(); // My name is: Jack
