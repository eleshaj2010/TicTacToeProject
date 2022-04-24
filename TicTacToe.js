let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]
let player1 = 'X';
let player2 = 'O';
let currentPlayer = 'X';
let gameBoard = document.querySelector('.gameBoard')
let playerTurn = "null"
function switchPlayer(){
    if ( playerTurn == 0){
        playerTurn = 1
    }
    else{
        playerTurn = 0
    }
}

function playerTurn(){
    if ( playerTurn == "X") {
        currentPlayer = "O"
    }
    else{
        playerTurn = "X"
    }
    }


    gameBoard.addEventListener('click', function(event){
        if (event.target.innerHTML == ''){
            event.target.innerHTML = currentPlayer;
            console.log('clicked');
            switchPlayer()
        }
    })

const gameState = document.querySelector('.board').addEventListener();
let boardStatus= board;
const whoWon = () => `Player ${currentPlayer} wins the game !`;

const currentTurn = () => `Player ${currentPlayer} its your turn !`;

const whosTurn = gameState.innerHTML;

function usedCell(clickedCell, placeNumber){
    whosTurn[clickedCell]= currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function changePlayer(){
}

function winDraw(){
}

function clickedCell(event){
    const placeNumber = clickedCell.indexOf(gameBoard);

   /* if (whosTurn[clickedCell] !=='' || !gamePlay){
        return;
    }*/
    event(clickedCell, placeNumber, winDraw());
    console.log(currentPlayer);
}

const place = document.querySelector('place');
document.querySelectorAll(place).forEach(cell => cell.addEventListener('click', clickedCell));

document.querySelector('.RestartGame').addEventListener("click", clearBoard);

function clearBoard(){
    for(let i=0; i<gameBoard.length; i++){
        for (let k=0; k < gameBoard.length; k++){
            board[i][k] = '';
        }
    }
}

clearBoard()
 /*use git repo state and map div classes to which place is clicked*/