const loadingText = document.querySelector('.loading');
const btn = document.querySelector('.btn-load');

btn.addEventListener('click', function () {
  loadingText.innerText = '';
});
