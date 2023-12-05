export default class Card {
  constructor(data, cardSelector, handleImageClick, handleDeleteSubmit, handleLikeClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardID = data.cardID;
    this._id = data._id;
    this.isLiked = data.isLiked;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleDeleteSubmit = handleDeleteSubmit;
    this._handleLikeClick = handleLikeClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    //.card__like-button
    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick(this);
    });


    //.card__trash-button
    this._cardTrash.addEventListener("click", () => {
      this._handleDeleteSubmit(this);
    });

    //.card__image
    this._cardImageEl.addEventListener("click", () => {
      this._handleImageClick({ name: this._name, link: this._link });
    });
  }

  isLiked() {
    return this.isLiked;
  }

  _setLikes() {
    if (this.isLiked) {
      this._likeButton.classList.add("card__like-button-active");
    } else {
      this._likeButton.classList.remove("card__like-button-active");
    }
  }

  handleDeleteSubmit() {
    const cardID = this.cardData;
    handleDeleteButton(cardID);
  }

  updateLikes(isLiked) {
    this.isLiked = isLiked;
    this._setLikes();
  }

  handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }

  getView() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector(".card__like-button");
    this._cardTrash = this._element.querySelector(".card__trash-button");
    this._cardImageEl = this._element.querySelector(".card__image");
    //get the card view
    this._cardImageEl.src = this._link;
    this._cardImageEl.alt = `Photo of ${this._name}`;
    this._element.querySelector(".card__name").textContent = this._name;
    this._setLikes();
    //set event listeners
    this._setEventListeners();
    //return the card
    return this._element;
  }
  getID() {
    return this._id();
  }
}