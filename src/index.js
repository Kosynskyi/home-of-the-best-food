// import axios from 'axios';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import comments from './comments.json';

import { BASE_URL, STORAGE_KEY, refs } from './js/variables';
import { onChangeCommentsPrev, onChangeCommentsNext } from './js/feedback';
import { getRandomDish } from './js/API';
import {
  createRandomMarkup,
  renderMarkup,
  createMarkup,
  renderFeedbackMarkup,
} from './js/markup';
import {
  createGalleryMarkup,
  createAndRenderGalleryMarkup,
} from './js/gallery';

// Listeners
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
refs.arrowRight.addEventListener('click', onChangeCommentsNext);
refs.arrowLeft.addEventListener('click', onChangeCommentsPrev);
// refs.orderTableBtn.addEventListener('click', onHideHeader);

renderFeedbackMarkup();
createAndRenderGalleryMarkup();

// функция открытия бургер меню
function onClick() {
  refs.burgerMenu.classList.toggle('is-open');
  refs.mobileMenu.classList.toggle('is-open');
  const expanded =
    refs.burgerMenu.getAttribute('aria-expanded') === 'true' || false;
  refs.burgerMenu.setAttribute('aria-expanded', !expanded);
}

// функция открытия модалки заказа столика
function onOpenOrder() {
  refs.modalBackdrop.classList.toggle('is-open');
}

// функция закрытия модалки заказа столика
function onCloseOrderModal() {
  refs.modalBackdrop.classList.remove('is-open');
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

async function createAndRenderRandomMarkup() {
  try {
    const arr = await getRandomDish();
    const markup = createRandomMarkup(arr);

    renderMarkup(refs.viewMenuList, markup);
  } catch (error) {
    console.log(error);
  }
}

// ====================backToTop====================
window.onscroll = () => {
  if (window.scrollY > 400) {
    document.querySelector('.backToTopLink').classList.remove('is-hide');
  } else if (window.scrollY < 400) {
    document.querySelector('.backToTopLink').classList.add('is-hide');
  }
};
