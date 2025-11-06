const container = document.querySelector(".container");
const btn = document.querySelector("button");

function createGrid (size = 16){
    container.innerHTML = "";

    for (let i = 0; i < size; i++) {
        const column = document.createElement("div");
        column.classList.add("column");

        for (let j = 0; j < size; j++) {
            const row = document.createElement("div");
            row.classList.add("row");

            function changeColor () {
                row.classList.add("pen");
            }

            row.addEventListener("mouseover", changeColor);

            column.appendChild(row);
        }
        container.appendChild(column);
    }

}

createGrid();

btn.addEventListener("click", () => {
    let size = parseInt(prompt("Enter size of grid: "));
    
    if (size > 100 || size < 16 || isNaN(size)) {
        alert("Size must be a number between 16 and 100");
        size= 16;   
    }

    createGrid(size);
})
