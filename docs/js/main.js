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
const searchElement = document.querySelector('.search');
const searchIcon = searchElement.querySelector('a');

searchElement.addEventListener('click', function(event) {
  if (!searchElement.classList.contains('active')) {
    event.preventDefault(); 
    searchElement.classList.add('active');
  }
});

document.addEventListener('click', function(event) {
  if (!searchElement.contains(event.target)) {
    searchElement.classList.remove('active'); 
  }
});
//end search


document.addEventListener("DOMContentLoaded", function() {
  // First Slider
  const mainSwiper = new Swiper('.swiper-container-primary', {
    slidesPerView: 1.1,
    spaceBetween: 30,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next-primary',
      prevEl: '.swiper-button-prev-primary',
    },
    pagination: {
      el: '.swiper-pagination-primary',
      clickable: true,
    },
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
    },
  });

  // Second Slider
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
    pagination: {
      el: '.swiper-pagination-secondary',
      clickable: true,
    },
    breakpoints: {
      992: { slidesPerView: 5 },
    },
  });
});





const playButton = document.querySelector('.play-btn');
const videoCover = document.querySelector('.video-cover');
const videoPlayer = document.querySelector('#video-player');

playButton.addEventListener('click', function() {
  videoCover.style.display = 'none';      // Скрываем обложку
  playButton.style.display = 'none';      // Скрываем кнопку play
  videoPlayer.style.display = 'block';    // Показываем видео
  videoPlayer.play();                     // Запускаем видео
});


//start footer mobile
document.addEventListener("DOMContentLoaded", function() {
  const menuTitles = document.querySelectorAll('.footer__menu-title');

  menuTitles.forEach((title, index) => {
    title.addEventListener('click', function() {
      // Если это заголовок третьей колонки
      if (index === 2) {
        // Добавляем/удаляем класс 'active' у третьей и четвертой колонок
        const thirdCol = document.querySelector('.footer__menu-col:nth-child(3)');
        const fourthCol = document.querySelector('.footer__menu-col:nth-child(4)');
        
        thirdCol.classList.toggle('active');
        fourthCol.classList.toggle('active');
      } else {
        // Обычное поведение для всех остальных заголовков
        this.parentElement.classList.toggle('active');
      }
    });
  });
});

//end footer mobile