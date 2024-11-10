//start mobile menu
document.getElementById('menu-btn').addEventListener('click', function() {
    document.getElementById('header').classList.toggle('active');
  });
//end mobile menu

//start sticky header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 150) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
//end sticky header

//start search 
document.querySelector('.search').addEventListener('click', function() {
    this.classList.toggle('active');
  });
  
//end search



document.addEventListener("DOMContentLoaded", function() {
  // first slide
  const mainSwiper = new Swiper('.swiper-container', {
    slidesPerView: 1.1,
    spaceBetween: 30,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
    },
  });

  // second slide
  const secondarySwiper = new Swiper('.swiper-container-secondary', {
    slidesPerView: 2.1,
    spaceBetween: 10,
    loop: true,
    loopAdditionalSlides: 1,
    centeredSlides: false, 
    speed: 1000,
    effect: 'slide',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      992: { slidesPerView: 5 },
    },
  });
});
