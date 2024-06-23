import './js/pixabay-api';
import './js/render-function';


import { getImages } from './js/pixabay-api';
import { imagesTemplate } from './js/render-function';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import imageUrl from './img/alert-icon.svg';

const refs = {
    formEl: document.querySelector('.form'),
    inputEl: document.querySelector('.form-input'),
    imagesList: document.querySelector('.gallery'),
    loaderEl: document.querySelector('.loader'),
    loadBtnEl: document.querySelector('.load-btn'),
}
let request = '';
let currentPage = 1;
let maxPage = 1;
const perPage = 100;

// ===================================================

refs.formEl.addEventListener('submit', async e => {
    e.preventDefault();
    hideLoadBtn();
    
    refs.imagesList.innerHTML = '';
    request = e.target.elements.photo.value.trim();
    // console.log(request);

    if (request === '') {
        refs.inputEl.value = '';
        return showIziToast();
    } else {
        currentPage = 1;
        showLoader();

        try {
            
            const data = await getImages(request, currentPage);
            maxPage = Math.ceil(data.totalHits / perPage);
            

            if (maxPage === 0) {
                refs.inputEl.value = '';
                hideLoader();
                showIziToast();
                updateBtnStatus();
                return;
            } else {
                refs.inputEl.value = '';
                hideLoader();
                updateBtnStatus();
                return imagesTemplate(data.hits);
            }
        }
        catch (err) {
            showError(err);
        }
        hideLoader();
        updateBtnStatus();
    }
});
// ===================================================================
refs.loadBtnEl.addEventListener('click', async e => {
    
    showLoader();
    hideLoadBtn();
    
    try {
        currentPage++;
        const data = await getImages(request, currentPage);
       
        imagesTemplate(data.hits);
        skipOldElement();
    }
    catch {
        console.log('error');
    }
    hideLoader();
    updateBtnStatus();
});






// ===================================================================
function showIziToast() {
  return iziToast.show({
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    messageColor: '#fff',
    messageSize: '16',
    messageLineHeight: '0.03em',
    titleColor: '#fff',
    titleSize: '16',
    titleLineHeight: '0.03em',
    position: 'topRight',
    backgroundColor: '#ef4040',
    theme: 'dark',
    iconUrl: imageUrl,
    iconColor: '#FAFAFB',
  });
};

function messageIziToast() {
    return iziToast.show({
    title: 'The End!',
    message: 'End of collection!',
    messageColor: '#fff',
    messageSize: '16',
    messageLineHeight: '0.03em',
    titleColor: '#fff',
    titleSize: '16',
    titleLineHeight: '0.03em',
    position: 'topRight',
    backgroundColor: ' #6c8cff',
    theme: 'dark',
    iconUrl: imageUrl,
    iconColor: '#FAFAFB',
  });
};
// ===================================================================
function updateBtnStatus() {
    // console.log(currentPage);
    // console.log(maxPage);
  if (currentPage >= maxPage) {
    hideLoadBtn();

    if (maxPage) {
        messageIziToast();
    }
  } else {
    showLoadBtn();
  }
};
// ===================================================================
function showLoadBtn() {
  refs.loadBtnEl.classList.remove('hidden');
};
function hideLoadBtn() {
  refs.loadBtnEl.classList.add('hidden');
};

function showLoader() {
  refs.loaderEl.classList.remove('hidden');
};

function hideLoader() {
  refs.loaderEl.classList.add('hidden');
};

// ===================================================================

function skipOldElement() {
    const liElem = refs.imagesList.children[0];
  const height = liElem.getBoundingClientRect().height;

  scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
};