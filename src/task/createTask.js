import { headerMainBlockInput } from "../createPage/createHomePage";
import { dragNdrop } from "./dragNdrop";

export const createTask = (container) => {
    const task = document.createElement("div");
    task.classList.add("task");
    task.setAttribute("draggable", "true");
    task.id = "";

    const taskName = document.createElement("div");
    taskName.classList.add("task__name");
    taskName.innerText = headerMainBlockInput.value;

    task.append(taskName);

    const taskButton = document.createElement("button");
    taskButton.innerText = "Delete";
    taskButton.classList.add("task__button");

    task.append(taskButton);
    container.append(task);

    dragNdrop();
}