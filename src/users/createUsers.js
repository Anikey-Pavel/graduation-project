import { formRegistration } from "../createPage/createHeader";
import { registrationPassword } from "../createPage/createHeader";
import { registrationName } from "../createPage/createHeader";
import { registrationSurname } from "../createPage/createHeader";
import { registrationAge } from "../createPage/createHeader";
import { registrationPhone } from "../createPage/createHeader";
import { registrationEmail } from "../createPage/createHeader";
import { registrationButton } from "../createPage/createHeader";
import { getDatabase, ref, set, get, child } from "firebase/database";

export const createUser = () => {

    registrationButton.addEventListener("click", (e) => {
        const userName = registrationName.value;
        const userPassword = registrationPassword.value;
        const userSurname = registrationSurname.value;
        const userAge = registrationAge.value;
        const userPhone = registrationPhone.value;
        const userEmail = registrationEmail.value;

        const db = getDatabase();
        set(ref(db, "users/" + userName), {
            name: userName,
            surname: userSurname,
            password: userPassword,
            age: userAge,
            phone: userPhone,
            email: userEmail,
        });
        e.preventDefault();

        document.body.classList.remove("lock");
        formRegistration.classList.remove("open");
    })

}