const btn = document.querySelector('.js-click');
const box = document.querySelector('.js-box');
const text = document.querySelector('h1');
btn.addEventListener('click', click);
box.addEventListener('click', click);
text.addEventListener('click', click1);

let step = 0;

function click() {
  step += 20;
  console.log(step);
  box.style.marginTop = `${step}px`;
  box.style.marginLeft = `${step}px`;
}

function click1() {
  step += 30;
  console.log(step);
  text.style.marginTop = `${step}px`;
  text.style.marginLeft = `${step}px`;
}
