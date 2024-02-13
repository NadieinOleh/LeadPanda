const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('dsf');
  window.location.href = '/src/successPage/index.html';
});
