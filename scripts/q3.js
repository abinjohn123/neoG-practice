const inputEl = document.getElementById('input-text');
const buttons = document.querySelector('.btns');

function setFontSize(size) {
  fontSizes = {
    h1: '2em',
    h2: '1.5em',
    h3: '1.17em',
  };

  inputEl.style.fontSize = fontSizes[size];
}

function btnsClickHandler(e) {
  if (!e.target.value) return;
  const size = e.target.value;
  setFontSize(size);
}

buttons.addEventListener('click', btnsClickHandler);
