'use strict';
const cardsTemplate = document.querySelector('#element-tamp').content;
const element = document.querySelector('.element');
const elementImage = document.querySelector('.element__image');
const elementCaption = document.querySelector('.element__caption');
const PopupName = document.querySelector('.profile__name');
const PopupDiscription = document.querySelector('.profile__discription');

const profilePopup = document.querySelector('#profilePopup');
const profileClose = document.querySelector('#profileClose');
const addCardsPopup = document.querySelector('#addCardsPopup');
const popupImage = document.querySelector('.popup__image');

const cardsClose = document.querySelector('#cardsClose');
const elementsList = document.querySelector('.elements__list');

const profileButtonEdit = document.querySelector('.profile__button-edit');
const profileButtonAdd = document.querySelector('.profile__button-add');
const imagesButtonClose = document.querySelector('#images_button-close');

const discription = document.querySelector('#discription');
const profileName = document.querySelector('#profileName');
const profileEdit = document.querySelector('#profileEdit');
const cardsEdit = document.querySelector('#cardsEdit')

const popupFigcaption = document.querySelector('.popup__figurecaption')


// Открыть закрыть popup

function openPopup (popup) {
  popup.classList.add('popup_opened');
};
function closePopup (popup) {
  popup.classList.remove('popup_opened');
};

profileButtonEdit.addEventListener('click', function () {
  PopupName.value = profileName.textContent;
  PopupDiscription.value = discription.textContent;
  openPopup (profilePopup);
});


profileButtonAdd.addEventListener('click', function () {
  openPopup (addCardsPopup);
});

const popups = document.querySelectorAll('.popup')

popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
       if (evt.target.classList.contains('popup__button-close')) {
          closePopup(popup)
        }
    })
});

// Редактировать профиль

profileEdit.addEventListener('submit', function (evt) {
  evt.preventDefault();
  PopupName.textContent = profileName.value;
  PopupDiscription.textContent =discription.value;

  closePopup(profilePopup);
});

//Добавление место

function addNewCards (name, link) {
  const newCardsBody = cardsTemplate.cloneNode (true);
  const elementCaption = newCardsBody.querySelector('.element__caption')
  const elementImage = newCardsBody.querySelector('.element__image')

  elementImage.alt = elementCaption.textContent = name;
  elementImage.src = link;

  const deleteButton = newCardsBody.querySelector('.element__button-trash');
    deleteButton.addEventListener('click', function () {
    deleteButton.closest('.element').remove();
    })


  const elementButtonLike = newCardsBody.querySelector('.element__button-like');
    elementButtonLike.addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__button-like_active')
      })

  newCardsBody.querySelector('.element__image').addEventListener ('click', function (evt) {
    popupImage.src = evt.target.src;
      popupFigcaption.textContent = popupImage.alt = evt.target.alt;
      openPopup (imagePopup);
      });


    return (newCardsBody);
}

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  }
];

initialCards.forEach(function (initialCards) {
  const cardsElement = addNewCards (initialCards.name, initialCards.link);
  renderNewCards(cardsElement);
});

function renderNewCards (newCards) {
  elementsList.prepend(newCards);

};

cardsEdit.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const elementsList = addNewCards (titleCards.value, urlCards.value);
  renderNewCards(elementsList);
  closePopup(addCardsPopup);
  titleCards.value = '';
  urlCards.value = '';
});
