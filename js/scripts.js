// Custom Scripts
const swiper = new Swiper('.swiper', {
    loop: false,
  
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },

    breakpoints: {
        650: {
            slidesPerView: 1.8,
            spaceBetween: 40
        },
        600: {
            slidesPerView: 1.6,
            spaceBetween: 40
        },
        550: {
            slidesPerView: 1.4,
            spaceBetween: 30
        },
        500: {
            slidesPerView: 1.2,
            spaceBetween: 20
        },
        450: {
            slidesPerView: 1.1,
            spaceBetween: 20
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 36
        }
    },

    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //  },
});
