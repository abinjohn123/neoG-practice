const inputEl = document.getElementById('input-text');
const buttons = document.querySelector('.btns');

function btnClickHandler(e) {
  if (!e.target.value) return;

  console.log(e.target.value);

  inputEl.style.color = e.target.value;
}

buttons.addEventListener('click', btnClickHandler);
