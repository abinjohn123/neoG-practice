const input0 = document.getElementById('num-0');
const input1 = document.getElementById('num-1');
const outputEl = document.getElementById('output');
const btnsRow = document.querySelector('.btns');

function calculator(operation) {
  const num1 = input0.valueAsNumber;
  const num2 = input1.valueAsNumber;
  let result = 0;

  if (operation === 0) result = num1 + num2;
  if (operation === 1) result = num1 - num2;
  if (operation === 2) result = num1 * num2;
  if (operation === 3) {
    result = num2 === 0 ? 'Invalid' : num1 / num2;
  }

  return result;
}

function btnClickHandler(e) {
  if (!e.target.value) return;

  const operation = Number.parseInt(e.target.value);
  outputEl.innerText = calculator(operation);
}

// Event Listener
btnsRow.addEventListener('click', btnClickHandler);
