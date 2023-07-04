import { mainBlockContent } from "../createPage/createHomePage";
import { getDatabase, remove, ref, val, get, child } from "firebase/database";
import { loginName } from "../createPage/createHeader";

const deleteTask = (login) => {
    if (event.target.className !== "task__button") return;

    const task = event.target.closest('.task');
    const dbRef = ref(getDatabase());

    remove(child(dbRef, `users/${login}/task/${task.id}`))

    task.remove();
}

export const changeTask = () => {
    mainBlockContent.addEventListener("click", (event) => {
        event.preventDefault();
        deleteTask(loginName.value);
    })
}