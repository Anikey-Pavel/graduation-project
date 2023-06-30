export const formRegistration = document.createElement("form");
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

export const createHeader = (container) => {
    const todoHeader = document.createElement("header");
    todoHeader.classList.add("todo__header", "header");

    const headerContainer = document.createElement("div");
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

    const headerForm = document.createElement("div");
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

    const registrationContent = document.createElement("div");
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

    registrationContent.append(registrationName);

    registrationPassword.classList.add("registration__pass");
    registrationPassword.type = "password";
    registrationPassword.placeholder = "Password";

    registrationContent.append(registrationPassword);

    registrationSurname.placeholder = "Surname";
    registrationSurname.type = "text";
    registrationSurname.classList.add("registration__surname");

    registrationContent.append(registrationSurname);

    registrationAge.classList.add("registration__age");
    registrationAge.type = "tel";
    registrationAge.placeholder = "Age";

    registrationContent.append(registrationAge);

    registrationPhone.classList.add("registration__phone");
    registrationPhone.type = "tel";
    registrationPhone.placeholder = "Phone";

    registrationContent.append(registrationPhone);

    registrationEmail.classList.add("registration__email");
    registrationEmail.type = "email";
    registrationEmail.placeholder = "Email";

    registrationContent.append(registrationEmail);

    registrationButton.classList.add("registration__button");
    registrationButton.innerText = "Send";

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

    const formLogin = document.createElement("form");
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