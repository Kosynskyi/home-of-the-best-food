const refs = {
  burgerMenu: document.querySelector('.header__menu-btn'),
  isOpen: document.querySelector('.header__burger-open'),
  isClose: document.querySelector('.header__burger-close'),
  mobileMenu: document.querySelector('.mobile-menu'),

  orderTableBtn: document.querySelector('.button__primary'),
  orderTableBtnHeader: document.querySelector('.button__primary--header'),
  orderTableBtnFooter: document.querySelector('.button__primary--footer'),
  modalBackdrop: document.querySelector('.order-table__backdrop'),

  btnCloseOrderModal: document.querySelector('.order-table__btn-close'),
};

refs.burgerMenu.addEventListener('click', onClick);
refs.orderTableBtn.addEventListener('click', onOpenOrder);
refs.orderTableBtnHeader.addEventListener('click', onOpenOrder);
refs.orderTableBtnFooter.addEventListener('click', onOpenOrder);
refs.btnCloseOrderModal.addEventListener('click', onCloseOrderModal);
refs.modalBackdrop.addEventListener('click', onCloseBackdropModal);

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
function onCloseOrderModal(e) {
  console.log(e);
  refs.modalBackdrop.classList.remove('is-open');
  onCloseBackdropModal();
}

// функция закрытия модалки по бекдропу
function onCloseBackdropModal(e) {
  if (e.target === e.currentTarget) {
    console.log('кликнули по бекдропу');
    refs.modalBackdrop.classList.remove('is-open');
  }
}

// ======================view menu modal=========================
