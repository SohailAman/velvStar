var swiper = new Swiper(".mySwiper", { 
  effect: "coverflow",
  grabCursor: true, 
  spaceBetween: 40,
  speed: 600,
  slidesPerView: 1,
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
      slidesPerView: 2.1,
    },
    1024: {
      spaceBetween: 30,
      slidesPerView: 2.45,
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
  $(".redirectLink").click(function () {
    var section = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(section).offset().top,
      },
      800
    );
    return false;
  });
});

// ----
let contactForm = document.getElementById("contactForm");
let btnSubmit = document.getElementById("subbb");
let Name = document.getElementById("Name");

let linksNavs = document.querySelectorAll(".linksNav");
let navbarNavDropdown = document.getElementById("navbarNavDropdown");
let toggler = document.getElementById("toggler");


linksNavs.forEach((linksNav) => {
  linksNav.addEventListener("click", () => {
    navbarNavDropdown.classList.remove("show");
    toggler.classList.add("collapsed");
    toggler.setAttribute("aria-expanded", "false");
  });
});

// Validate
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})();

btnSubmit.addEventListener('mouseenter',()=>{

  if (contactForm.classList.contains('was-validated')) {
    console.log(btnSubmit);
    btnSubmit.setAttribute("data-bs-toggle", "modal");
    btnSubmit.setAttribute("type", "button");
  } 
  
})