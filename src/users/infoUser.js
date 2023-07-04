export const userInfo = document.createElement("div");
export const userInfoClose = document.createElement("span");
export const userInfoBody = document.createElement("div");
export const userInfoContent = document.createElement("div");
export const userInfoName = document.createElement("div");
export const userInfoSurname = document.createElement("div");
export const userInfoAge = document.createElement("div");
export const userInfoEmail = document.createElement("div");
export const userInfoPhone = document.createElement("div");

export const createUserInfo = () => {
    userInfo.classList.add("user-info");

    userInfoBody.classList.add("user-info__body");

    userInfoContent.classList.add("user-info__content");

    userInfoClose.classList.add("user-info__close");
    userInfoClose.innerText = "X";

    userInfoContent.append(userInfoClose);

    userInfoName.classList.add("user-info__name");

    userInfoContent.append(userInfoName);

    userInfoSurname.classList.add("user-info__surname");

    userInfoContent.append(userInfoSurname);

    userInfoAge.classList.add("user-info__age");

    userInfoContent.append(userInfoAge);

    userInfoEmail.classList.add("user-info__email");

    userInfoContent.append(userInfoEmail);

    userInfoPhone.classList.add("user-info__phone");

    userInfoContent.append(userInfoPhone);
    userInfoBody.append(userInfoContent);
    userInfo.append(userInfoBody);
    document.body.append(userInfo);
}