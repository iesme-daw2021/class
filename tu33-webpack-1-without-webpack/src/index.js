function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'World'], ' ');

  return element;
}

window.addEventListener('DOMContentLoaded', (event) => {
  document.body.appendChild(component());
});
