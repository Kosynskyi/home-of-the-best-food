import { refs } from './variables';
import comments from '../comments';

export function createRandomMarkup(arr) {
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

export function renderMarkup(element, markup) {
  element.innerHTML = '';
  element.insertAdjacentHTML('beforeend', markup);
}

export function createMarkup(arr) {
  const markup = arr
    .map(({ name, feedback, photo }) => {
      return `<li class="feedback feedback__item">
      <p class="feedback feedback__text"> ${feedback}</p>
      <img class="feedback feedback__photo" src="${photo}" alt="фото посетителя" width="100" height="100" />
      <p class="feedback feedback__visitor">Посетитель</p>
      <p class="feedback feedback__cliet-name">${name}</p>
      </li>`;
    })
    .join('');

  refs.feedbackList.insertAdjacentHTML('beforeend', markup);
  return markup;
}

export function renderFeedbackMarkup() {
  createMarkup(comments);
}
