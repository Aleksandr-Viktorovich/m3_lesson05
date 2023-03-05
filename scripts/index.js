'use strict';

const slideBox = document.querySelector('.hero__list');
const slide = [...document.querySelectorAll('.hero__item')];
const slideBtnRight = document.querySelector('.hero__item-button--right');
const slideBtnLeft = document.querySelector('.hero__item-button--left');

slide.forEach((item, index) => {

  if (index !== 0) item.classList.add('no__vis');

  item.dataset.index = index;
  slide[0].setAttribute('data-active', '');
});

const showSlide = (show) => {
  const count = slideBox.querySelector('[data-active]');
  const countIndex = +count.dataset.index;
  count.classList.add('no__vis');
  count.removeAttribute('data-active');

  let nextSlideIndex;
  if (show === 'right') {
    nextSlideIndex = countIndex + 1 === slide.length ? 0 : countIndex + 1;
  }
   if (show === 'left')  {
    nextSlideIndex = countIndex === 0 ? slide.length - 1 : countIndex - 1;
  }

  let nextSlide = slideBox.querySelector(`[data-index = '${nextSlideIndex}']`);
  nextSlide.classList.remove('no__vis');
  nextSlide.setAttribute('data-active', '');
}

slideBtnRight.addEventListener('click', () => {
  showSlide('right');
});

slideBtnLeft.addEventListener('click', () => {
  showSlide('left');
});



