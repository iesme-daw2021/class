class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

const shoes = new Article('shoes', new Date('2021', 11, 17));
const battery = new Article('battery', new Date('2021', 11, 16));
const computerGame = new Article('computer game', new Date('2021', 11, 15));

const cart = [shoes, battery, computerGame];

cart.sort(Article.compare);

console.log(cart);
