const body = document.body;
const btnOpenBurger = body.querySelector(".block-burger__btn-burger");
const burgerBlock = body.querySelector(".block-burger-menu");
const btnCloseBurger = body.querySelector(".container-top-burger__btn-close");

const btnEther = body.querySelector(".header-botton__ether-btn");
const blockEther = body.querySelector(".section-header-audio");


btnOpenBurger.addEventListener("click", () => {
  burgerBlock.classList.add("activ-block");
})

btnCloseBurger.addEventListener("click", () => {
  burgerBlock.classList.remove("activ-block");
})

btnEther.addEventListener("click", () => {
  let v = 0;
  for (let arr of blockEther.classList) {
    if (arr !== "activ-flex") {
      v = 0;
    } else {
      v = 1;
    }
  }
  if (v === 1) {
    blockEther.classList.remove("activ-flex");
  } else {
    blockEther.classList.add("activ-flex");
  }
})







