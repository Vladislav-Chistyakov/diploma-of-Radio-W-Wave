function output() {
  btnHeader();
  openingAdditionalPodcasts();
}

function btnHeader() {
  const body = document.body;
  const btnOpenBurger = body.querySelector(".block-burger__btn-burger");
  const burgerBlock = body.querySelector(".block-burger-menu");
  const btnCloseBurger = body.querySelector(".container-top-burger__btn-close");


  const btnEther = body.querySelector(".header-botton__ether-btn");
  const blockEther = body.querySelector(".section-header-audio");

  const btnSearch = body.querySelector(".right-header__search-btn");
  const inputSearc = body.querySelector(".right-header__input-searc");
  const blockSearch = body.querySelector(".right-header__block-search");

  btnOpenBurger.addEventListener("click", () => {
    burgerBlock.classList.add("activ-block");
  })

  btnCloseBurger.addEventListener("click", () => {
    burgerBlock.classList.remove("activ-block");
  })


  btnEther.addEventListener("click", () => {
    let status = 0;
    for (let arr of blockEther.classList) {
      if (arr !== "activ-flex") {
        status = 0;
      } else {
        status = 1;
      }
    }
    if (status === 1) {
      blockEther.classList.remove("activ-flex");
    } else {
      blockEther.classList.add("activ-flex");
    }
  })

  btnSearch.addEventListener("click", () => {
    if (inputSearc.classList[2] === undefined) {
      inputSearc.classList.add("right-header__input-searc-js");
      inputSearc.classList.add("activ-block");
      blockSearch.classList.add("right-header__block-search-js");
    } else {
      inputSearc.classList.remove("right-header__input-searc-js");
      blockSearch.classList.remove("right-header__block-search-js");
      setTimeout(() => inputSearc.classList.remove("activ-block"), 500);
    }
  })
}

function openingAdditionalPodcasts() {
  const btnPodcasts = document.body.querySelector(".podcasts-section__btn");
  btnPodcasts.addEventListener("click", () => {
    let podcasts = document.body.querySelectorAll(".podcast-list__item");
    for (let i = 0; i < podcasts.length; i++) {
      podcasts[i].style.display = "block";
    }
  })
}


output();














