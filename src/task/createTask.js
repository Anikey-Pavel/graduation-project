import { headerMainBlockInput } from "../createPage/createHomePage";
import { dragNdrop } from "./dragNdrop";
import { getRndInteger } from "../utils/createRundomNum";
import { getDatabase, ref, set } from "firebase/database";
import { userName } from "../createPage/createHeader";

export const taskName = document.createElement("div");

export const createTask = (container) => {
    const task = document.createElement("div");
    task.classList.add("task");
    task.setAttribute("draggable", "true");
    task.id = getRndInteger(0, 1000);

    taskName.classList.add("task__name");
    taskName.innerText = headerMainBlockInput.value;

    task.append(taskName);

    const taskButton = document.createElement("button");
    taskButton.innerText = "Delete";
    taskButton.classList.add("task__button");

    task.append(taskButton);
    container.append(task);

    const dbS = getDatabase();
    set(ref(dbS, `users/${userName.textContent}/task/${task.id}`), {
        id: task.id,
        name: taskName.textContent,
    });

    dragNdrop();
}