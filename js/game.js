// 1 - iniciar as variáveis

let board = ['','','','','','','','',''];  // pode ser ou o, x ou ''
let playerTime = 0; // jogador1 - 0; jogador2 - 1
let symbols = ['o', 'x']; // se vez do jogador1 coloco o, se vez do jogador2 coloco x


function handleMove(position){

    if(board[position] == ''){
        board[position] = symbols[playerTime];

        if (playerTime == 0){
            playerTime = 1;
        }else{
            playerTime = 0;
        }
    }
}