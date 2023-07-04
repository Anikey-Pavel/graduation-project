import { getDatabase, ref, val, get, child } from "firebase/database";
import { currentTaskContainer } from "../createPage/createHomePage";
import { dragNdrop } from "../task/dragNdrop";

export const addTask = (login) => {
    const dbRef = ref(getDatabase());

    get(child(dbRef, `users/${login}/task`))
        .then((snapshot) => {
            const tasks = Object.values(snapshot.val());

            tasks.forEach((elem) => {

                const task = document.createElement("div");
                task.classList.add("task");
                task.setAttribute("draggable", "true");
                task.id = elem.id;

                const taskName = document.createElement("div");
                taskName.classList.add("task__name");
                taskName.innerText = elem.name;

                task.append(taskName);

                const taskButton = document.createElement("button");
                taskButton.innerText = "Delete";
                taskButton.classList.add("task__button");

                task.append(taskButton);
                currentTaskContainer.append(task);

                dragNdrop();
            })
        })
}