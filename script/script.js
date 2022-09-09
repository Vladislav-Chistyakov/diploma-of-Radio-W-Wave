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


  function clickElement(elementArray) {
    console.log(elementArray)

    for (let i = 0; i < elementArray.length; i++) {
      elementArray[i].addEventListener("click", () => {
        elementArray[i].lastElementChild.textContent = Number(elementArray[i].lastElementChild.textContent) + 1;
        elementArray[i].classList.add("click");
      })
    }
  }

  clickElement(like);

}



output();














