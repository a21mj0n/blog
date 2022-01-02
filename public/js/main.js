const html = document.querySelector('html');
html.dataset.theme = 'dark';

function switchTheme(target) {
  console.log(target);
  html.dataset.theme = target.checked ? 'light' : 'dark';
}