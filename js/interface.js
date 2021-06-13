let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');


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
            if(playerTime == 0){
                alert("O jogo acabou! \nO vencedor foi o jogador " + String.fromCodePoint(0x2B55));
            }else{
                alert("O jogo acabou! \nO vencedor foi o jogador " + String.fromCodePoint(0x274c));
            }     
        }, 20);
        renderScore();
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

function renderScore(){
    player1.innerHTML = `${score[0]}`
    player2.innerHTML = `${score[1]}`
}
