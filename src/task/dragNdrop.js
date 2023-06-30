import { currentTaskContainer } from "../createPage/createHomePage";
import { completedTaskContainer } from "../createPage/createHomePage";

let draggedItem = null;

export const dragNdrop = () => {
    const task = document.querySelectorAll(".task");
    const lists = document.querySelectorAll(".task__container");
    const listCurrent = document.querySelector("#current");
    const listCompleted = document.querySelector("#completed");

    for (let i = 0; i < task.length; i++) {
        const item = task[i];

        item.addEventListener("dragstart", () => {
            draggedItem = item;

            setTimeout(() => {
                item.style.opacity = "0";
            }, 0)
        })

        item.addEventListener("dragend", () => {
            setTimeout(() => {
                item.style.opacity = "1";
                draggedItem = null;
            })
        })

        for (let j = 0; j < lists.length; j++) {
            const list = lists[j];

            list.addEventListener("dragover", (e) => {
                e.preventDefault();
            });

            list.addEventListener("drop", function (e) {
                this.append(draggedItem);
            })
        }
    }
    task.forEach(item => {
        item.addEventListener("dragstart", () => {
            setTimeout(() => item.classList.add("dragging"), 0);
        });

        item.addEventListener("dragend", () => {
            setTimeout(() => item.classList.remove("dragging"), 0);
        })
    })

    // const initSortableList = (e) => {
    //     e.preventDefault()
    //     const draggingItem = listCurrent.querySelector(".dragging");
    //     const siblings = [...document.querySelectorAll(".task:not(.dragging)")];

    //     let nextSibling = siblings.find(sibling => {
    //         return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    //     })

    //     listCurrent.insertBefore(draggingItem, nextSibling);
    // }

    // listCurrent.addEventListener("dragover", initSortableList);
    // listCurrent.addEventListener("dragenter", e => e.preventDefault());

    // listCompleted.addEventListener("dragover", initSortableList);
    // listCompleted.addEventListener("dragenter", e => e.preventDefault());
}