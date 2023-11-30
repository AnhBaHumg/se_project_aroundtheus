import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super({ popupSelector });
        this._popupForm = this._popupElement.querySelector(".modal__form");
        this._handleFormSubmit = handleFormSubmit;
        this._inputEls = [...this._popupForm.querySelectorAll(".modal__input")];
        this._submitButton = this._popupForm.querySelector(".modal__button");
        this._submitButtonText = this._submitButton.textContent;
    }
    
    setEventListeners() {
        this._popupElement.addEventListener("submit", () => {
            this._handleFormSubmit(this._getInputValues());
        });
        super.setEventListeners();
    }

    close() {
        this._popupForm.reset();
        super.close();
    }

    _getInputValues() {
        const inputValues = {};
        this._inputEls.forEach((inputElement) => {
          inputValues[inputElement.name] = inputElement.value;
        });
        return inputValues;
    }


    setLoading(isLoading) {
        if (isLoading) {
            this._submitButton.textContent = "loading...";
        } else {
            this._submitButton.textContent = this._submitButtonText;
        }
    }

    renderLoading() {
        const img = document.createElement("img");
        img.src = imageSrc;
        return img;
    }

    loadImage() {
        this.image = image;
        this._popupForm.append(image);
    }
}