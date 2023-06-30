import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { firebaseConfig } from "./database";
import { creteContaiener } from "./createPage/cresteContainer";
import { todo } from "./createPage/cresteContainer";
import { createHeader } from "./createPage/createHeader";
import { createMain } from "./createPage/createMain";
import { createFooter } from "./createPage/createFooter";
import { createUser } from "./users/createUsers";
import { createTask } from "./task/createTask";
import { headerMainBlockButton } from "./createPage/createHomePage";
import { currentTaskContainer } from "./createPage/createHomePage";
import { changeTask } from "./task/changeTask";
import { loginUser } from "./users/loginUser";
import { dragNdrop } from "./task/dragNdrop";
// import { dragNdrop2 } from "./task/dragNdrop";
import "./style/style.scss";

const app = initializeApp(firebaseConfig);

const initApp = () => {
    const body = document.body;
    creteContaiener(body);
    createHeader(todo);
    createMain(todo);
    createFooter(todo);
    createUser();

    headerMainBlockButton.addEventListener("click", (e) => {
        e.preventDefault();
        createTask(currentTaskContainer);
    });

    changeTask();
    loginUser();
    dragNdrop();
    // dragNdrop2();
}

initApp();