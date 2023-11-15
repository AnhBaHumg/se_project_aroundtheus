import Card from "../components/Card..js";
import FormValidator from "../components/FormValidator.js";
import "../pages/index.css";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import {
  initialCards,
  config,
  variable,
  cardForm,
  profileEditModal,
  addCardModal
} from "../utils/constants.js";

function handleImageClick(cardData) {
  popupWithImage.open(cardData);
}

function createCard(item) {
  const cardElement = new Card(item, "#card-template", handleImageClick);
  return cardElement.getView()
}

function renderCard(cardData) {
  const card = createCard(cardData);
  section.addItem(card);
}

function handleAddCardFormSubmit(inputValues) {
  renderCard(inputValues);
  variable.addCardForm.reset();
  cardFormFormValidator.changeButtonState();
  cardPopup.close();
}

//FormValidator
const profileEditModalFormValidator = new FormValidator(profileEditModal,config);
const cardFormFormValidator = new FormValidator(cardForm, config);

profileEditModalFormValidator.enableValidation();
cardFormFormValidator.enableValidation();

//PopupWithForm

const cardPopup = new PopupWithForm("#add-card-modal", handleAddCardFormSubmit);

function openAddForm() {
  cardPopup.open();
}

cardPopup.setEventListeners();

const editPopup = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileEditSubmit
);

function openEditForm() {
  const user = userInfo.getUserInfo();
  variable.profileTitleInput.value = user.name;
  variable.profileDescriptionInput.value = user.description;
  editPopup.open();
}

editPopup.setEventListeners();


variable.profileEditButton.addEventListener("click", openEditForm);

variable.addNewCardButton.addEventListener("click", openAddForm); 

//PopupWithImage

const popupWithImage = new PopupWithImage("#image-popup");
popupWithImage.setEventListeners();

//Section
const section = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      renderCard(cardData);
    },
  },
  "cards__list"
);

section.renderItems();
//UserInfo

const userInfo = new UserInfo(".profile__title", ".profile__description");
function handleProfileEditSubmit(inputValues) {
  userInfo.setUserInfo(inputValues.name, inputValues.description);
  editPopup.close();
}
