import _ from 'lodash';
import './style.css';
import icon from './icon.png';
import imgCovid from './CovidFavicon.png';

function createLink() {
  const link = document.createElement('link');
  console.log(link);

  link.rel = 'icon';
  link.type = 'image/x-icon';
  link.href = imgCovid;

  return link;
}

function createDiv() {
  const div = document.createElement('div');
  console.log(div);

  div.innerHTML = _.join(['Hello', 'World'], ' ');
  div.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = icon;

  div.appendChild(myIcon);

  return div;
}

document.head.appendChild(
  createLink()
  // '<link rel="icon" type="image/x-icon" href="/\.webp$/" />'
);
document.body.appendChild(createDiv());
