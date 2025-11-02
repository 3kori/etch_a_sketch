const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    const column = document.createElement("div");
    column.classList.add("column");

    for (let j = 0; j < 16; j++) {
        const row = document.createElement("div");
        row.classList.add("row");

        function changeColor () {
            row.classList.add("pen");
        }

        row.addEventListener("mouseenter", changeColor);

        column.appendChild(row);
    }
    container.appendChild(column);


}

