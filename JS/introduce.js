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

// toggle
const [...subInfos] = document.querySelectorAll('.content-box');
const [...subInfoToggleBtns] = document.querySelectorAll('.subInfo-line');
let subInfosIndex = subInfos.length;
subInfoToggleBtns.forEach((className) => {
  className.addEventListener('click', (btn) => {
    for(let i = 0; i < subInfosIndex; i++){
      if(btn.target === className.children[i]){
        subInfos[i].classList.toggle('hide');
      } else {
        subInfos[i].classList.add('hide');
      }
    }
  });
});

// colorChips
const [...colorChipEls] = document.querySelectorAll('.colorChip-box div');
colorChipEls.forEach((idName) => {
  const chipsParent = idName.parentNode.parentNode;
  const chipsImg = idName.parentNode.nextElementSibling.children;

  idName.addEventListener('click', (event) => {
    switch(event.target){
      case colorChip1:
        chipsParent.style = 'background-color: #4D836C';
        chipsImg[0].classList.add('show');
        break;
      case colorChip2:
        chipsParent.style = 'background-color: #E64E67';
        chipsImg[1].classList.add('show');
        break;
      case colorChip3:
        chipsParent.style = 'background-color: #FEB100';
        chipsImg[2].classList.add('show');
        break;
    }
    const showEl = document.getElementsByClassName('show');
    for(let i = 0; i < chipsImg.length; i++){
      if(showEl.length > 1){
        if(event.target.id != 'colorChip'+[i+1]){
          chipsImg[i].classList.remove('show');
        }
      }
    }
  }, colorChip1);
});
