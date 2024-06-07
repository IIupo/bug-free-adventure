let swiper = null;

function sliderStart() {
  if (!swiper) {
    swiper = new Swiper(".swiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        sliderCardPerView: "auto",
      },
    });
  } else {
    swiper.disable();
    swiper = null;
  }
}

window.addEventListener("DOMContentLoaded", function () {
  if (window.matchMedia("(max-width: 768px)").matches) {
    sliderStart();
  } else {
    swiper.disable();
    swiper = null;
  }
});

let seeMore = document.querySelector(".see-more");
let sliderCard = document.querySelectorAll(".profit-card-item");

seeMore.addEventListener("click", function () {
  if (window.matchMedia("(max-width: 1280px)").matches) {
    for (let i = 2; i < sliderCard.length; i++) {
      sliderCard[i].classList.toggle("display--block", true);
    }
  } else {
    for (let i = 3; i < sliderCard.length; i++) {
      sliderCard[i].classList.toggle("display--block", true);
    }
  }
});
