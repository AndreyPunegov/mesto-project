"use strict";
const cardsTemplate = document.querySelector("#element-tamp").content;
const element = cardsTemplate.querySelector(".element");
const elementImage = cardsTemplate.querySelector(".element__image");
const elementCaption = cardsTemplate.querySelector(".element__caption");
const profile = document.querySelector("#profile");
const profileClose = document.querySelector("#profileClose");
const addCards = document.querySelector("#addCards");
const cardsClose = document.querySelector("#cardsClose");
const deleteButton = cardsTemplate.querySelector(".element__button-trash");
const elementButtonLike = document.querySelector(".element__button-like");
const elementsList = document.querySelector('.elements__list');

// Открыть закрыть popup

document.querySelector(".profile__button-edit").addEventListener("click", function () {
  profile.classList.add("popup_opened");
});

profileClose.addEventListener("click", exitProfile);
function exitProfile() {
  profile.classList.remove("popup_opened");
};

document.querySelector(".profile__button-add").addEventListener("click", function () {
  addCards.classList.add("popup_opened");
});

cardsClose.addEventListener("click", exitCsrds)
 function exitCsrds () {
  addCards.classList.remove("popup_opened");
};

// Удаление карточек

function deleteCard () {
  deleteButton.addEventListener("click", function () {
  const elementDelet = deleteButton.closest(".element");
  elementDelet.remove();
  })
};

// Кнопка нравится

function like () {
document.querySelector(".element__button-like").addEventListener("click", function (evt) {
  evt.target.classList.toggle("element__button-like_active")
  })
};

// Редактировать профиль

profile.addEventListener("submit", function formSubmitHandler(evt) {
  evt.preventDefault();
  document.querySelector(".profile__name").textContent = profileName.value;
  document.querySelector(".profile__discription").textContent =discription.value;
  exitProfile();
});

//Добавление место

// const initialCards = [
//   {
//     name: "Архыз",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
//   },
//   {
//     name: "Челябинская область",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
//   },
//   {
//     name: "Иваново",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
//   },
//   {
//     name: "Камчатка",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
//   },
//   {
//     name: "Холмогорский район",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
//   },
//   {
//     name: "Байкал",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
//   },
// ];


addCards.addEventListener("submit", function formSubmitHandler2 (evt) {
  evt.preventDefault();
  cardsTemplate.querySelector('.element__caption').textContent = titleCards.value;
  cardsTemplate.querySelector('.element__image').src = urlCards.value;
  const elementTamp = cardsTemplate.querySelector('.element').cloneNode(true);
  elementsList.prepend(elementTamp);

  exitCsrds();
  like();
  deleteCard();
});

// for (let i = 0; i <=5; i++) {
// element.prepend(i);
// };
