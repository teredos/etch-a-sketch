const gridContainer = document.getElementById("grid-container");
gridContainer.style.gridTemplateColumns = "repeat(16, auto)";
createGridItems(16);

const resetBtn = document.createElement("button");
resetBtn.setAttribute("id", "reset-button");
resetBtn.innerText = "Clear";
resetBtn.addEventListener("click", clearGrid);
document.getElementById("options").appendChild(resetBtn);

const gridDimensionsBtn = document.createElement("button");
gridDimensionsBtn.setAttribute("id", "dimensions-button");
gridDimensionsBtn.textContent = "Size";
gridDimensionsBtn.addEventListener("click", function() {
    let dimsInput = prompt("Choose a number between 1 and 128 to set as the height and width of the grid.");
    if (dimsInput <= 128 && dimsInput >= 1) {
        let gridItems = document.querySelectorAll(".grid-item");
        for (i = 0; i < gridItems.length; i++) {
            if (gridItems[i].style.backgroundColor != "white") {
                gridItems[i].style.backgroundColor = "white";
            };
        };
        currentGridSize.textContent = `Grid Size: ${dimsInput} x ${dimsInput}`;
        gridContainer.innerHTML = "";
        gridContainer.style.gridTemplateColumns = `repeat(${dimsInput}, auto)`;
        createGridItems(dimsInput);
    } else if (dimsInput === null || dimsInput === "") {
    } else {
        alert("Please only enter numbers between 1 and 128.");
    }
    
});
document.getElementById("options").appendChild(gridDimensionsBtn);

const setColorBtn = document.createElement("button");
setColorBtn.setAttribute("id", "color-button");
setColorBtn.textContent = "Colour";
document.getElementById("options").appendChild(setColorBtn);
setColorBtn.addEventListener("click", function() {

});

const eraserBtn = document.createElement("button");
eraserBtn.setAttribute("id", "eraser-button");
eraserBtn.textContent = "Eraser";
document.getElementById("options").appendChild(eraserBtn);
eraserBtn.addEventListener("click", function() {

});

const currentOptions = document.querySelector("#current-options");
currentOptions.style.fontFamily = "Arial";
currentOptions.style.fontSize = "25px";
currentOptions.style.marginTop = "25px";

const currentGridSize = document.createElement("div");
currentGridSize.style.fontSize = "0.8em";
currentGridSize.style.marginTop = "5px";
currentGridSize.setAttribute("id", "current-grid-size");
currentGridSize.setAttribute("class", "current-option");
currentGridSize.textContent = "Grid Size: 16 x 16";
currentOptions.appendChild(currentGridSize);

const currentColor = document.createElement("div");
currentColor.style.fontSize = "0.8em";
currentColor.setAttribute("id", "current-color");
currentColor.setAttribute("class", "current-option");
currentColor.textContent = "Colour: Random";
currentOptions.appendChild(currentColor);

function clearGrid() {
    let gridItems = document.querySelectorAll(".grid-item");
    for (i = 0; i < gridItems.length; i++) {
        if (gridItems[i].style.backgroundColor != "white") {
            gridItems[i].style.backgroundColor = "white";
        };
    };
    gridContainer.innerHTML = "";
    gridContainer.style.gridTemplateColumns = `repeat(${Math.sqrt(gridItems.length)}, auto)`;
    createGridItems(Math.sqrt(gridItems.length));
}

function createGridItems(input) {
    for (i = 1; i <= (input * input); i++) {
        let newDiv = document.createElement("div");
        newDiv.className = "grid-item";
        newDiv.style.height = `100%`;
        newDiv.style.width = `100%`;
        newDiv.style.backgroundColor = "white";
        let rndVal1 = Math.floor(Math.random() * 256);
        let rndVal2 = Math.floor(Math.random() * 256);
        let rndVal3 = Math.floor(Math.random() * 256);
        newDiv.addEventListener("mouseover", function() {
            if (newDiv.style.backgroundColor === "white") {
                newDiv.style.backgroundColor = `rgb(${rndVal1}, ${rndVal2}, ${rndVal3})`;
            } else if (newDiv.style.backgroundColor !== "white") {
                if (newDiv.style.backgroundColor == `rgb(${rndVal1}, ${rndVal2}, ${rndVal3})`) {
                    newDiv.style.backgroundColor = `rgb(${Math.floor(rndVal1 * 0.9)}, ${Math.floor(rndVal2 * 0.9)}, ${Math.floor(rndVal3 * 0.9)})`
                }
                for (a = 9; a > 0; a--) {
                    if (newDiv.style.backgroundColor == `rgb(${Math.floor(rndVal1 * ("0." + a))}, ${Math.floor(rndVal2 * ("0." + a))}, ${Math.floor(rndVal3 * ("0." + a))})`) {
                        newDiv.style.backgroundColor = `rgb(${Math.floor(rndVal1 * ("0." + (a - 1)))}, ${Math.floor(rndVal2 * ("0." + (a - 1)))}, ${Math.floor(rndVal3 * ("0." + (a - 1)))})`;
                        break;
                    }
                }
            }
        });
        gridContainer.appendChild(newDiv);
    };
}


