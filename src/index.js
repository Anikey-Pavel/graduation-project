import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./database";
import { creteContaiener } from "./createPage/cresteContainer";
import { todo } from "./createPage/cresteContainer";
import { createHeader } from "./createPage/createHeader";
import { createMain } from "./createPage/createMain";
import { createFooter } from "./createPage/createFooter";
import { createUser } from "./users/createUsers";
import { createTask } from "./task/createTask";
import { createHomePage, headerMainBlockButton } from "./createPage/createHomePage";
import { currentTaskContainer } from "./createPage/createHomePage";
import { changeTask } from "./task/changeTask";
import { dragNdrop } from "./task/dragNdrop";
import { loginButton } from "./createPage/createHeader";
import { userIcon } from "./createPage/createHeader";
import { mainBlockText } from "./createPage/createMain";
import { loginUser } from "./users/loginUser";
import { loginName } from "./createPage/createHeader";
import { loginEmail } from "./createPage/createHeader";
import { todoMain } from "./createPage/createMain";
import { mainBlockContainer } from "./createPage/createHomePage";
import { headerContainer } from "./createPage/createHeader";
import { headerForm } from "./createPage/createHeader";
import { user } from "./createPage/createHeader";
import { todoFooter } from "./createPage/createFooter";
import { addTask } from "./users/addTask";
import { formLogin } from "./createPage/createHeader";
import { mainBlockContent } from "./createPage/createHomePage";
import { completedTaskContainer } from "./createPage/createHomePage";
import { showInfoUser } from "./users/showInfoUser";
import "./style/style.scss";

const app = initializeApp(firebaseConfig);

const initApp = () => {
    const body = document.body;
    creteContaiener(body);
    createHeader(todo);
    changeTask();

    if (localStorage.getItem("userName")) {
        createMain(todo)
        mainBlockText.innerText = "";
        createHomePage(todoMain);
        mainBlockContainer.innerText = "";
        mainBlockContent.innerText = "";
        completedTaskContainer.innerText = "";
        currentTaskContainer.innerText = "";
        loginUser(localStorage.getItem("userName"), localStorage.getItem("userPassword"));

        addTask(localStorage.getItem("userName"));
    } else {
        createMain(todo);
    }

    headerMainBlockButton.addEventListener("click", (e) => {
        createTask(currentTaskContainer);
    });

    loginButton.addEventListener("click", (e) => {
        e.preventDefault();
        loginUser(loginName.value, loginEmail.value);
        addTask(loginName.value);
    })

    userIcon.addEventListener("click", () => {
        mainBlockContainer.innerText = "";
        mainBlockContent.innerText = "";
        completedTaskContainer.innerText = "";
        currentTaskContainer.innerText = "";
        headerContainer.append(headerForm);
        user.remove();
        createMain(todo);
        todo.append(todoFooter);
        formLogin.classList.remove("open");
        localStorage.clear();
    })
    dragNdrop();
    showInfoUser();

    createFooter(todo);
    createUser();
}

initApp();