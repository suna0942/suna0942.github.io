const stepIcon = document.querySelectorAll('.step-icon');
window.onload = function(){
  moveStep();
};
let i = 0;
function moveStep(){
  let timeId = '';
  timeId = setInterval(() => {moveIcon(i)}, 1500);
  const moveIcon = () => {
    if(i < stepIcon.length){
      stepIcon[i].style.transform = 'translateX(20px)';
      if(i % 2 == 0)
        stepIcon[i].style.transform = 'rotate(-50deg)';
      else
        stepIcon[i].style.transform = 'rotate(50deg)';
      i++;
    } else {
      clearInterval(timeId);
    }
  };
};