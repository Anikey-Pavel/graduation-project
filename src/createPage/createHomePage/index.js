import { dragNdrop } from "../../task/dragNdrop";

export const headerMainBlockButton = document.createElement("button");
export const currentTaskContainer = document.createElement("div");
export const headerMainBlockInput = document.createElement("input");
export const mainBlockContent = document.createElement("div");
export const completedTaskContainer = document.createElement("div");

export const createHomePage = (container) => {
    const mainBlockContainer = document.createElement("div");
    mainBlockContainer.classList.add("main-block__container", "container");

    const mainBlockHeader = document.createElement("form");
    mainBlockHeader.classList.add("main-block__header", "header-main-block");

    const headerMainBlockTitle = document.createElement('div');
    headerMainBlockTitle.classList.add("header-main-block__title");
    headerMainBlockTitle.innerText = "New task";

    mainBlockHeader.append(headerMainBlockTitle);

    headerMainBlockInput.classList.add("header-main-block__input");
    headerMainBlockInput.type = "text";

    mainBlockHeader.append(headerMainBlockInput);

    headerMainBlockButton.classList.add("header-main-block__button");
    headerMainBlockButton.innerText = "Create task";
    headerMainBlockButton.type = "submit";

    mainBlockHeader.append(headerMainBlockButton);
    mainBlockContainer.append(mainBlockHeader);

    mainBlockContent.classList.add("main-block__content");

    const mainBlockCurrentTask = document.createElement("div");
    mainBlockCurrentTask.classList.add("main-block__current-task", "current-task");

    const currentTaskTitle = document.createElement("div");
    currentTaskTitle.classList.add("current-task__title");
    currentTaskTitle.innerText = "Current task";

    mainBlockCurrentTask.append(currentTaskTitle);

    currentTaskContainer.classList.add("task__container");
    currentTaskContainer.id = "current";

    mainBlockCurrentTask.append(currentTaskContainer);
    mainBlockContent.append(mainBlockCurrentTask);

    const mainBlockCompletedTask = document.createElement("div");
    mainBlockCompletedTask.classList.add("main-block__completed-task", "completed-task");

    const completedTaskTitle = document.createElement("div");
    completedTaskTitle.classList.add("completed-task__title");
    completedTaskTitle.innerText = "Completed task";

    mainBlockCompletedTask.append(completedTaskTitle);

    completedTaskContainer.classList.add("task__container");
    completedTaskContainer.id = "completed";

    mainBlockCompletedTask.append(completedTaskContainer);

    mainBlockContent.append(mainBlockCompletedTask);

    mainBlockContainer.append(mainBlockContent);
    container.append(mainBlockContainer);

    dragNdrop();

}