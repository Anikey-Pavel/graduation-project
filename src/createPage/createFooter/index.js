export const createFooter = (container) => {
    const todoFooter = document.createElement("footer");
    todoFooter.classList.add("todo__footer", "footer");

    const footerContainer = document.createElement("div");
    footerContainer.classList.add("footer__container", "container");

    const footerContent = document.createElement("div");
    footerContent.classList.add("footer__content");

    const footerImage = document.createElement("div");
    footerImage.classList.add("footer__image");

    const img = document.createElement("img");
    img.src = "./img/logo.png";
    img.alt = "logo";

    footerImage.append(img);
    footerContent.append(footerImage);
    footerContainer.append(footerContent);
    todoFooter.append(footerContainer);
    container.append(todoFooter);
}