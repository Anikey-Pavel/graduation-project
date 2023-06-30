import { mainBlockContent } from "../createPage/createHomePage";
import { currentTaskContainer } from "../createPage/createHomePage";
import { completedTaskContainer } from "../createPage/createHomePage";

export const changeTask = () => {
    mainBlockContent.addEventListener("change", (event) => {
        if (event.target.className !== "task__checkbox") return;

        const task = event.target.closest('.task');
        const clone = task.cloneNode(true);

        if (document.querySelector(".task__checkbox").checked) {
            task.remove();
            completedTaskContainer.prepend(clone);
        }

        if (document.querySelector(".task__checkbox").checked === false) {
            task.remove();
            currentTaskContainer.append(clone);
        }
    })

    mainBlockContent.addEventListener("click", (event) => {
        if (event.target.className !== "task__button") return;

        const task = event.target.closest('.task');

        task.remove();
    })
}