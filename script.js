const   board = document.getElementById('board');
const   squares = document.getElementsByClassName('square');
const   player = ['X', 'O'];
let     current_player = player[0];
const   endMessage = document.createElement('h2');
var     gameEnd = false;
endMessage.textContent = `X's turn`;
endMessage.style.marginTop = '30px';
endMessage.style.textAlign = 'center';
board.after(endMessage)

const winning_combinations = 
[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkwin(current_player) {
    for (let i = 0; i < winning_combinations.length; i++) {
        const [a, b, c] = winning_combinations[i];
        if (squares[a].textContent === current_player && squares[b].textContent === current_player && squares[c].textContent === current_player) {
            gameEnd = true;
            return (true);
        }
    }
    return (false);
}


for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', () => {
        if (gameEnd === true) 
                return;
        if (squares[i].textContent !== '') {
            return ;
        }
        squares[i].textContent = current_player;
        if (checkwin(current_player)) {
            endMessage.textContent = `Game over, ${current_player} win`;
            return ;
        }
        if (tie()) {
            endMessage.textContent = `Game is tied`;
            return ;
        }
        current_player = (current_player === player[0]) ? player[1] : player[0];
        endMessage.textContent = `${current_player}'s turn`;
    });
}

function tie() {
    for (let i = 0; i < squares.length; i++) {
        if (squares[i].textContent === '') {
            return false;   
        }
    }
    return true;
}

function restart() {
    gameEnd = false;
    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = "";
    }
    endMessage.textContent=`X's turn!`
    current_player = player[0];
}
