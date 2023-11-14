export default class Popup {
    constructor({ popupSelector}) {
        this.popupElement = document.querySelector(popupSelector);
        this._closeButton = this._popupSelector.querySelector(".modal__close");
    }
    
    open() {
        this._popupElement.classList.add("modal_opened");
        document.addEventListener("keydown", this._handleEscClose);
    }

    close() {
        this._popupElement.classList.remove("modal_opened");
        document.removeEventListener("keydown", this._handleEscClose);
    }

    _handleEscClose = (evt) => {
        if (evt.key === "Escape") {
            this.close();
        }
    };

    setEventListeners() {
        this._popupElement.addEventListener("mousedown", (event) => {
            if (event.target.classList.contains("modal_opened")) {
                this.close();
            }
        });
        this._closeButton.addEventListener("click", () => {
            this.close();
        });
    }
}