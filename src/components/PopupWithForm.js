import Popup from './Popup';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super({ popupSelector });
        this._popupForm = this._popupElement.querySeletor('.modal__form');
        this._handleFormSubmit = handleFormSubmit;
        this._inputEls = [...this._form.querySelectorAll(".modal__input")];
    }
    
    setEventListeners() {
        this.popupElement.addEventListener("submit", () => {
            this._handleFormSubmit(this._getInputValues());
            this.close();
        });
        super.setEventListeners();
    }

    close() {
        this.popupForm.reset();
        super.close();
    }


    _getInputValues() {
        const inputValues = {};
        this._inputEls.forEach((inputElement) => {
        inputValues[inputElement.name] = inputElement.value;
        });
        return inputValues;
    }
}