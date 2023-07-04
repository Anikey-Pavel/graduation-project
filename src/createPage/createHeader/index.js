export const formRegistration = document.createElement("div");
export const registrationName = document.createElement("input");
export const registrationSurname = document.createElement("input");
export const registrationAge = document.createElement("input");
export const registrationPhone = document.createElement("input");
export const registrationEmail = document.createElement("input");
export const registrationButton = document.createElement("button");
export const registrationPassword = document.createElement("input");
export const loginName = document.createElement("input");
export const loginEmail = document.createElement("input");
export const loginButton = document.createElement("button");
export const headerForm = document.createElement("div");
export const userName = document.createElement("div");
export const headerContainer = document.createElement("div");
export const userIcon = document.createElement("img");
export const user = document.createElement("div");
export const formLogin = document.createElement("form");

export const createHeader = (container) => {
    const todoHeader = document.createElement("header");
    todoHeader.classList.add("todo__header", "header");

    headerContainer.classList.add("header__container", "container");

    const headerLogo = document.createElement("div");
    headerLogo.classList.add("header__logo");

    const imgHeader = document.createElement("img");
    imgHeader.src = "./img/logo.png";
    imgHeader.alt = "logo";

    headerLogo.append(imgHeader);
    headerContainer.append(headerLogo);

    const headerTitle = document.createElement("div");
    headerTitle.classList.add("header__title");
    headerTitle.innerText = "TODOLIST";

    headerContainer.append(headerTitle);

    headerForm.classList.add("header__form", "form");

    const formTitle = document.createElement("button");
    formTitle.classList.add("form__title");
    formTitle.innerText = "Registration";

    formTitle.addEventListener("click", () => {
        document.body.classList.add("lock");
        formRegistration.classList.add("open");
    })

    headerForm.append(formTitle);

    formRegistration.classList.add("form__registration", "registration");

    const registrationBody = document.createElement("div");
    registrationBody.classList.add("registration__body");

    registrationBody.addEventListener("click", (e) => {
        if (e.target.className !== "registration__body") return;
        document.body.classList.remove("lock");
        formRegistration.classList.remove("open");
    })

    const registrationContent = document.createElement("form");
    registrationContent.classList.add("registration__content");

    const registrationClose = document.createElement("span");
    registrationClose.classList.add("registration__close");
    registrationClose.innerText = "X";

    registrationClose.addEventListener("click", () => {
        document.body.classList.remove("lock");
        formRegistration.classList.remove("open");
    })

    registrationContent.append(registrationClose);

    const registrationTitle = document.createElement("div");
    registrationTitle.classList.add("registration__title");
    registrationTitle.innerText = "Registration";

    registrationContent.append(registrationTitle);

    registrationName.classList.add("registration__name");
    registrationName.type = "text";
    registrationName.placeholder = "Name";
    registrationName.setAttribute("required", true);

    registrationContent.append(registrationName);

    registrationPassword.classList.add("registration__pass");
    registrationPassword.type = "password";
    registrationPassword.placeholder = "Password";
    registrationPassword.setAttribute("required", true);

    registrationContent.append(registrationPassword);

    registrationSurname.placeholder = "Surname";
    registrationSurname.type = "text";
    registrationSurname.classList.add("registration__surname");
    registrationSurname.setAttribute("required", true);

    registrationContent.append(registrationSurname);

    registrationAge.classList.add("registration__age");
    registrationAge.type = "tel";
    registrationAge.placeholder = "Age";
    registrationAge.setAttribute("required", true);

    registrationContent.append(registrationAge);

    registrationPhone.classList.add("registration__phone");
    registrationPhone.type = "tel";
    registrationPhone.placeholder = "Phone";
    registrationPhone.setAttribute("required", true);

    registrationContent.append(registrationPhone);

    registrationEmail.classList.add("registration__email");
    registrationEmail.type = "email";
    registrationEmail.placeholder = "Email";
    registrationEmail.setAttribute("required", true);

    registrationContent.append(registrationEmail);

    registrationButton.classList.add("registration__button");
    registrationButton.innerText = "Send";
    registrationButton.type = "submit";

    registrationContent.append(registrationButton);

    registrationBody.append(registrationContent);
    formRegistration.append(registrationBody);
    headerForm.append(formRegistration);

    const formTitleLogin = document.createElement("button");
    formTitleLogin.innerText = "Login";
    formTitleLogin.classList.add("form__title");

    headerForm.append(formTitleLogin);

    formTitleLogin.addEventListener("click", () => {
        document.body.classList.add("lock");
        formLogin.classList.add("open");
    })

    formLogin.classList.add("form__login", "login");

    const loginBody = document.createElement("div");
    loginBody.classList.add("login__body");

    loginBody.addEventListener("click", (e) => {
        if (e.target.className !== "login__body") return;
        document.body.classList.remove("lock");
        formLogin.classList.remove("open");
    })

    const loginContent = document.createElement("div");
    loginContent.classList.add("login__content");

    const loginClose = document.createElement("div");
    loginClose.classList.add("login__close");
    loginClose.innerText = "X";

    loginContent.append(loginClose);

    loginClose.addEventListener("click", () => {
        document.body.classList.remove("lock");
        formLogin.classList.remove("open");
    })

    const loginTitle = document.createElement("div");
    loginTitle.classList.add("login__title");
    loginTitle.innerText = "Login";

    loginContent.append(loginTitle);

    loginName.classList.add("login__name");
    loginName.type = "text";
    loginName.placeholder = "Name";

    loginContent.append(loginName);

    loginEmail.classList.add("login__password");
    loginEmail.type = "password";
    loginEmail.placeholder = "Password";

    loginContent.append(loginEmail);

    loginButton.classList.add("login__button");
    loginButton.innerText = "To come in";

    loginContent.append(loginButton);

    loginBody.append(loginContent);
    formLogin.append(loginBody);
    headerForm.append(formLogin);
    headerContainer.append(headerForm);
    todoHeader.append(headerContainer);
    container.append(todoHeader);
}

export const createHeaderUser = (container) => {
    user.classList.add("header__user", "user");

    userName.classList.add("user__name");
    userName.innerText = "";

    user.append(userName);

    userIcon.classList.add("user__image");
    userIcon.src = "./img/go-out.png";
    userIcon.alt = "icon";

    user.append(userIcon);
    container.append(user);
}