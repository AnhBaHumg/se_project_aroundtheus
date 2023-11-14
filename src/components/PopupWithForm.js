import Popup from './Popup';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super({ popupSelector });
        this._popupForm = this._popupElement.querySeletor('.modal__form');
        this._handleFormSubmit = handleFormSubmit;
    }
    _getInputValues() {
        const _inputElements = Array.from(this._popupForm.querySelectorAll(".modal__input"));
        this._formValues = {};
        _inputElements.forEach((input) => {
            (this._formValues[input.name] = input.value)
        });

        return this._formValues;
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
}

