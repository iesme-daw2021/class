const user = {
  name: 'Xavi',
  children: {
    name: 'Pete',
  },
  attack: () => {
    return 20;
  },
};

const json = JSON.stringify(user);
console.log(json);

const user2 = JSON.parse(json);
console.log(user2);

const json2 = '[23,32]';
const parse1 = JSON.parse(json2);
console.log(parse1);
