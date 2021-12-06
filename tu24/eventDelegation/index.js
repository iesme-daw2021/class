let selectedTd;

window.addEventListener('DOMContentLoaded', () => {
  const table = document.getElementById('bagua-table');

  table.addEventListener('click', function (event) {
    let target = event.target;

    while (target != this) {
      if (target.tagName == 'TD') {
        highlight(target);
        return;
      }
      target = target.parentNode;
    }
  });
});

function highlight(node) {
  if (selectedTd) {
    selectedTd.classList.remove('highlight');
  }
  selectedTd = node;
  selectedTd.classList.add('highlight');
}
