export const initialCards = [
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

export const config = {
    formSelector: ".modal__form",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible",
};

//Wrappers
export const cardListEl = document.querySelector(".cards__list");
export const profileEditModal = document.querySelector("#profile-edit-modal");
export const addCardModal = document.querySelector("#add-card-modal");
export const cardForm = addCardModal.querySelector(".modal__form");


//Buttons and other Dom nodes
export const profileEditButton = document.querySelector("#profile-edit-button");
export const profileCloseButton = profileEditModal.querySelector("#profile-close-button");
export const addCardCloseButton = addCardModal.querySelector("#addcard-close-button");
export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(".profile__description");
export const addNewCardButton = document.querySelector(".profile__add-button");

//Form data
export const profileTitleInput = document.querySelector("#profile-title-input");
export const profileDescriptionInput = document.querySelector("#profile-description-input");

export const cardTitleInput = cardForm.querySelector("#title-card-input");
export const cardUrlInput = cardForm.querySelector("#url-image-input");

//Immage popup
export const popupModal = document.querySelector("#image-popup");
export const popupImage = popupModal.querySelector("#modal-image-popup");
export const popupTitle = popupModal.querySelector("#modal-title-popup");
export const popupImageModalClose = document.querySelector("#image-popup-close-button");

