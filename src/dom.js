console.log("dom.js")

const body = document.querySelector("body");

export const styleBody = () => {
    body.style.background = "pink";
}

export const addTitle = (text) => {
    const title = document.createElement("h1");
    title.textContent = text;
    body.appendChild(title);
}

styleBody();
addTitle("hello World from the dom file")