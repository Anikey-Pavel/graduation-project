export const mainBlockText = document.createElement("div");
export const todoMain = document.createElement("main");

export const createMain = (container) => {
    todoMain.classList.add("todo__main-block", "main-block");

    mainBlockText.classList.add("main-block__text");
    mainBlockText.innerText = "Register or login to get started";

    todoMain.append(mainBlockText);
    container.append(todoMain);
}