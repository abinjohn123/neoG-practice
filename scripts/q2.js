const inputEl = document.getElementById('input');
const buttonAdd = document.getElementById('btn-add');
const buttonSubtract = document.getElementById('btn-subtract');

function fontSizeChanger(val) {
  const currentSize = Number.parseInt(inputEl.style.fontSize);
  inputEl.style.fontSize = `${currentSize + val}px`;
}

buttonAdd.addEventListener('click', () => fontSizeChanger(1));
buttonSubtract.addEventListener('click', () => fontSizeChanger(-1));
inputEl.style.fontSize = '16px';
