const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
    const colDiv = document.createElement("div");
    colDiv.className = "col";
    container.appendChild(colDiv);

    for (let j = 0; j < 16; j++) {
        const rowDiv = document.createElement("div");
        rowDiv.className = "row";
        colDiv.appendChild(rowDiv);
    }
}