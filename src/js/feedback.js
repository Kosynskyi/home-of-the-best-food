import { refs } from './variables';
import comments from '../comments.json';

let offset = 0;

export function onChangeCommentsPrev() {
  if (window.screen.width < 767) {
    offset -= 290;
    if (offset < 0) {
      offset = (comments.length - 1) * 290;
    }
    refs.sliderLine.style.left = -offset + 'px';
  } else if (window.screen.width > 1366) {
    offset -= 900;

    if (offset < 0) {
      offset = (comments.length - 1) * 900;
    }

    refs.sliderLine.style.left = -offset + 'px';
  }
}

export function onChangeCommentsNext() {
  if (window.screen.width < 767) {
    offset += 290;
    if (offset > (comments.length - 1) * 290) {
      offset = 0;
    }
    refs.sliderLine.style.left = -offset + 'px';
  } else if (window.screen.width > 1366) {
    offset += 900;
    if (offset > (comments.length - 1) * 900) {
      offset = 0;
    }

    refs.sliderLine.style.left = -offset + 'px';
  }
}
