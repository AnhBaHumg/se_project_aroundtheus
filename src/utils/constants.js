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
export const addCardModal = document.querySelector("#add-card-modal");
export const cardForm = addCardModal.querySelector(".modal__form");
export const profileEditModal = document.querySelector("#profile-edit-modal");
export const variable = {
//Wrappers
cardListEl: document.querySelector(".cards__list"),
addCardForm: document.querySelector("#add-card-form"),




//Buttons and other Dom nodes
profileEditButton: document.querySelector("#profile-edit-button"),
profileCloseButton: "#profile-close-button",
addCardCloseButton: "#addcard-close-button",
profileTitle: document.querySelector(".profile__title"),
profileDescription: document.querySelector(".profile__description"),
addNewCardButton: document.querySelector(".profile__add-button"),
avatarCloseButton: document.querySelector("#update-avatar-close-button"),

//Form data
profileTitleInput: document.querySelector("#profile-title-input"),
profileDescriptionInput: document.querySelector("#profile-description-input"),

cardTitleInput: "#title-card-input",
cardUrlInput: "#url-image-input",

//Immage popup
popupModal: document.querySelector("#image-popup"),
popupImage: "#modal-image-popup",
popupTitle: "#modal-title-popup",
popupImageModalClose: document.querySelector("#image-popup-close-button"),
deleteCardPopup: "#delete-card-modal",
}