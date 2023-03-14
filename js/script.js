var swiper = new Swiper(".mySwiper", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 40,
  speed: 600,
  slidesPerView: 1.1,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 0,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".result-swiper-button-next",
    prevEl: ".result-swiper-button-prev",
  },
  breakpoints: {
    768: {
      spaceBetween: 30,
      slidesPerView: 1.4,
    },
    1024: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
  },
});

// -=====---//

let navbar = document.querySelector(".navbar");

window.onscroll = () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
  }
};


// -=--

$(document).ready(function () {
  // Smooth scroll to section
  $('.redirectLink').click(function () {
    var section = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(section).offset().top
    }, 800);
    return false;
  });
});
