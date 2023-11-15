import Popup from './Popup';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super({ popupSelector });
        this._popupForm = this._popupElement.querySelector(".modal__form");
        this._handleFormSubmit = handleFormSubmit;
        this._inputEls = [...this._popupForm.querySelectorAll(".modal__input")];
    }
    
    setEventListeners() {
        this._popupElement.addEventListener("submit", () => {
            this._handleFormSubmit(this._getInputValues());
        });
        super.setEventListeners();
    }


    _getInputValues() {
        const inputValues = {};
        this._inputEls.forEach((inputElement) => {
        inputValues[inputElement.name] = inputElement.value;
        });
        return inputValues;
    }
}