export const STORAGE_KEY = 'dataOrder';
export const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/random.php';

export const refs = {
  sliderLine: document.querySelector('.feedback__line'),
  gallery: document.querySelector('.gallery'),
  button: document.querySelector('.button'),
  buttonPrimary: document.querySelector('.button__primary'),
  headerContainer: document.querySelector('.container__header'),
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
  // ====================gallery====================
  galleryList: document.querySelector('.gallery__list'),
  // ====================view-menu====================
  viewMenuList: document.querySelector('.view-menu__list'),
  // ====================feedback section====================
  arrowLeft: document.querySelector('.feedback__btn-previously'),
  arrowRight: document.querySelector('.feedback__btn-next'),
  feedbackList: document.querySelector('.feedback__list'),
};
