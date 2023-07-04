import { getDatabase, get, child, val, ref } from "firebase/database";
import { userName } from "../createPage/createHeader";
import { createUserInfo } from "./infoUser";
import { userInfo } from "./infoUser";
import { userInfoClose } from "./infoUser";
import { userInfoBody } from "./infoUser";
import { userInfoContent } from "./infoUser";
import { userInfoAge } from "./infoUser";
import { userInfoPhone } from "./infoUser";
import { userInfoEmail } from "./infoUser";
import { userInfoName } from "./infoUser";
import { userInfoSurname } from "./infoUser";

export const showInfoUser = () => {
    userName.addEventListener("click", () => {

        const localVal = localStorage.getItem("userName");
        const dbRef = ref(getDatabase());

        get(child(dbRef, `users/`))
            .then((snapshot) => {
                const usersInfo = snapshot.val()[localVal];

                createUserInfo();

                userInfoName.innerText = `Name: ${usersInfo.name}`;
                userInfoSurname.innerText = `Surname: ${usersInfo.surname}`;
                userInfoPhone.innerText = `Phone: ${usersInfo.phone}`;
                userInfoAge.innerText = `Age: ${usersInfo.age}`;
                userInfoEmail.innerText = `Email: ${usersInfo.email}`;
                console.log(usersInfo.name);
            });

        userInfoClose.addEventListener("click", () => {
            userInfoContent.innerText = "";
            userInfo.remove();
        })

        userInfoBody.addEventListener("click", () => {
            userInfoContent.innerText = "";
            userInfo.remove();
        })
    })
} 