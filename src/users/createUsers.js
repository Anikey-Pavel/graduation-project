import { formRegistration } from "../createPage/createHeader";
import { registrationPassword } from "../createPage/createHeader";
import { registrationName } from "../createPage/createHeader";
import { registrationSurname } from "../createPage/createHeader";
import { registrationAge } from "../createPage/createHeader";
import { registrationPhone } from "../createPage/createHeader";
import { registrationEmail } from "../createPage/createHeader";
import { registrationButton } from "../createPage/createHeader";
import { getDatabase, ref, set } from "firebase/database";
import { createHomePage } from "../createPage/createHomePage";
import { mainBlockText } from "../createPage/createMain";
import { todoMain } from "../createPage/createMain";

export const createUser = () => {

    registrationButton.addEventListener("click", (e) => {
        const userName = registrationName.value;
        const userPassword = registrationPassword.value;
        const userSurname = registrationSurname.value;
        const userAge = registrationAge.value;
        const userPhone = registrationPhone.value;
        const userEmail = registrationEmail.value;

        const db = getDatabase();
        set(ref(db, "users/" + `user${userName}`), {
            name: userName,
            surname: userSurname,
            password: userPassword,
            age: userAge,
            phone: userPhone,
            email: userEmail,
        });
        e.preventDefault();
        mainBlockText.remove();
        createHomePage(todoMain);

        document.body.classList.remove("lock");
        formRegistration.classList.remove("open");
    })

}