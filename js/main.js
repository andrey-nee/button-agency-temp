// Дождитесь полной загрузки страницы
window.addEventListener('load', function() {
  // Получите все элементы с атрибутом data-src
  var elements = document.querySelectorAll('[data-src]');
  
  // Переберите все найденные элементы
  elements.forEach(function(element) {
    // Замените атрибут data-src на src
    element.setAttribute('src', element.getAttribute('data-src'));
    
    // Удалите атрибут data-src
    element.removeAttribute('data-src');
  });
});


var swiper = new Swiper('.brand__swiper', {
  slidesPerView: 2,
  grid: {
    rows: 2,
    fill: "row",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  spaceBetween: 30, 
  breakpoints: {
    992: {
      slidesPerView: 5,
    },
    800: {
      slidesPerView: 4,
    },
    600: {
      slidesPerView: 3,
    }
  }
});

var swiper = new Swiper('.team__swiper', {
  watchSlidesProgress: true,
  slidesPerView: 1,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  spaceBetween: 30,  
  navigation: {
    nextEl: ".team__next",
    prevEl: ".team__prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 2,
    }
  }
});

