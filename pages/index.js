import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};


//Wrappers
const cardListEl = document.querySelector(".cards__list");
const profileEditModal = document.querySelector("#profile-edit-modal");
const addCardModal = document.querySelector("#add-card-modal");
const cardForm = addCardModal.querySelector(".modal__form");


//Buttons and other Dom nodes
const profileEditButton = document.querySelector("#profile-edit-button");
const profileCloseButton = profileEditModal.querySelector(
  "#profile-close-button"
);
const addCardCloseButton = addCardModal.querySelector("#addcard-close-button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const addNewCardButton = document.querySelector(".profile__add-button");

//Form data
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector("#profile-description-input");

const cardTitleInput = cardForm.querySelector("#title-card-input");
const cardUrlInput = cardForm.querySelector("#url-image-input");

//Immage popup
const popupModal = document.querySelector("#image-popup");
const popupImage = popupModal.querySelector("#modal-image-popup");
const popupTitle = popupModal.querySelector("#modal-title-popup");
const popupImageModalClose = document.querySelector(
  "#image-popup-close-button"
);

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener('keydown', closeByEscape);
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener('keydown', closeByEscape);
}

function renderCard(cardData) {
  const card = new Card(cardData, "#card-template", handleImageClick);
  return card.getView(); 
}

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(profileEditModal);
}

function handleAddCardFormSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  const cardEl = renderCard({ name, link }, cardListEl); 
  cardListEl.prepend(cardEl) 
  closeModal(addCardModal); 
  e.target.reset(); 
}

function handleImageClick(link, name) {
  openModal(popupModal);
  popupImage.src = link;
  popupImage.alt = name;
  popupTitle.textContent = name;
}

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(profileEditModal);
});


profileEditModal.addEventListener("submit", handleProfileEditSubmit);
cardForm.addEventListener("submit", handleAddCardFormSubmit);
//add new card button
addNewCardButton.addEventListener("click", () => openModal(addCardModal));

initialCards.forEach((data) => { 
  const cardEl = renderCard(data, cardListEl) 
  cardListEl.prepend(cardEl); 
});

const modals = document.querySelectorAll(".modal");

modals.forEach((modal) => {
  modal.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains('modal_opened')) {
      closeModal(modal);
  }
    if (evt.target.classList.contains('modal__close')) {
      closeModal(modal);
  }
  });
});

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const modal = document.querySelector('.modal_opened');
    closeModal(modal);
  }
}



//FormValidator
const profileEditModalFormValidator = new FormValidator(profileEditModal, config);
const cardFormFormValidator = new FormValidator(cardForm, config);

profileEditModalFormValidator.enableValidation();
cardFormFormValidator.enableValidation();