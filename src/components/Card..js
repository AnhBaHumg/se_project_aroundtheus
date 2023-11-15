export default class Card {
  constructor(data, cardSelector, handleImageClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
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
    this._likeButton.addEventListener("click", this._handleLikeIcon);

    //.card__trash-button
    this._cardTrash.addEventListener("click", this._handleDeleteCard);

    //.card__image
    this._cardImageEl.addEventListener("click", () => {
      this._handleImageClick({ name: this._name, link: this._link });
    });
  }

  _handleLikeIcon() {
    this._likeButton.classList.toggle("card__like-button-active");
  }
  _handleDeleteCard() {
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
    //set event listeners
    this._setEventListeners();
    //return the card
    return this._element;
  }
}
