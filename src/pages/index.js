import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import '../pages/index.css'
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import { initialCards, config, variable } from "../utils/constants.js";

function handleImageClick (cardData) {
  popupWithImage.open(cardData);
}

function renderCard(cardData) {
  const card = new Card(cardData, "#card-template", handleImageClick);
  section.addItem(card.getView()); 
}

function handleAddCardFormSubmit(inputValues) {
  renderCard(inputValues);
  variable.addCardModal.reset();
  cardFormFormValidator.toggleButtonState();
  formPopup.close();
}

//FormValidator
const profileEditModalFormValidator = new FormValidator(variable.profileEditModal, config);
const cardFormFormValidator = new FormValidator(variable.cardForm, config);

profileEditModalFormValidator.enableValidation();
cardFormFormValidator.enableValidation();

//PopupWithForm

const formPopup = new PopupWithForm(variable.addCardModal, handleAddCardFormSubmit);

function openAddForm() {
  formPopup.open();
}

formPopup.setEventListeners();

const editPopup = new PopupWithForm(
  variable.profileEditModal,
  handleProfileEditSubmit
);

function openEditForm() {
  const user = userInfo.getUserInfo();
  variable.profileTitleInput.value = user.name;
  variable.profileDescriptionInput.value = user.description;
  editPopup.open();
}

editPopup.setEventListeners();

variable.profileEditButton.addEventListener("click", () => {
  openEditForm();
});

variable.addNewCardButton.addEventListener("click", () =>
  openAddForm()
);



//PopupWithImage

const popupWithImage = new PopupWithImage("#image-popup");
popupWithImage.setEventListeners();

//Section
const section = new Section({
  items: initialCards,
  renderer: (cardData) => {
    renderCard(cardData);
  },
},
"cards__list");

section.renderItems();
//UserInfo

const userInfo = new UserInfo(".profile__title", ".profile__description");
function handleProfileEditSubmit(inputValues) {
  userInfo.setUserInfo(inputValues.name, inputValues.description);
  editPopup.close();
}