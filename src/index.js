import axios from 'axios';
import Notiflix from 'notiflix';

const STORAGE_KEY = 'dataOrder';

const refs = {
  burgerMenu: document.querySelector('.header__menu-btn'),
  mobileMenu: document.querySelector('.mobile-menu'),
  orderTableBtn: document.querySelector('.button__primary--celebrate'),
  orderTableBtnHeader: document.querySelector('.button__primary--header'),
  orderTableBtnFooter: document.querySelector('.button__primary--footer'),
  formDataOrder: document.querySelector('.order-table__form'),
  modalBackdrop: document.querySelector('.order-table__backdrop'),
  btnCloseOrderModal: document.querySelector('.order-table__btn-close'),
  btnViewMenu: document.querySelector('.button__primary--hero'),
  modalViewBackdrop: document.querySelector('.view-menu__backdrop'),
  btnViewMenuClose: document.querySelector('.view-menu__btn-close'),
  // ==================view-menu===========================
  viewMenuList: document.querySelector('.view-menu__list'),
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
refs.formDataOrder.addEventListener('input', onSaveDataOrder);
refs.formDataOrder.addEventListener('submit', onFormOrderSubmit);

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

//функция сбора данных и сохранения для local storage
function onSaveDataOrder(e) {
  const dataOrder = {
    name: e.currentTarget.elements.name.value,
    surname: e.currentTarget.elements.surname.value,
    date: e.currentTarget.elements.date.value,
    time: e.currentTarget.elements.time.value,
    comments: e.currentTarget.elements.comments.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataOrder));
}

//функция отправки данных и очистки формы
function onFormOrderSubmit(e) {
  e.preventDefault();

  if (
    e.currentTarget.elements.date.value === '' ||
    e.currentTarget.elements.time.value === ''
  ) {
    return Notiflix.Notify.warning('Дата или время не может быть пустым');
  }

  console.log('нажали отправить форму');
  refs.formDataOrder.reset();
  localStorage.removeItem(STORAGE_KEY);
}

// ======================view menu modal=========================
// функция открытия модалки view menu
function onOpenModalViewMenu() {
  refs.modalViewBackdrop.classList.toggle('is-open');
  createAndRenderRandomMarkup();
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

// ========API=============Запит на базу даних=============API========

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/random.php';

async function getRandomDish() {
  try {
    let arr = [];
    for (let i = 0; i < 10; i += 1) {
      const dish = await axios(BASE_URL);
      arr.push(dish);
    }

    const promiseArr = await Promise.all(arr).then(response => {
      return response;
    });
    return promiseArr;
  } catch (error) {
    throw new Error(error);
  }
}

function createRandomMarkup(arr) {
  return arr
    .map(item => {
      const { strMeal, strMealThumb } = item.data.meals[0];
      return `<li class="view-menu view-menu__item">
    <img class="view-menu view-menu__img" src="${strMealThumb}" width="80" alt="Рандомная картинка еды"/>
  <p class="view-menu view-menu__name">${strMeal}</p>
  </li>`;
    })
    .join('');
}

function renderMarkup(element, markup) {
  element.innerHTML = '';
  element.insertAdjacentHTML('beforeend', markup);
}

async function createAndRenderRandomMarkup() {
  try {
    const arr = await getRandomDish();
    const markup = createRandomMarkup(arr);
    renderMarkup(refs.viewMenuList, markup);
  } catch (error) {
    console.log(error);
  }
}
