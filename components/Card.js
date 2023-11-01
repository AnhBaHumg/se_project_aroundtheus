export default class Card {
    constructor({ name, link }, cardSelector, handleImageClick) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
        this._handleImageClick = handleImageClick;
    }

    _setEventListeners() {
        //.card__like-button
        this._cardElement.querySelector(".card__like-button").addEventListener("click", () => {
            this._handleLikeIcon();
        });
        //.card__trash-button
        this._cardElement.querySelector(".card__trash-button").addEventListener("click", () => {
            this._handleDeleteCard();
        });
        //.card__image
        this._cardImageEl.addEventListener("click", () => {
            this._handleImageClick(this);
        });
    }

    _handleLikeIcon() {
        this._cardElement
          .querySelector(".card__like-button").classList.toggle("card__like-button-active");
    }
    _handleDeleteCard() {
        this._cardElement.remove();
        this._cardElement = null;
    }

    getView() {
        this._cardElement = document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(true);
        //get the card view
        this._cardTitleEl = this._cardElement.querySelector(".card__name");
        this._cardImageEl = this._cardElement.querySelector(".card__image");
        this._cardImageEl.alt = this._name;
        this._cardImageEl.src = this._link;
        this._cardTitleEl.textContent = this._name;
        //set event listeners
        this._setEventListeners();
        //return the card
        return this._cardElement;
    }
}