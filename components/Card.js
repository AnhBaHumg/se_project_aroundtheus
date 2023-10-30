export default class Card {
    constructor({ name, link }, cardSelector, handleImageClick, handleLikeIcon, handleDeleteCard) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
        this._handleImageClick = handleImageClick;
        this._handleLikeIcon = handleLikeIcon;
        this._handleDeleteCard = handleDeleteCard;
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
        this._cardElement.querySelector(".card__image").addEventListener("click", () => {
            this._handleImageClick(this);
        });
    }

    _handleLikeIcon() {
        this._cardElement
          .querySelector(".card__like-button").classList.toggle("card__like-button_active");
    }
    _handleDeleteCard() {
        this._cardElement.remove();
        this._cardElement = null;
    }
    _handleImageClick() {
        this._cardElement.querySelector(".card__image").classList.add("modal_opened");
    }

    getView() {
        const cardData = { link: this._link, name: this._name };
        this._cardElement = document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(true);
        //get the card view
        const cardImageEL = this._cardElement.querySelector(".card__image");
        cardImageEL.src = this._link;
        cardImageEL.alt = this._name;
        const cardTitleEL = this._cardElement.querySelector(".card__name");
        cardTitleEL.textContent = cardData.name;
        //set event listeners
        this._setEventListeners();
        //return the card
        return this._cardElement;
    }
}