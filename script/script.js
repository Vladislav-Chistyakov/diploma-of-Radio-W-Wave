function output() {
  btnHeader();
  openingAdditionalPodcasts();
  renderingGuestInformation();
  validateForm();
  swiper();
  svg();
}

function btnHeader() {
  const body = document.body;
  const btnOpenBurger = body.querySelector(".block-burger__btn-burger");
  const burgerBlock = body.querySelector(".block-burger-menu");
  const btnCloseBurger = body.querySelector(".container-top-burger__btn-close");

  const btnSearch = body.querySelector(".right-header__search-btn");
  const inputSearc = body.querySelector(".right-header__input-searc");
  const blockSearch = body.querySelector(".right-header__block-search");

  btnOpenBurger.addEventListener("click", () => {
    burgerBlock.classList.add("activ-block-burger");
  })

  btnCloseBurger.addEventListener("click", () => {
    burgerBlock.classList.remove("activ-block-burger");
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

  function clickBtnEther() {
    let btn =  document.body.querySelector(".header-botton__ether-btn");
    let headerBotton =  document.body.querySelector(".section-header-botton");
    btn.addEventListener("click", () => {
      btn.classList.toggle("header-botton__ether-btn-active");
      headerBotton.classList.toggle("section-header-botton-active");
    })

//#F5F6F7
  }
  clickBtnEther()
}

function openingAdditionalPodcasts() {
  const btnPodcasts = document.body.querySelector(".podcasts-section__btn");
  btnPodcasts.addEventListener("click", () => {
    let podcasts = document.body.querySelectorAll(".podcast-list__item");
    for (let i = 0; i < podcasts.length; i++) {
      if (window.innerWidth < 576) {
        podcasts[i].style.display = "block";
      } else {
        podcasts[i].style.display = "flex";
      }
    }
  })
}

function renderingGuestInformation() {

  let header = document.body.querySelector(".guest-block-rigth__heading-name");
  let comment = document.body.querySelector(".guest-block-rigth__info-person");
  let btnPerson = document.body.querySelectorAll(".guest-item-blogers__item-btn");

  let imgGuestDecstop = document.body.querySelector(".guest-block-rigth__source-1024px");
  let imgGuestMedium = document.body.querySelector(".guest-block-rigth__source-576px");
  let imgGustMobile = document.body.querySelector(".guest-block-rigth__img-qu");

  let infoGuests = {
    name: ["Ольга Мартынова", "Сергей Денисов", "Евгений Войновский", "Матвей Мечников", "Константин Прусино", "Дмитрий Михалок", "Иван Калитников", "Пётр Пиотровский", "Денис Тельман", "Юрий Горин", "Олег Свиридовский", "Владислав Кауперс", "Михаил Пожитников", "Максим Сергеев",  "Георгий Полуян"],
    comment: ["Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты «Коммерсантъ». Ведёт активную блогерскую деятельность как куратор музея «Гараж», коим является с 2016 года.", "Просто Сергей", "Просто Евгений", "Просто Матвей", "Просто Константин", "Просто Дмитрий", "Просто Иван", "Просто Пётр", "Просто Сергей", "Просто Денис", "Просто Юрий", "Просто Олег", "Просто Кауперс", "Просто Пожитников", "Просто Полуян", "Просто Максим Сергеев" ],
    image: [["./img/guests/Olga-Martinova-1024px.jpg", "./img/guests/Olga-Martinova-576px.jpg", "./img/guests/Olga-Martinova.jpg"], ["./img/guests/background-auto-1024px.jpg", "./img/guests/background-auto-576px.jpg", "./img/guests/background-auto.jpg"]],
  }

  for (let i = 0; i < btnPerson.length; i++) {
    btnPerson[i].addEventListener("click", () => {
      let imgNumber = searchHuestInformation(btnPerson[i].textContent, infoGuests)[2];

      header.textContent = searchHuestInformation(btnPerson[i].textContent, infoGuests)[0];
      comment.textContent = searchHuestInformation(btnPerson[i].textContent, infoGuests)[1];
      for (let i = 0; i < 3; i++) {
        if (i === 0) {
          imgGuestDecstop.srcset = infoGuests.image[imgNumber][i];
        } else if (i === 1) {
          imgGuestMedium.srcset = infoGuests.image[imgNumber][i];
        } else {
          imgGustMobile.srcset = infoGuests.image[imgNumber][i];
        }
      }
    })
  }

  function searchHuestInformation(guest, infoGuests) {
    let com;
    let img;
    let name = guest;
    let name2 = '';
    for (let i = 0; i < name.length; i++) {
      if (name[i] + name[i+1] !== "  " && name[i - 1] + name[i] !== "  ") {
          name2 =  name2 + name[i];
      }
    }
    name = "";
    for (let i = 0; i < name2.length; i++) {
      if (i !== 0 && i !== name2.length - 1) {
        name = name + name2[i];
      }
    }

    for (let i = 0; i < infoGuests.name.length; i++) {
      if (name === infoGuests.name[i]) {
        com = infoGuests.comment[i];
        if (i === 0) {
          img = 0;
          return [name, com, img];
        } else {
          img = 1;
          return [name, com, img];
        }
      }
    }
  }
}

function validateForm() {
  let texteria = document.querySelector(".about-form-block__texteria");
  let inputName = document.querySelector(".about-form-block__input-name");
  let inputEmail = document.querySelector(".about-form-block__input-email");
  let buttonSubmit = document.querySelector(".about-form-block__btn");

  // Значения в полях input
  let valueTexteria = "";
  let valueInputName = "";
  let valueInputEmail = "";

  texteria.addEventListener("input", () => {
    valueTexteria = texteria.value;
  })

  inputName.addEventListener("input", () => {
    inputName.value = inputName.value.replace(/[^а-я]/g, '');
    valueInputName = inputName.value;
  })

  inputEmail.addEventListener("input", () => {
    valueInputEmail = inputEmail.value;
  })

  buttonSubmit.addEventListener("click", (event) => {

    //Функция проверки на количество символов
    function checkingNumberCharacters() {
      let err = 0;
      if (valueTexteria.length < 5) {
        invaledInput(texteria, texteria.nextElementSibling);
        err = 1;
      } else {
        valedInput(texteria, texteria.nextElementSibling);
      }

      if (valueInputName.length < 2) {
        invaledInput(inputName, inputName.nextElementSibling);
        err = 1;
      } else {
        valedInput(inputName, inputName.nextElementSibling)

      }

      if (valueInputEmail.length < 8) {
        invaledInput(inputEmail, inputEmail.nextElementSibling);
        err = 1;
      } else {
        if (valueInputEmail.indexOf("@") < 0) {
          invaledInput(inputEmail, inputEmail.nextElementSibling);
          err = 1;
        } else {
          valedInput(inputEmail, inputEmail.nextElementSibling);
        }
      }
      return err;
    }

    checkingNumberCharacters();

    if (checkingNumberCharacters()) {
      event.preventDefault();
    }

    // Отрисовка стилей с ошибкой данных
    function invaledInput(input, span) {
      span.classList.add("span-invaled-active");
      input.classList.add("invalide-input");
    }

    // Отрисовка стилей с верными данными
    function valedInput(input, span) {
      span.classList.remove("span-invaled-active");
      input.classList.remove("invalide-input");
    }
  })
}

function swiper() {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    lazy: true,

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      // when window width is >= 768px
      768: {
        spaceBetween: 30,
      },

      // when window width is >= 1440px
      1440: {
        slidesPerView: 4,
        slidesPerGroup: 2,
        spaceBetween: 30
      }
    },
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
}

function svg() {
  let play = document.querySelectorAll(".play-block");
  let like = document.querySelectorAll(".like-block");
  let shared = document.querySelectorAll(".shared-block");
  let playHeader = document.querySelectorAll(".header-play-start");



  function clickElement(elementArray) {

    for (let i = 0; i < elementArray.length; i++) {
      elementArray[i].addEventListener("click", () => {

        let likeCkick = "<path d=\"M6.5 12L5.5575 11.1368C2.21 8.08283 0 6.06866 0 3.59673C0 1.58256 1.573 0 3.575 0C4.706 0 5.7915 0.5297 6.5 1.36676C7.2085 0.5297 8.294 0 9.425 0C11.427 0 13 1.58256 13 3.59673C13 6.06866 10.79 8.08283 7.4425 11.1433L6.5 12Z\" fill=\"#4F28A5\"/>"
        let like = "<path d=\"M9.425 0C8.294 0 7.2085 0.5297 6.5 1.36676C5.7915 0.5297 4.706 0 3.575 0C1.573 0 0 1.58256 0 3.59673C0 6.06866 2.21 8.08283 5.5575 11.1433L6.5 12L7.4425 11.1368C10.79 8.08283 13 6.06866 13 3.59673C13 1.58256 11.427 0 9.425 0ZM6.565 10.1689L6.5 10.2343L6.435 10.1689C3.341 7.35041 1.3 5.48665 1.3 3.59673C1.3 2.28883 2.275 1.3079 3.575 1.3079C4.576 1.3079 5.551 1.95531 5.8955 2.85123H7.111C7.449 1.95531 8.424 1.3079 9.425 1.3079C10.725 1.3079 11.7 2.28883 11.7 3.59673C11.7 5.48665 9.659 7.35041 6.565 10.1689Z\" fill=\"none\" />";

        let shared = "<path d=\"M10 9.18876C9.49333 9.18876 9.04 9.38454 8.69333 9.69127L3.94 6.98293C3.97333 6.83283 4 6.68273 4 6.5261C4 6.36948 3.97333 6.21938 3.94 6.06928L8.64 3.38705C9 3.71335 9.47333 3.91566 10 3.91566C11.1067 3.91566 12 3.04116 12 1.95783C12 0.874498 11.1067 0 10 0C8.89333 0 8 0.874498 8 1.95783C8 2.11446 8.02667 2.26456 8.06 2.41466L3.36 5.09689C3 4.77058 2.52667 4.56827 2 4.56827C0.893333 4.56827 0 5.44277 0 6.5261C0 7.60944 0.893333 8.48394 2 8.48394C2.52667 8.48394 3 8.28163 3.36 7.95532L8.10667 10.6702C8.07333 10.8072 8.05333 10.9508 8.05333 11.0944C8.05333 12.1451 8.92667 13 10 13C11.0733 13 11.9467 12.1451 11.9467 11.0944C11.9467 10.0437 11.0733 9.18876 10 9.18876ZM10 1.30522C10.3667 1.30522 10.6667 1.5989 10.6667 1.95783C10.6667 2.31677 10.3667 2.61044 10 2.61044C9.63333 2.61044 9.33333 2.31677 9.33333 1.95783C9.33333 1.5989 9.63333 1.30522 10 1.30522ZM2 7.17871C1.63333 7.17871 1.33333 6.88504 1.33333 6.5261C1.33333 6.16717 1.63333 5.87349 2 5.87349C2.36667 5.87349 2.66667 6.16717 2.66667 6.5261C2.66667 6.88504 2.36667 7.17871 2 7.17871ZM10 11.76C9.63333 11.76 9.33333 11.4664 9.33333 11.1074C9.33333 10.7485 9.63333 10.4548 10 10.4548C10.3667 10.4548 10.6667 10.7485 10.6667 11.1074C10.6667 11.4664 10.3667 11.76 10 11.76Z\"  fill=\"none\" />";
        let sharedClick = "<path d=\"M10 9.18876C9.49333 9.18876 9.04 9.38454 8.69333 9.69127L3.94 6.98293C3.97333 6.83283 4 6.68273 4 6.5261C4 6.36948 3.97333 6.21938 3.94 6.06928L8.64 3.38705C9 3.71335 9.47333 3.91566 10 3.91566C11.1067 3.91566 12 3.04116 12 1.95783C12 0.874498 11.1067 0 10 0C8.89333 0 8 0.874498 8 1.95783C8 2.11446 8.02667 2.26456 8.06 2.41466L3.36 5.09689C3 4.77058 2.52667 4.56827 2 4.56827C0.893333 4.56827 0 5.44277 0 6.5261C0 7.60944 0.893333 8.48394 2 8.48394C2.52667 8.48394 3 8.28163 3.36 7.95532L8.10667 10.6702C8.07333 10.8072 8.05333 10.9508 8.05333 11.0944C8.05333 12.1451 8.92667 13 10 13C11.0733 13 11.9467 12.1451 11.9467 11.0944C11.9467 10.0437 11.0733 9.18876 10 9.18876Z\" fill=\"#4F28A5\"/>";

        let pauseHeader = "<g clip-path=\"url(#clip0_24531_3491)\"> <path d=\"M12 2C6.475 2 2 6.475 2 12C2 17.525 6.475 22 12 22C17.525 22 22 17.525 22 12C22 6.475 17.525 2 12 2Z\" fill=\"#A1A6B4\"/> <rect x=\"9\" y=\"8\" width=\"2\" height=\"8\" rx=\"1\" fill=\"white\"/> <rect x=\"13\" y=\"8\" width=\"2\" height=\"8\" rx=\"1\" fill=\"white\"/> </g> <defs> <clipPath id=\"clip0_24531_3491\"> <rect width=\"24\" height=\"24\" fill=\"white\"/> </clipPath> </defs>";
        let playHeader = "<path d=\"M10 0C4.475 0 0 4.475 0 10C0 15.525 4.475 20 10 20C15.525 20 20 15.525 20 10C20 4.475 15.525 0 10 0ZM8 14.5V5.5L14 10L8 14.5Z\" fill=\"#A1A6B4\"/>";

        if (elementArray[i].matches(".click")) {

          if (elementArray[i].matches(".like-block")) {
            elementArray[i].firstElementChild.innerHTML = like;
          }

          if (elementArray[i].matches(".shared-block")) {
            elementArray[i].firstElementChild.innerHTML = shared;
          }

          elementArray[i].lastElementChild.textContent = Number(elementArray[i].lastElementChild.textContent) - 1;
          elementArray[i].lastElementChild.classList.remove("click");
          elementArray[i].firstElementChild.classList.remove("click-svg");
          elementArray[i].classList.remove("click");
        } else {

          if (elementArray[i].matches(".like-block")) {
            elementArray[i].firstElementChild.innerHTML = likeCkick;
          }

          if (elementArray[i].matches(".shared-block")) {
            elementArray[i].firstElementChild.innerHTML = sharedClick;
          }

          elementArray[i].lastElementChild.textContent = Number(elementArray[i].lastElementChild.textContent) + 1;
          elementArray[i].lastElementChild.classList.add("click");
          elementArray[i].firstElementChild.classList.add("click-svg");
          elementArray[i].classList.add("click");
        }

        if (elementArray[i].matches(".header-play-start")) {
          if (elementArray[i].lastElementChild.matches(".pause")) {
            elementArray[i].lastElementChild.classList.remove("pause");
            elementArray[i].lastElementChild.classList.remove("pause-svg");
            elementArray[i].lastElementChild.innerHTML = playHeader;
          } else {
            elementArray[i].lastElementChild.classList.add("pause");
            elementArray[i].lastElementChild.classList.add("pause-svg");
            elementArray[i].lastElementChild.innerHTML = pauseHeader;
          }
        }

      })
      elementArray[i]
    }
  }

  clickElement(like);
  clickElement(play);
  clickElement(shared);
  clickElement(playHeader);

}



output();














