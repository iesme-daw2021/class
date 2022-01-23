import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

window.addEventListener('DOMContentLoaded', (event) => {
  document.body.appendChild(component());
});
