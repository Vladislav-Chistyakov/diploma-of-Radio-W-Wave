function output() {
  btnHeader();
  openingAdditionalPodcasts();
  renderingGuestInformation();
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

  let infoGuests = {
    name: ["Ольга Мартынова", "Сергей Денисов", "Евгений Войновский", "Матвей Мечников", "Константин Прусино", "Дмитрий Михалок", "Иван Калитников", "Пётр Пиотровский", "Денис Тельман", "Юрий Горин", "Олег Свиридовский", "Владислав Кауперс", "Михаил Пожитников", "Георгий Полуян", "Максим Сергеев" ],
    comment: ["Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты «Коммерсантъ». Ведёт активную блогерскую деятельность как куратор музея «Гараж», коим является с 2016 года.", "Просто Сергей", "Просто Евгений", "Просто Матвей", "Просто Константин", "Просто Дмитрий", "Просто Иван", "Просто Пётр", "Просто Сергей", "Просто Денис", "Просто Юрий", "Просто Олег", "Просто Кауперс", "Просто Пожитников", "Просто Полуян", "Просто Максим Сергеев" ],
    image: [],
  }


  //console.log(searchHuestInformation(guests, infoGuests))

  for (let i = 0; i < btnPerson.length; i++) {
    btnPerson[i].addEventListener("click", () => {
      searchHuestInformation(btnPerson[i].textContent, infoGuests);
    })
  }

  function searchHuestInformation(guest, infoGuests) {
    let com;
    let name = guest;
    let name2 = '';
    for (let i = 0; i < name.length; i++) {
      if (name[i] !== name[i + 1] && (name[i] !== " " && name[i + 1] !== name[i])) {
        console.log(name2);

        name2 =  name2 + name[i];
        console.log(name2 + '/n/n');

      }
    }

    for (let i = 0; i < infoGuests.name.length; i++) {
      if (name2 === infoGuests.name[i]) {
        com = infoGuests.comment[i];
        console.log(com);
        return name2, com;
      }
    }
  }



}

output();













