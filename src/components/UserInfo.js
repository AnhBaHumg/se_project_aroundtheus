export default class UserInfo {
    constructor(profileTitle, profileDescription) {
        this._titleElement = document.querySelector(profileTitle);
        this._descriptionElement = document.querySelector(profileDescription);
    }
  
    getUserInfo() {
        const userInfo = {
            name: this._titleElement.textContent,
            description: this._descriptionElement.textContent,
        };
        return userInfo;
    }
    setUserInfo(name, description) {
        this._titleElement.textContent = name;
        this._descriptionElement.textContent = description;
    }
}