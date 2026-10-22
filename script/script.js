const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
    const colDiv = document.createElement("div");
    colDiv.classList.add("grid");
    colDiv.classList.add("col");
    container.appendChild(colDiv);

    for (let j = 0; j < 16; j++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("grid");
        rowDiv.classList.add("row");
        colDiv.appendChild(rowDiv);
    }
}

container.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains("grid")) {
        event.target.style.backgroundColor = "black";
    }
});