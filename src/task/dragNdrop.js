let draggedItem = null;

export const dragNdrop = () => {
    const task = document.querySelectorAll(".task");
    const lists = document.querySelectorAll(".task__container");

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
}