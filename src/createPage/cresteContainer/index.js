export const todo = document.createElement("div");

export const creteContaiener = (container) => {
    todo.classList.add("todo");
    container.append(todo);
}