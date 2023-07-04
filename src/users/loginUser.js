import { getDatabase, ref, get, child } from "firebase/database";
import { headerForm } from "../createPage/createHeader";
import { userName } from "../createPage/createHeader";
import { createHeaderUser } from "../createPage/createHeader";
import { headerContainer } from "../createPage/createHeader";
import { createHomePage } from "../createPage/createHomePage";
import { mainBlockText } from "../createPage/createMain";
import { todoMain } from "../createPage/createMain";

export const loginUser = (login, password) => {
    const dbRef = ref(getDatabase());

    get(child(dbRef, `users/`))
        .then((snapshot) => {
            const users = Object.keys(snapshot.val());
            const pass = snapshot.val()[login].password;

            users.forEach((user) => {
                if (user === login && password === pass) {
                    headerForm.remove();
                    mainBlockText.remove();

                    localStorage.setItem("userName", user);
                    localStorage.setItem("userPassword", pass);

                    createHeaderUser(headerContainer);
                    createHomePage(todoMain);

                    userName.innerText = user;
                }
            })
        })
}