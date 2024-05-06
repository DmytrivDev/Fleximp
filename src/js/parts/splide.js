import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

const instSlider = () => {
  const slider = document.querySelector('.splide-hero');

  if (slider) {
    const options = {
      type: 'fade',
      arrows: false,
      autoplay: true,
      interval: 3000,
      rewind: true,
      speed: 2000,
      pagination: false,
      width: '33.125rem',
      height: '37.8125rem',
      breakpoints: {
        960: {
          width: '100%',
          height: '22.5rem',
        },
        500: {
          width: '100%',
          height: '12.5rem',
        },
      },
    };

    new Splide(slider, options).mount();
  }
};
instSlider();

const instSecondSlider = () => {
  const slider = document.querySelector('.splide-reviews');

  if (slider) {
    const options = {
      type: 'loop',
      speed: 2000,
      pagination: false,
      width: '48.5625rem',
      gap: '3.75rem',
      updateOnMove: true,
    };

    new Splide(slider, options).mount();
  }

  arrowsClicker();
};
instSecondSlider();

function arrowsClicker() {
  const arrows = document.querySelectorAll('.reviews-arrow');
  const container = document.querySelector('.reviews__box');

  arrows?.forEach(arrow => {
    arrow.addEventListener('click', e => {
      const target = e.currentTarget;

      if (target.classList.contains('reviews-next')) {
        container.querySelector('.splide__arrow--next').click();
      } else {
        container.querySelector('.splide__arrow--prev').click();
      }
    });
  });
}
