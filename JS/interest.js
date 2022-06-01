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
// bowling
// const bowlingEls = document.querySelectorAll('.mainVisual .swiper-slide-active .bowling img');
// bowlingEls.forEach((bowlingEl, index) => {
//   gsap.to(bowlingEl, {delay: (index + 1) * .7, autoAlpha: 1});
// });

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

toTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0
    , behavior: "smooth"
  })
});

// // mbti
// const clickMBTI = document.querySelector('.mbti-table .clickMBTI');
// clickMBTI.addEventListener('click', () => {
//   const [...tdEls] = clickMBTI.firstElementChild.children;
//   clickMBTI.style.backgroundColor = '#7fc7cf';
//   clickMBTI.classList.add('change');
// });

// // colorChips
// const [...colorChipEls] = document.querySelectorAll('.colorChip-box div');
// colorChipEls.forEach((idName) => {
//   const chipsParent = idName.parentNode.parentNode;
//   const chipsImg = idName.parentNode.nextElementSibling.children;

//   idName.addEventListener('click', (event) => {
//     switch(event.target){
//       case colorChip1:
//         chipsParent.style = 'background-color: #4D836C';
//         chipsImg[0].classList.add('show');
//         break;
//       case colorChip2:
//         chipsParent.style = 'background-color: #E64E67';
//         chipsImg[1].classList.add('show');
//         break;
//       case colorChip3:
//         chipsParent.style = 'background-color: #FEB100';
//         chipsImg[2].classList.add('show');
//         break;
//     }
//     const showEl = document.getElementsByClassName('show');
//     for(let i = 0; i < chipsImg.length; i++){
//       if(showEl.length > 1){
//         if(event.target.id != 'colorChip'+[i+1]){
//           chipsImg[i].classList.remove('show');
//         }
//       }
//     }
//   }, colorChip1);
// });


const toTopEl = document.querySelector('#toTop');
window.addEventListener('scroll', () => {
  if(window.scrollY > 100){
    toTopEl.style.display = 'block';
    gsap.to(toTopEl, {
      x: 0
    });
  } else {
    toTopEl.style.display = 'none';
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