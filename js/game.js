let board = ['','','','','','','','',''];  // pode ser ou o, x ou ''
let playerTime = 0; // jogador1 - 0; jogador2 - 1
let gameOver = false;

let score = [0,0];
let symbols = ['o', 'x']; // se vez do jogador1 coloco o, se vez do jogador2 coloco x
let winStates =[ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];  //mapeia as posições que dão vitória

function handleMove(position){

    if (gameOver){
        return;
    }

    if(board[position] == ''){
        board[position] = symbols[playerTime];

        gameOver = isWin();  // verifica se teve vencedor pós jogada

        if(gameOver == false){
            playerTime = (playerTime == 0) ? 1 : 0;
        }
    }
    return gameOver;
}

function isWin(){

    for(let i = 0; i < winStates.length; i++){
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];
        
        if(board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != ''){
            score[playerTime] += 1;
             return true
        }
    }

    return false;
};

