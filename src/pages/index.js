import Card from "../components/Card..js";
import FormValidator from "../components/FormValidator.js";
import "../pages/index.css";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import Api from "../components/Api.js"
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import {
  initialCards,
  config,
  variable,
  cardForm,
  profileEditModal
} from "../utils/constants.js";

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "a5172d76-7206-4bb6-b609-2e8e17b83724",
    "Content-Type": "application/json",
  },
});

function handleImageClick(cardData) {
  popupWithImage.open(cardData);
}

function renderCard(item) {
  const card = new Card(item, "#card-template", handleImageClick, handleDeleteButton, handleLikeClick);
  return card.getView()
}




//FormValidator
const profileEditModalFormValidator = new FormValidator(profileEditModal,config);
const cardFormFormValidator = new FormValidator(cardForm, config);

profileEditModalFormValidator.enableValidation();
cardFormFormValidator.enableValidation();

//LikeCard
function handleLikeClick(card) {
  if (card.isLiked) {
    api
      .removeLike(card._id)
      .then(() => {
        card.handleLikeIcon();
      })
      .catch((err) => console.error(err));
  } else {
    api
      .likeCard(card._id)
      .then(() => {
        card.handleLikeIcon();
      })
      .catch((err) => console.error(err));
  }
}

//PopupWithForm

function openAddForm() {
  cardPopup.open();
}


const editPopup = new PopupWithForm("#profile-edit-modal", handleProfileEditSubmit);

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
let section;
api
  .getInitialCards()
  .then((cards) => {
    section = new Section(
      {
        items: cards,
        renderer: (cardData) => {
          const cardEl = renderCard(cardData);
          section.addItem(cardEl);
        },
      },
      "cards__list"
    );
    section.renderItems();
  })

  .catch((error) => {
    console.error(error);
  });

api
.getUserInfo()
  .then((user) => {
    userInfo.setUserInfo(user.name, user.about);
    userInfo.setAvatar(user.avatar);
  })
  .catch((err) => {
    console.error(err);
  });

//UserInfo

const userInfo = new UserInfo(".profile__title", ".profile__description", ".profile__image");
function handleProfileEditSubmit(inputValues) {
  editPopup.setLoading(true);
  api.editUserInfo(inputValues).then(() => {
    userInfo.setUserInfo(inputValues.name, inputValues.description);
    editPopup.close();
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    editPopup.setLoading(false);
  });
}

//EditAvatar

const updateAvatarForm = new PopupWithForm("#profile-image-modal", handleAvatarSubmit);
function handleAvatarSubmit(inputValues) {
  updateAvatarForm.setLoading(true);
  api.updateAvatar(inputValues.link).then((user) => {
    userInfo.setAvatar(user.avatar);
    updateAvatarForm.setLoading(false);
  });
  updateAvatarForm.close();
}

const editPencilIcon = document.querySelector("#avatar-edit-button");

editPencilIcon.addEventListener("click", () => {
  updateAvatarForm.open();
});

updateAvatarForm.setEventListeners();
//PopupWithConfirmation

const deleteCardPopup = new PopupWithConfirmation("#delete-card-modal");

function handleDeleteButton(cardID, card) {
  deleteCardPopup.open();
  deleteCardPopup.setSubmitAction(() => {
    api
      .deleteCard(cardID)
      .then(() => {
        card.handleDeleteCard();
        deleteCardPopup.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
      });
  });
}

deleteCardPopup.setEventListeners();



//addCard

const cardPopup = new PopupWithForm("#add-card-modal", handleAddCardFormSubmit);

// function renderCard(cardData) {
//   const card = createCard(cardData);
// }

function handleAddCardFormSubmit(inputValues) {
  cardPopup.setLoading(true);
  api.addNewCard(inputValues).then((card) => {
    const cardEl = renderCard(card);
    section.addItem(cardEl);
    cardPopup.close();
    cardPopup.setLoading(false);
  });
}
cardPopup.setEventListeners();
