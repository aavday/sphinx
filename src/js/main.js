// Burger Menu

const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav__menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
});

// Product card categories

const productCardCategory = document.querySelectorAll('.product-card-category');

productCardCategory.forEach(tag => {
  tag.addEventListener('click', () => {
    tag.classList.toggle('active');
    tag.nextElementSibling.classList.toggle('active');
  });
});

// Sliders

$('.intro__slider').owlCarousel({
  loop: true,
  dots: false,
  items: 1
});


$('.feedback__slider').owlCarousel({
    loop: true,
    margin: 15,
    responsive: {
      0: {
        items: 1
      },

      800: {
        items: 2,
      },

      1200: {
        items: 3
      }
    }
});

$('.about-company__video-slider').owlCarousel({
  loop: true,
  nav: true,
  margin: 15,
  dots: false,
  responsive: {
    0: {
      items: 1
    },

    992: {
      items: 2
    }
  }
});
