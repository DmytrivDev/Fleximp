import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

const instSlider = () => {
  const slider = document.querySelector('.splide');

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
