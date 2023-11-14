export default class UserInfo {
    constructor(profileTitle, profileDescription) {
        this._titleElement = document.querySelector(profileTitle);
        this._descriptionElement = document.querySelector(profileDescription);
    }
  
    getUserInfo() {
        const userInfo = {
            name: this._titleElement.textContent,
            job: this._descriptionElement.textContent,
        };
        return userInfo;
    }
    setUserInfo(name, job) {
        this._titleElement.textContent = name;
        this._descriptionElement.textContent = job;
    }
}