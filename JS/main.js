// main js

const fadeEls = document.querySelectorAll(".container .fade-in");
fadeEls.forEach((fadeEl, index) =>{
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});
