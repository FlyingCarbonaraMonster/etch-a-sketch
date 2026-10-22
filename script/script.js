function createGrid(squares = 32) {
    container.replaceChildren();
    for (let i = 0; i < squares; i++) {
        const colDiv = document.createElement("div");
        colDiv.classList.add("grid");
        colDiv.classList.add("col");
        container.appendChild(colDiv);

        for (let j = 0; j < squares; j++) {
            const rowDiv = document.createElement("div");
            rowDiv.classList.add("grid");
            rowDiv.classList.add("row");
            colDiv.appendChild(rowDiv);
        }
    }
}

function colorSquares(event) {
    if (event.target.classList.contains("grid") && event.buttons === 1) {
        event.target.style.backgroundColor = "black";
    }
}

const container = document.querySelector("#container");
const btnSquares = document.querySelector(".squares-number");

createGrid();

container.addEventListener('dragstart', event => {
    event.preventDefault();
})
container.addEventListener('mouseover', colorSquares);

btnSquares.addEventListener('click', () => {
    let numberOfSquares = prompt("How many squares per side? Minimum - 10 Maximum - 100 Default - 32");
    if (numberOfSquares < 10 || numberOfSquares > 100) {
        createGrid();
    } else {
        createGrid(numberOfSquares);
    }
});