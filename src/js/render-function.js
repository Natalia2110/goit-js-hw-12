import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox;

export function imagesTemplate(arr) {
  const listEl = document.querySelector('.gallery');

  const markup = arr.map(imageTemplate).join('');


  listEl.insertAdjacentHTML('beforeEnd', markup);

  if (lightbox) {
    lightbox.refresh();
  }
  lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionType: 'attr',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
}

const imageTemplate = image => {
  return `<li class="gallery-item">
      <a class="gallery-link" href=${image.largeImageURL}>
        <img class="gallery-image" src=${image.webformatURL} alt=${image.tags} />
      </a>
      <ul class="desc-list">
        <li class="desc-item">
          <span class="desc-text">Likes</span>
          <span class="number">${image.likes}</span>
        </li>
        <li class="desc-item">
          <span class="desc-text">Views</span>
          <span class="number">${image.views}</span>
        </li>
        <li class="desc-item">
          <span class="desc-text">Comments</span>
          <span class="number">${image.comments}</span>
        </li>
        <li class="desc-item">
          <span class="desc-text">Downloads</span>
          <span class="number">${image.downloads}</span>
        </li>
      </ul>
    </li>`;
};
