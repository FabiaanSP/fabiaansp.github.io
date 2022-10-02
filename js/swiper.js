import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

// ================================ FANTASIANA SWIPER ================================ //

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    speed: 400,
  });