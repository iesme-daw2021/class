class User {
  constructor(name, surname) {
    // invokes the setter
    this.name = name;
    this.surname = surname;
  }

  get fullName() {
    return `${this.name} ${this.surname}`;
  }

  set fullName(value) {
    [this.name, this.surname] = value.split(' ');
  }
}

let user = new User('John', 'Mcarthy');
console.log(user.fullName); // John Mcarthy

user.fullName = 'Ann Davidson';
console.log(user.surname); // Davidson
