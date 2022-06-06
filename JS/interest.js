// introduce js

new Swiper('.mainVisual .swiper', {
  sildesPerView: 1
  , spaceBetween: 0
  , centeredSildes: true
  , loop: true
  , autoplay: {
    delay: 4000
    , disableOnInteraction: false
  }
  , pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".mainVisual .swiper-next",
    prevEl: ".mainVisual .swiper-prev",
  },
});

// climbing
let random = Math.random() + 1;
gsap.to('#cloud', {duration: random, y: 20, repeat: -1, yoyo: true, ease: "Back.easeInOut"});

// toggle
const [...subInfos] = document.querySelectorAll('.content-box');
const [...subInfoToggleBtns] = document.querySelectorAll('.subInfo-line');
const [...rotate] = document.querySelectorAll('.subInfo-line .material-icons');
let subInfosIndex = subInfos.length;
subInfoToggleBtns.forEach((className) => {
  className.addEventListener('click', (btn) => {
    for(let i = 0; i < subInfosIndex; i++){
      if(btn.target === className.children[i]){
        subInfos[i].classList.toggle('hide');
        window.scrollTo({
          top: 636
          , behavior: "smooth"
        })
      } else {
        subInfos[i].classList.add('hide');
      }
      if(subInfos[i].className.indexOf('hide') > -1){
        rotate[i].classList.remove('rotate');
      } else {
        rotate[i].classList.add('rotate');
      }
    }
  });
});


const toTopEl = document.querySelector('#toTop');
window.addEventListener('scroll', () => {
  if(window.scrollY > 100){
    toTopEl.style.display = 'block';
    gsap.to(toTopEl, {
      x: 0
    });
  } 
  else {
    gsap.to(toTopEl, {
      x: 200
    });
  }
});

toTopEl.addEventListener('click', () => {
  window.scrollTo({
    top: 0
    , behavior: "smooth"
  })
});