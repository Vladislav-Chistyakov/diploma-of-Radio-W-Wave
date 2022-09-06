function output() {
  btnHeader();
  openingAdditionalPodcasts();
  renderingGuestInformation();
  validateForm();
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
  let spanInvaled = document.querySelectorAll(".span-invaled");

  let valueTexteria = "";
  let valueInputName = "";
  let valueInputEmail = "";


  texteria.addEventListener("input", () => {
    valueTexteria = texteria.value;
  })

  inputName.addEventListener("input", () => {
    valueInputName = inputName.value;
  })

  inputEmail.addEventListener("input", () => {
    valueInputEmail = inputEmail.value;
  })

  buttonSubmit.addEventListener("click", (event) => {
    event.preventDefault();

    let arrayInputValue = [valueTexteria, valueInputName, valueInputEmail]
    let arrayInput = [texteria, inputName, inputEmail]


    console.log(event);
    console.log(valueInputEmail)
    console.log(valueInputName)
    console.log(valueTexteria)



    if (checkingForEmptiness(arrayInputValue, arrayInput)) {
      console.log("ОШИБКА!");
    }

    function checkingForEmptiness(array, arrayInput) {
      let err = 0;
      for (let i = 0; i < array.length; i++) {
        if (array[i] === "") {
          err = 1;
          console.log(arrayInput[i]);
          spanInvaled[i].classList.add("span-invaled-active");
          arrayInput[i].classList.add("invalide-input");
        }
      }
      return err;
    }

  })



}

output();














