const array = [1, 2, 3];

while (array.length > 0) {
  const monster = array.pop();
  console.log(monster);
  fight(monster);
}

function fight(monster) {
  console.log('monster defeated');
}
