const monster = {
  health: 10,
  isDead: true,
};

const isDead = monster.health < 0 ? true : monster.isDead ? true : false;

console.log(isDead);
