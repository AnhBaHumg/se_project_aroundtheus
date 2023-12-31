import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super({ popupSelector });
        this._popupImage = this._popupElement.querySelector(".modal__image-popup");
        this._popupTitle = this._popupElement.querySelector(".modal__title-popup");
    }
    open({ name, link }) {
        this._popupImage.src = link;
        this._popupImage.alt = name;
        this._popupTitle.textContent = name;
        super.open();
    }
}