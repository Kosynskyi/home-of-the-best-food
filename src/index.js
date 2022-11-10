console.log(2222);

const refs = {
  burgerMenu: document.querySelector('.header__menu-btn'),
  isOpen: document.querySelector('.header__burger-open'),
  isClose: document.querySelector('.header__burger-close'),
  mobileMenu: document.querySelector('.mobile-menu'),
};

refs.burgerMenu.addEventListener('click', onClick);

function onClick() {
  console.log('click on the burger menu');
  refs.burgerMenu.classList.toggle('is-open');
  refs.mobileMenu.classList.toggle('is-open');
  const expanded =
    refs.burgerMenu.getAttribute('aria-expanded') === 'true' || false;
  refs.burgerMenu.setAttribute('aria-expanded', !expanded);
}
