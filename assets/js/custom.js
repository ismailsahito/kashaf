// toggle drawer
$(document).ready(function() {
    $(".navigation__toggler").click(function(e) {
        e.stopPropagation();
        $(".navigation__wrapper ul").toggleClass("active");
    });
});

var swiper = new Swiper(".exploreSwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1.25,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 1.4,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 1.7,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 2.1,
            spaceBetween: 15,
        },
        1280: {
            slidesPerView: 2.4,
            spaceBetween: 15,
        },
        1440: {
            slidesPerView: 2.75,
            spaceBetween: 15,
        }
    },
});

var swiper = new Swiper(".environmental__slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on: {
        init: function () {
          toggleNavigationButtons(this);
        },
        resize: function () {
          toggleNavigationButtons(this);
        },
        slidesLengthChange: function () {
          toggleNavigationButtons(this);
        },
    },
    breakpoints: {
        320: {
            slidesPerView: 1.3,
            spaceBetween: 10,
        },
        450: {
            slidesPerView: 2.1,
            spaceBetween: 10,
        },
        575: {
            slidesPerView: 2.75,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 3.5,
            spaceBetween: 15,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 4.5,
            spaceBetween: 15,
        },
        1440: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        1600: {
            slidesPerView: 6,
            spaceBetween: 10,
        }
    },
});

function toggleNavigationButtons(swiper) {
    const nextButton = document.querySelector('.swiper-button-next');
    const prevButton = document.querySelector('.swiper-button-prev');
  
    if (swiper.slides.length <= swiper.params.slidesPerView) {
        nextButton.style.display = 'none';
        prevButton.style.display = 'none';
    } else {
        nextButton.style.display = 'block';
        prevButton.style.display = 'block';
    }
}

var swiper = new Swiper(".home__improvement__slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on: {
        init: function () {
          toggleNavigationButtons(this);
        },
        resize: function () {
          toggleNavigationButtons(this);
        },
        slidesLengthChange: function () {
          toggleNavigationButtons(this);
        },
    },
    breakpoints: {
        320: {
            slidesPerView: 1.3,
            spaceBetween: 10,
        },
        450: {
            slidesPerView: 2.1,
            spaceBetween: 10,
        },
        575: {
            slidesPerView: 2.75,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 3.5,
            spaceBetween: 15,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 4.5,
            spaceBetween: 15,
        },
        1440: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        1600: {
            slidesPerView: 6,
            spaceBetween: 10,
        }
    },
});

var swiper = new Swiper(".furniture__servies__slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on: {
        init: function () {
          toggleNavigationButtons(this);
        },
        resize: function () {
          toggleNavigationButtons(this);
        },
        slidesLengthChange: function () {
          toggleNavigationButtons(this);
        },
    },
    breakpoints: {
        320: {
            slidesPerView: 1.3,
            spaceBetween: 10,
        },
        450: {
            slidesPerView: 2.1,
            spaceBetween: 10,
        },
        575: {
            slidesPerView: 2.75,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 3.5,
            spaceBetween: 15,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 4.5,
            spaceBetween: 15,
        },
        1440: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        1600: {
            slidesPerView: 6,
            spaceBetween: 10,
        }
    },
});

var swiper = new Swiper(".water__servies__slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on: {
        init: function () {
          toggleNavigationButtons(this);
        },
        resize: function () {
          toggleNavigationButtons(this);
        },
        slidesLengthChange: function () {
          toggleNavigationButtons(this);
        },
    },
    breakpoints: {
        320: {
            slidesPerView: 1.3,
            spaceBetween: 10,
        },
        450: {
            slidesPerView: 2.1,
            spaceBetween: 10,
        },
        575: {
            slidesPerView: 2.75,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 3.5,
            spaceBetween: 15,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 4.5,
            spaceBetween: 15,
        },
        1440: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        1600: {
            slidesPerView: 6,
            spaceBetween: 10,
        }
    },
});

var swiper = new Swiper(".pest__servies__slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on: {
        init: function () {
          toggleNavigationButtons(this);
        },
        resize: function () {
          toggleNavigationButtons(this);
        },
        slidesLengthChange: function () {
          toggleNavigationButtons(this);
        },
    },
    breakpoints: {
        320: {
            slidesPerView: 1.3,
            spaceBetween: 10,
        },
        450: {
            slidesPerView: 2.1,
            spaceBetween: 10,
        },
        575: {
            slidesPerView: 2.75,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 3.5,
            spaceBetween: 15,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 4.5,
            spaceBetween: 15,
        },
        1440: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        1600: {
            slidesPerView: 6,
            spaceBetween: 10,
        }
    },
});

var swiper = new Swiper(".personal__servies__slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on: {
        init: function () {
          toggleNavigationButtons(this);
        },
        resize: function () {
          toggleNavigationButtons(this);
        },
        slidesLengthChange: function () {
          toggleNavigationButtons(this);
        },
    },
    breakpoints: {
        320: {
            slidesPerView: 1.3,
            spaceBetween: 10,
        },
        450: {
            slidesPerView: 2.1,
            spaceBetween: 10,
        },
        575: {
            slidesPerView: 2.75,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 3.5,
            spaceBetween: 15,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 4.5,
            spaceBetween: 15,
        },
        1440: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        1600: {
            slidesPerView: 6,
            spaceBetween: 10,
        }
    },
});

var swiper = new Swiper(".explore__services__slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on: {
        init: function () {
          toggleNavigationButtons(this);
        },
        resize: function () {
          toggleNavigationButtons(this);
        },
        slidesLengthChange: function () {
          toggleNavigationButtons(this);
        },
    },
    breakpoints: {
        320: {
            slidesPerView: 1.3,
            spaceBetween: 10,
        },
        450: {
            slidesPerView: 2.1,
            spaceBetween: 10,
        },
        575: {
            slidesPerView: 2.75,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 3.5,
            spaceBetween: 15,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 4.5,
            spaceBetween: 15,
        },
        1440: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        1600: {
            slidesPerView: 5.5,
            spaceBetween: 10,
        }
    },
});

var swiper = new Swiper(".client__reviews__slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on: {
        init: function () {
          toggleNavigationButtons(this);
        },
        resize: function () {
          toggleNavigationButtons(this);
        },
        slidesLengthChange: function () {
          toggleNavigationButtons(this);
        },
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        575: {
            slidesPerView: 1.5,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        991: {
            slidesPerView: 2.2,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1600: {
            slidesPerView: 3,
            spaceBetween: 40,
        }
    },
});

var swiper = new Swiper(".before__after__slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on: {
        init: function () {
          toggleNavigationButtons(this);
        },
        resize: function () {
          toggleNavigationButtons(this);
        },
        slidesLengthChange: function () {
          toggleNavigationButtons(this);
        },
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        450: {
            slidesPerView: 1.5,
            spaceBetween: 10,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 15,
        },
        991: {
            slidesPerView: 2.7,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 3.2,
            spaceBetween: 15,
        },
        1440: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1600: {
            slidesPerView: 4,
            spaceBetween: 10,
        }
    },
});


// Modal Script
var modal = document.querySelector(".modal");
var triggers = document.querySelectorAll(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show");
}

for (var i = 0, len = triggers.length; i < len; i++) {
  triggers[i].addEventListener("click", toggleModal);
}
closeButton.addEventListener("click", toggleModal);