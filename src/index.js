import axios from 'axios';

const refs = {
  burgerMenu: document.querySelector('.header__menu-btn'),
  // isOpen: document.querySelector('.header__burger-open'),
  // isClose: document.querySelector('.header__burger-close'),
  mobileMenu: document.querySelector('.mobile-menu'),
  orderTableBtn: document.querySelector('.button__primary--celebrate'),
  orderTableBtnHeader: document.querySelector('.button__primary--header'),
  orderTableBtnFooter: document.querySelector('.button__primary--footer'),
  modalBackdrop: document.querySelector('.order-table__backdrop'),
  btnCloseOrderModal: document.querySelector('.order-table__btn-close'),
  btnViewMenu: document.querySelector('.button__primary--hero'),
  modalViewBackdrop: document.querySelector('.view-menu__backdrop'),
  btnViewMenuClose: document.querySelector('.view-menu__btn-close'),
};

refs.burgerMenu.addEventListener('click', onClick);
refs.orderTableBtn.addEventListener('click', onOpenOrder);
refs.orderTableBtnHeader.addEventListener('click', onOpenOrder);
refs.orderTableBtnFooter.addEventListener('click', onOpenOrder);
refs.btnCloseOrderModal.addEventListener('click', onCloseOrderModal);
refs.modalBackdrop.addEventListener('click', onCloseBackdropModal);
refs.btnViewMenu.addEventListener('click', onOpenModalViewMenu);
refs.modalViewBackdrop.addEventListener(
  'click',
  onCloseModalViewMenuByBackdrop
);
refs.btnViewMenuClose.addEventListener('click', onCloseModalViewMenuByBtn);

// функция открытия бургур меню
function onClick() {
  console.log('click on the burger menu');
  refs.burgerMenu.classList.toggle('is-open');
  refs.mobileMenu.classList.toggle('is-open');
  const expanded =
    refs.burgerMenu.getAttribute('aria-expanded') === 'true' || false;
  refs.burgerMenu.setAttribute('aria-expanded', !expanded);
}

// функция открытия модалки заказа столика
function onOpenOrder() {
  console.log(777);
  refs.modalBackdrop.classList.toggle('is-open');
}

// функция закрытия модалки заказа столика
function onCloseOrderModal() {
  refs.modalBackdrop.classList.remove('is-open');
  // onCloseBackdropModal();
}

// функция закрытия модалки по бекдропу
function onCloseBackdropModal(e) {
  if (e.target === e.currentTarget) {
    refs.modalBackdrop.classList.remove('is-open');
  }
}
// ======================view menu modal=========================
// функция открытия модалки view menu
function onOpenModalViewMenu() {
  console.log('Клик на onOpenModalViewMenu ');
  refs.modalViewBackdrop.classList.toggle('is-open');
  // getRandomDish();
}

// функция закрытия модалки ПО БЕКДРОПУ view menu
function onCloseModalViewMenuByBackdrop(e) {
  if (e.target === e.currentTarget) {
    refs.modalViewBackdrop.classList.remove('is-open');
  }
}

// функция закрытия модалки ПО КНОПКЕ view menu
function onCloseModalViewMenuByBtn() {
  refs.modalViewBackdrop.classList.remove('is-open');
}

// =======================Запит на базу даних============API========

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/random.php';

// const qwe = async () => {
//   let arr = [];
//   for (let i = 0; i < 2; i += 1) {
//     const dish = await fetch(BASE_URL);
//     console.log(dish);
//     arr.push(dish);
//     return dish;
//   }
// };

// console.log(qwe());

// https://jsonplaceholder.typicode.com/users

//

// fetch()
//   .then(meal => console.log(meal))
//   .catch(error => console.log(error));

// async function getRandomDish() {
//   try {
//     let arr = [];
// for (let i = 0; i < 2; i += 1) {
//   const dish = await axios(BASE_URL);
//   console.log(dish);
//   arr.push(dish);
//     }
//     console.log(33333);
//     const promiseArr = await Promise.all(arr).then(response => {
//       // return response;
//       console.log(response);
//     });
//     console.log(promiseArr);
//     return promiseArr;
//   } catch (error) {
//     throw new Error(error);
//   }
// }
// console.log(getRandomDish());
// function createRandomMarkup(arr, data) {
//   return arr.map(item => {
//     const { strMeal, strMealThumb } = item.data.meals[0];
//     `<li>
//     <img src=${strMealThumb}/>
//   <p>${strMeal}</p>
//   </li>`;
//   });
// }

// async function createAndRenderRandomMarkup(data) {
//   try {
//     const arr = await getRandomDish();
//     const markup = createRandomMarkup(arr, data);
//   } catch (error) {
//     console.log(error);
//   }
// }
