// const btn = document.querySelector('.js-click');
// const box = document.querySelector('.js-box');
// const text = document.querySelector('h1');
// btn.addEventListener('click', click);
// box.addEventListener('click', click);
// text.addEventListener('click', click1);

// let step = 0;

// function click() {
//   step += 20;
//   console.log(step);
//   box.style.marginTop = `${step}px`;
//   box.style.marginLeft = `${step}px`;
// }

// function click1() {
//   step += 30;
//   console.log(step);
//   text.style.marginTop = `${step}px`;
//   text.style.marginLeft = `${step}px`;
// }

/**
 * Реалізуй пошук автомобілів по сайту
 * Користувач потрапляє на сайт і одразу бачить форму для пошуку
 * і картки всіх автомобілів (масив cars)
 * Користувач може ввести в форму назву Марки або Моделі авто і в
 * тегу селект обрати що він ввів Марку або Модель (https://prnt.sc/PkkZZRy_ggtT)
 * Після натискання кнопки пошуку (сабміт форми) відмалюй авто
 * які збігаються з критеріями пошуку
 */

const cars = [
  {
    id: 1,
    car: 'Audi',
    type: 'A6',
    price: 30000,
    img: 'https://static.wixstatic.com/media/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg/v1/fill/w_520,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg',
  },
  {
    id: 2,
    car: 'Honda',
    type: 'Civic',
    price: 12000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
  },
  {
    id: 3,
    car: 'Audi',
    type: 'Q7',
    price: 40000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
  },
  {
    id: 4,
    car: 'BMW',
    type: '5 siries',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
  },
  {
    id: 5,
    car: 'Honda',
    type: 'Accord',
    price: 20000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
  },
  {
    id: 6,
    car: 'Volvo',
    type: 'XC60',
    price: 7000,
    img: 'https://winnerauto.volvocarsdealer.com/storage/local/assetPreview/image/xc60-core.jpg?w=655&h=465&size=104949&signature=563ffcae2b53c8215226d075bb4314bc',
  },
];

const form = document.querySelector('.js-form');
const container = document.querySelector('.js-list');

function createMarkup(arr) {
  return arr
    .map(item => {
      return `
      <li class="car-card" data-id="${item.id}">
        <img class="car-image" src="${item.img}" alt="${item.type}"/>
        <h2 class="car-title">${item.car}</h2>
        <h3 class="car-type">${item.type}</h3>
        <p class="car-price">${item.price} $</p>
      </li>
    `;
    })
    .join('');
}

container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.gap = '25px';
container.insertAdjacentHTML('beforeend', createMarkup(cars));

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const elements = event.target.elements;
  const queryValue = elements.query.value;
  const optionsValue = elements.options.value;

  const result = cars.filter(item =>
    item[optionsValue].toLowerCase().includes(queryValue.toLowerCase())
  );
  container.innerHTML = createMarkup(result);
}
