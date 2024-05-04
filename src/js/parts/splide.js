import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

const instSlider = () => {
  const slider = document.querySelector('.splide');

  if (slider) {
    const options = {
      type: 'fade',
      arrows: false,
    };

    new Splide(slider, options).mount();
  }
};
instSlider();
