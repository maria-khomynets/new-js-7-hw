const form = document.querySelector('.js-form');
form.addEventListener('submit', event => {
  event.preventDefault();

  console.log(event.target.elements.email.value);
});
