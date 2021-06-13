let players = [0x1F534,0x274C];

document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll('.square')
    
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
});

function handleClick(event){

    let square = event.target;
    let position = square.id;


    if(handleMove(position)){
        setTimeout(() => {  
            alert(`O jogo acabou! \nO vencedor foi ${playerTime}`);
        }, 20);
    };
    updateSquare(position);
};

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class=${symbol}></div>`
}

function restartGame(){
    board = ['','','','','','','','','']
    playerTime = 0;
    gameOver = false;
    clearStage();
}

function clearStage(){
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.innerHTML = '';
    });
}

document.getElementById('restart').onclick = restartGame;