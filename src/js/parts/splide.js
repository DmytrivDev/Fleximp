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
      arrows: false,
      fixedWidth: '48.5625rem',
      gap: '3.75rem',
      focus: 'center',
      updateOnMove: true,
      perPage: 1,
      start: 0,
      // lasses: {
      //   arrows: 'splide__arrows reviews-arrows',
      //   arrow: 'splide__arrow reviews-arrow',
      //   prev: 'splide__arrow--prev reviews-prev',
      //   next: 'splide__arrow--next reviews-next',
      // },
    };

    new Splide(slider, options).mount();
  }
};
instSecondSlider();
