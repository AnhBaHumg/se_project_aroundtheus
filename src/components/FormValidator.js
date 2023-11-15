export default class FormValidator {
    constructor(formEl, config) {
      this._formEl = formEl;
      this._formSelector = config.formSelector;
      this._inputSelector = config.inputSelector;
      this._submitButtonSelector = config.submitButtonSelector;
      this._inactiveButtonClass = config.inactiveButtonClass;
      this._inputErrorClass = config.inputErrorClass;
      this._errorClass = config.errorClass;
      this._submitButton = this._formEl.querySelector(this._submitButtonSelector);
    }
    
    _showInputError(inputElement) {
        const errorElement = this._formEl.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass); 
        errorElement.textContent = inputElement.validationMessage; 
        errorElement.classList.add(this._errorClass);
    }
    
    _hideInputError(inputElement) {
        const errorElement = this._formEl.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass); 
        errorElement.classList.remove(this._errorClass); 
        errorElement.textContent = ''; 
    }
    
    _checkValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement);
        } else {
            this._hideInputError(inputElement);
        }
    }
    
    _disableButton() {
        this._submitButton.classList.add(this._inactiveButtonClass);
        this._submitButton.disabled = true;
    }
    
    changeButtonState() {
        let foundInvalid = false;
        this._inputElements.forEach((inputElement) => {
            if (!inputElement.validity.valid) {
                foundInvalid = true;
            }
        });
        
        if (foundInvalid) {
            this._disableButton();
        } else {
            this._submitButton.classList.remove(this._inactiveButtonClass);
            this._submitButton.disabled = false;
        }
    }
    
    
    _setEventListeners() {
        this._inputElements = Array.from(this._formEl.querySelectorAll(this._inputSelector));
        this._inputElements.forEach((inputElement) => {
            inputElement.addEventListener("input", (event) => {
                this._checkValidity(inputElement);
                this.changeButtonState();
            });
        });
    }
    
    enableValidation() {
        this._formEl.addEventListener("submit", (event) => {
            event.preventDefault();
            this._disableButton();
        });
        this._setEventListeners();
    }
}