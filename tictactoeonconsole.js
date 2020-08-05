// Playing field
"use strict"
var grid = [
    
    ['','','',],
    ['','','',],
    ['','','',]
]
let coords;

console.table(grid)

let playerInput = document.querySelector('#input1')
let playerSumbit = document.querySelector('#button1')

button1.addEventListener('click', playerMove)

function playerMove(){
    var inputText = playerInput.value;
    coords = inputText.split('')
    var y = parseInt(coords[2])
    
    //Parsing the 2D array
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; i < grid[i].length; j++){
            if(grid[i][j] != "X" && grid[i][j] != "O"){
                if(coords[0] === 'A'){ 
                    grid[y][j] = 'X'         
                 }
                 
                 if(coords[0] === 'B'){
                     grid[y][j+1] = 'X'  
                 }
     
                 if(coords[0] === 'C'){
                     grid[y][j+2] = 'X'
                 }     
            }
        break       
        }
    }
    
    opponentMove()
    updateGrid()
    checkForPlayerVictory()
    checkForOpponentVictory()
}

function rng() {
    return Math.floor(Math.random() * 3);
}
function opponentMove(){
    let randomNumberX = rng()
    let randomNumberY = rng()
    console.log(randomNumberY)
    
    if(grid[randomNumberX][randomNumberY] === "O" || grid[randomNumberX][randomNumberY] === "X"){
        let randomNumberX = rng()
        let randomNumberY = rng()
        grid[randomNumberX][randomNumberY] = "O"
    } else if (grid[randomNumberX][randomNumberY] === "O" && grid[randomNumberX][randomNumberY] === "X") {
        let randomNumberX = rng()
        let randomNumberY = rng()
        grid[randomNumberX][randomNumberY] = "O"
    } else {
        grid[randomNumberX][randomNumberY] = "O"
    }
}

function updateGrid(){
    console.table(grid)
}

function checkForPlayerVictory(){
    for(let i = 0; i < 3; i++){
        for(let j = 0; i < 3; j++){
            if(grid[i][j] === "X" && grid[i+1][j] === "X" && grid[i+2][j] === "X"){ //Columns
                console.log("You win!")
            }

            if(grid[i][j] === "X" && grid[i][j+1] === "X" && grid[i][j+2] === "X"){ //Rows
                console.log("You win!")
                
            }

            if(grid[0][0] === "X" && grid[1][1] === "X" && grid[2][2] === "X"){ //Diagonal 1
                console.log("You win!")
               
            }

            if(grid[0][2] === "X" && grid[1][1] === "X" && grid[0][2] === "X"){ //Diagonal 2
                console.log("You win!")
                
            }
            break
        }
    }
}

function checkForOpponentVictory(){
    for(let i = 0; i < 3; i++){
        for(let j = 0; i < 3; j++){
            if(grid[i][j] === "O" && grid[i+1][j] === "O" && grid[i+2][j] === "O"){ //Columns
                console.log("CPU wins!")
            }

            if(grid[i][j] === "O" && grid[i][j+1] === "O" && grid[i][j+2] === "O"){ //Rows
                console.log("CPU wins!")
            }

            if(grid[0][0] === "O" && grid[1][1] === "O" && grid[2][2] === "O"){ //Diagonal 1
                console.log("CPU wins!")
            }

            if(grid[0][2] === "O" && grid[1][1] === "O" && grid[0][2] === "O"){ //Diagonal 2
                console.log("CPU wins!")
            }
            break
        }
    }
}
