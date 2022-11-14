import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { refs } from './variables';
import { getRandomDish } from './API';
import { renderMarkup } from './markup';

export function createGalleryMarkup(arr) {
  return arr
    .map(item => {
      const { strMeal, strMealThumb } = item.data.meals[0];

      return `<a class="gallery__link" href="${strMealThumb}" ><img class="gallery gallery__img" src="${strMealThumb}" alt="${strMeal}" loading='lazy' width="290" height="290"/></a>
        `;
    })
    .join('');
}

export async function createAndRenderGalleryMarkup() {
  try {
    const arr = await getRandomDish();
    const markup = createGalleryMarkup(arr);

    renderMarkup(refs.gallery, markup);

    const lightbox = new SimpleLightbox('.gallery a', {
      showCounter: false,
      captionDelay: 250,
    });
  } catch (error) {
    console.log(error);
  }
}
