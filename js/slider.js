let swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    autoplay: {
      delay: 2000, // Задержка между слайдами в миллисекундах
      disableOnInteraction: false, // Отключение автопрокрутки при взаимодействии с пользователем
    },
    loop : true,
  });