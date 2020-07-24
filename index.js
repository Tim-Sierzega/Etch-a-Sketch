let squareDiv;
let numOfSquaresRow = 10;
let totalNumOfSquares = 256;
let gridContainer = document.querySelector("#container");
let eachSquareDiv = document.querySelectorAll(".grid-item");;

makeGrid(16,16);   


function makeGrid(rows, columns){
        gridContainer.style.gridTemplateColumns = "repeat(" + columns + ", 1fr)";
        gridContainer.style.gridTemplateRows = "repeat(" + rows + ", 1fr)";
        totalNumOfSquares = rows * columns;
        
    for(let row = 0; row < totalNumOfSquares; row++){
        squareDiv = document.createElement('div');
        document.getElementById("container").append(squareDiv);
        squareDiv.classList.add("grid-item");
    }
    eachSquareDiv = document.querySelectorAll(".grid-item");
    eachSquareDiv.forEach(eachSquareDiv => {  
        eachSquareDiv.addEventListener("mouseover", () => {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
             eachSquareDiv.style.backgroundColor = "#"+randomColor;
        })
    });
   
}

let clearButton = document.querySelector("button");

clearButton.addEventListener("click", function(){
    stringOfSquaresRow = prompt("How many squares would you like? [between 32 and 100 is recommended]");
    let numOfSquaresRow = Number(stringOfSquaresRow);
    reset();
    makeGrid(numOfSquaresRow, numOfSquaresRow); 
    
    });
 
eachSquareDiv = document.querySelectorAll(".grid-item");
eachSquareDiv.forEach(eachSquareDiv => {  
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
        eachSquareDiv.addEventListener("mouseover", () => {
             eachSquareDiv.style.backgroundColor = "#"+randomColor;
        })
    });

function reset(){
    eachSquareDiv.forEach(function(eachSquareDiv){
        eachSquareDiv.remove();
    });
}
