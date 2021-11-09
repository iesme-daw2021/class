const user = {
  hobbies: ['cycling', 'windsurf'],
  age: 28,

  showHobbies() {
    this.hobbies.forEach((element) => {
      console.log(this.age);
    });
  },
};
user.showHobbies();
