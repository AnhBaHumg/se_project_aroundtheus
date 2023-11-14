import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import '../pages/index.css'
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import { initialCards, config } from "../utils/constants.js";


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

//PopupWithForm

//PopupWithImage

//Section

//UserInfo
