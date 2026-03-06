function gridSquares(number){
    const button = document.getElementById("change-grid"); 
    const contDiv = document.createElement("div")
    button.addEventListener("click", changeGrid);
    contDiv.id = "container";

    for(let i = 0; i < number; ++i){
        // creating new element(div)
        const row = document.createElement("div");
        row.classList = "rows";
        contDiv.appendChild(row);
        for(let j = 0; j < number; ++j){
            const square = document.createElement("div");
            square.classList = "squares";
            row.appendChild(square);
            square.addEventListener("mouseenter", changeBackgroundColor);
        }
    }
    document.body.appendChild(contDiv);
}
function changeBackgroundColor(event){
    let [r, g, b] = getRandomRGB();
    const square = event.target;
    square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    
}
function getRandomRGB(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return [r, g, b];
}
function changeGrid(event){
    const number = prompt("Enter the number of squares per side: ");
    const cont = document.getElementById("container");
    cont.remove();
    gridSquares(number);
}

gridSquares(16);